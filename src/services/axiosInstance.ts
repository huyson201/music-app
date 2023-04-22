import axios from "axios";
import configs from "./apiConfig";

const axiosInstance = axios.create({
    baseURL: configs.base_url,
    headers: {
        "Content-Type": "application/json"
    },
    params: {
        api_key: configs.api_key,
        format: "json",

    }
})

export default axiosInstance