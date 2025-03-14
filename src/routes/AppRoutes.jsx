import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes';
import { ModuleRoutes } from '../modules';

export const AppRoutes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
        setIsLoading(false);
    }, []);

    return (
        <Routes>
            {
                isAuthenticated ?
                    <Route path="/*" element={<ModuleRoutes />} />
                    :
                    <Route path="/auth/*" element={<AuthRoutes />} />
            }
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    );
};
