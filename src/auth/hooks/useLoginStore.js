import { createContext, useContext, useState } from "react"
import { appAPI } from "../../api";
import { Utils } from "../../helpers";

const UserContext = createContext()
export const useUser = () => useContext(UserContext);

export const useLoginStore = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const {
        retornError,
    } = Utils();

    const startLoginUser = async ({ email, password }) => {
        try {
            setIsLoading(true);
            const { data } = await appAPI.post('/user_ext/login', { email, password });
            // Guardamos el token directamente con localStorage
            localStorage.setItem('token', data.token);
            setUser(data);
            setIsAuthenticated(true);
            setIsLoading(false);
            window.location.reload();
        } catch (error) {
            const errorStr = retornError(error.response?.data);
            setIsLoading(false);
            setErrorMessage(errorStr);
            setErrorModalVisible(true);
        }
    };

    const startTokenVerify = async () => {
        try {
            setIsLoading(true);
            const { data } = await appAPI.get('/user_ext/verifyToken');
            setUser(data);
            setIsAuthenticated(true);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            // Eliminamos el token directamente con localStorage
            localStorage.removeItem('token');
            setIsAuthenticated(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser([]);
    };

    return {
        isLoading,
        user,
        isAuthenticated,
        errorModalVisible,
        errorMessage,
        startLoginUser,
        startTokenVerify,
        logout,
        setErrorModalVisible
    }
}