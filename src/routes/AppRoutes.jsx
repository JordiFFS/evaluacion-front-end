import { Route, Routes } from 'react-router-dom'
import { ModuleRoutes } from '../modules'

export const AppRoutes = () => {

    /* En este modulo se podría controlar las rutas en el caso de que se requiera hacer autenticaciones de usuarios
    y también para poder manejar las rutas publicas y privadas en este caso solo vamos a trabajar con una ruta pero
    en el caso de que se requiera se puede crear un modulo para las rutas publicas y otro para las rutas privadas */

    return (
        <Routes>

            {/* aquí se podrían poner las rutas publicas y con condiciones
       de autenticación las rutas privadas  */}

            <Route path="/*" element={<ModuleRoutes />} />
        </Routes>
    )
}
