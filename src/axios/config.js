import axios from "axios";

const pathBackend = axios.create({
    // baseURL: "http://localhost:8080",
    baseURL: "https://home-money-manager.up.railway.app",
    headers: {
        "Content-Type": "application/json"
    }
})

export default pathBackend