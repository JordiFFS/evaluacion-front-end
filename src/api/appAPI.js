import axios from "axios";
import { getEnvironments } from "../helpers";

const { VITE_APP_API_URL } = getEnvironments();

export const appAPI = axios.create({
    baseURL: VITE_APP_API_URL
});

// Todo: configurar interceptores
appAPI.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': `Token ${localStorage.getItem('token')}`
    }

    return config;
})
