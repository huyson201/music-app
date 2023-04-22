import axiosInstance from "./axiosInstance"
import createSig from "../utils/createSig"
const lastFmService = {
    user: {
        getInfo: (username: string) => {
            return axiosInstance.get<{ user: AuthProfile }>("", {
                params: {
                    method: "user.getinfo",
                    user: username,
                }
            })
        }
    },
    album: {

    },
    chart: {

    },
    artist: {

    },
    auth: {
        getSession: (token: string) => {
            const sig = createSig("auth.getSession", token)
            return axiosInstance.get<{ session: AuthSession }>("/", {
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    token: token,
                    method: "auth.getSession",
                    api_sig: sig
                }
            })
        }
    }
}


export default lastFmService