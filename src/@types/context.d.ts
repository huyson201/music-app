
interface ContextProviderProps {
    children: any
}
interface SidebarContext {
    isClose: boolean,
    closeSidebar: () => void
    openSidebar: () => void,
    toggle: () => void
}

// auth context define
interface AuthState {
    isLogged: boolean,
    profile: AuthProfile | null,
    session: AuthSession | null,
    token: string | null

}
interface AuthSession {
    key: string
    name: string
    subscriber: number,
    token: string | null
}
interface AuthContext {
    auth: AuthState | null,
    login: (token: string) => Promise<{ session: AuthSession, profile: AuthProfile }>,
    logout: () => void,
    isAuthenticated: () => boolean

}