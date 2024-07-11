import axios from "axios";

let TOKEN = JSON.parse(localStorage.getItem("user_token"));

const pathBackend = axios.create({
    baseURL: "http://localhost:9000",
    // baseURL: "https://home-money-manager.up.railway.app",
})

pathBackend.interceptors.request.use(async config => {
        if (TOKEN) {
            config.headers.Authorization = `Bearer ${TOKEN.acces_token}`;
            config.headers["Content-Type"] = "application/json";
            return config;
        }

        config.auth = {password: "user", username: "user"}

        return config;
    }, error => {
        return Promise.reject(error);
    }
)

pathBackend.interceptors.response.use(async response => {

    return response;

}, error => {
    console.log(error)
    let status = error.response.status;
    if (status === 401 && TOKEN) {
        console.log(error.response.status);
        window.location.href = "/login";
        return
    }
    if (status === 401) {
        console.log("precisa do refresh token")
    }
    return error;
})

export default pathBackend