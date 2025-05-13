import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost5000"
})

export default api;