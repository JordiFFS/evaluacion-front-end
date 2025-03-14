import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ModulesLayout, PublicationsPages } from '../modules'

export const ModuleRoutes = () => {

    // En este modulo vamos a colocar nuestras rutas las cuales se visualizaran en el navegador

    return (
        <ModulesLayout>
            <Routes>
                <Route path="/" element={<PublicationsPages />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </ModulesLayout>
    )
}
