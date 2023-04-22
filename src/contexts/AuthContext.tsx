import React, { useCallback, useState } from 'react'
import lastFmService from '../services/lastFmService'


const AuthContext = React.createContext<AuthContext>({
    auth: null,
    login(token) {
        return new Promise((resolve, reject) => { })
    },
    logout() {

    },
    isAuthenticated() {
        return false
    },
})

export const useAuth = () => React.useContext(AuthContext)

let callGetSession: any | null = null

export default function AuthProvider({ children }: ContextProviderProps) {

    // initial user state. if storage exist data then return stored data else return default
    const [authState, setAuthState] = useState<AuthState | null>(() => {
        const storeData = localStorage.getItem("persist.auth")

        if (storeData && JSON.parse(storeData)) {
            return JSON.parse(storeData) as AuthState
        }

        return {
            isLogged: false,
            profile: null,
            session: null,
            token: null
        }

    })

    // handle user login
    const login = useCallback(async (token: string) => {
        try {
            //  if api was called then it would not call again
            callGetSession = callGetSession !== null ? callGetSession : lastFmService.auth.getSession(token)
            let session = (await callGetSession).data.session

            // get profile
            let profile = (await lastFmService.user.getInfo(session.name)).data.user

            // save data to storage and state
            const authData = {
                isLogged: true,
                profile: profile,
                session: session,
                token: token
            }

            localStorage.setItem("persist.auth", JSON.stringify(authData))
            setAuthState(authData)

            // reset call data
            callGetSession = null
            return Promise.resolve({ session, profile })
        } catch (error: any) {
            callGetSession = null
            return Promise.reject(error)
        }

    }, [])

    // handle user logout
    const logout = useCallback(() => {
        const authData = {
            isLogged: false,
            profile: null,
            session: null,
            token: null
        }
        localStorage.setItem("persist.auth", JSON.stringify(authData))
        setAuthState(authData)
    }, [])


    const isAuthenticated = useCallback(() => {
        return authState?.isLogged && authState.session !== null ? true : false
    }, [authState])

    return (
        <AuthContext.Provider value={{ auth: authState, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}