export const getEnvironments = () => {
    return {
        VITE_MODE: import.meta.env.VITE_MODE,
        VITE_SECRET_KEY: import.meta.env.VITE_SECRET_KEY,
        VITE_API_URL: import.meta.env.VITE_API_URL,
        VITE_APP_API_URL: import.meta.env.VITE_APP_API_URL,

    }
}