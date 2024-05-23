import axios from "axios";

const pathBackend = axios.create({
    // baseURL: "http://localhost:8080",
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json"
    }
})

export default pathBackend