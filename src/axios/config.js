import axios from "axios";
import {redirect} from "react-router-dom";
import useAuth from "../context/useAuth.js";

const pathBackend = axios.create({
    baseURL: "http://localhost:8080",
    // baseURL: "https://home-money-manager.up.railway.app",
})

pathBackend.interceptors.request.use(async config => {
        const token = useAuth();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            config.headers["Content-Type"] = "application/json";
        }

        // config.auth = {password: "user", username: "user"}

        return config;
    }, error => {
        return Promise.reject(error);
    }
)

pathBackend.interceptors.response.use(async response => {
    console.log("response", response);
    return response;
}, error => {
    // if (error.response.status === 401) {
        redirect("/login");
    // }
})

export default pathBackend