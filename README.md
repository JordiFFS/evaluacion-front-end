# React + Vite
Evaluación front-end para nuevos ingresos

## Descripción del proyecto
1. El proyecto en primera instancia lo que nos refleja es una vista en la cual se encuentran multiples publicaciones "PublicationsPages.jsx" estas tienen una 
estructura la cual consiste en el (texto, fecha de publicación "dd/mm/AA", autor, cantidad de interacciones "👍 me gusta" "💬 comentarios" "🔄 compartidos").

2. Las vistas están realizadas para acomodarse a la pantalla en la cual se presente si la pantalla es muy pequeña se van a presentar las publicaciones en 
una sola columna para mejorar la visualización en los dispositivos mobiles

3. Al momento de hacer clic en alguna de las publicaciones se abre un modal el cual nos presenta la información mas detallada de las publicaciones asi como
un control en el cual si en la publicación se encuentra una imagen el modal sale con la imagen y la información de la publicación.

4. Esta implementado un buscador dinámico en la vista el cual es sensible a mayúsculas y minúsculas para la búsqueda de publicaciones de manera dinámica



## Pasos para el desarrollo
1. Renombrar el archivo .env.template por .env 
2. Hacer los cambios con la variables de entorno correspondientes.

---------------------------------------------------------

Ej. 
VITE_API_URL='http://154.12.236.19:128'

---------------------------------------------------------

## Requisitos
1. Node v20.3.0
2. npm v9.6.7

## Iniciar el servicio
### Desarrollo
    1. npm install (Instalar las dependecias del proyecto). 
    2. npm run dev (Correr el proyecto).
        2.1 El proyecto esta corriendo en el port 3000 y con todos los cors con el  


## Endpoints disponibles
### Front-end
    ("/")
### Back-end
    get("/api/publication") Descarga todas las publicaciones
    get("/api/publication/search?s={s}") Realiza la búsqueda dinámica de las publicaciones