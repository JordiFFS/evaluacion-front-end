import axios from 'axios';
import { getEnvironments } from '../helpers';

const { VITE_API_URL } = getEnvironments();


export const api = axios.create({
    baseURL: VITE_API_URL
});

// Todo: configurar interceptores
api.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'Authorization': localStorage.getItem('token')
    }

    return config;
})
