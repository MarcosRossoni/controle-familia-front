import axios from "axios";
import {getToken} from "../services/auth/auth.js";

const pathBackend = axios.create({
    baseURL: "http://localhost:8080",
    // baseURL: "https://home-money-manager.up.railway.app",
})

pathBackend.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers["Content-Type"] = "application/json";
    }

    // config.auth = {password: "user", username: "user"}

    return config;
})

export default pathBackend