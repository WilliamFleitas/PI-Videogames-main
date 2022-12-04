![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Individual Project - Henry Videogames

<p align="right">
  <img height="200" src="./videogame.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

La idea general es crear una aplicación en la cual se puedan ver los distintos videojuegos disponibles junto con información relevante de los mismos utilizando la api externa [rawg](https://rawg.io/apidocs) y a partir de ella poder, entre otras cosas:

- Buscar videjuegos
- Filtrarlos / Ordenarlos
- Agregar nuevos videojuegos

Landing de la Page:
![landing](https://i.imgur.com/UJ0ir2W.png)

Home de la page: con paginado desde el front, searchbar para buscar juego por nombre
![landing](https://i.imgur.com/fzrneyi.png)

Filtrados de la page: filtrados por categoria, rating, ASC/DESC, creadosEnDB y traidos de la api
![landing](https://i.imgur.com/DOmlhaS.png)

Detalles del juego: 
![landing](https://i.imgur.com/GUNfe5b.png)

Formulario de creacion de juego: 
![landing](https://i.imgur.com/a5Hy2A3.png)

About del proyecto: 
![landing](https://i.imgur.com/6nJY4Ox.png)

Dejo un video mostrando el proyecto: https://www.youtube.com/watch?v=YKk8-x2ZH2c&t=79s

Para correr el proyecto localmente tenes que hacer lo siguiente:
 Clonar este repositorio.
 Instalar postgress y crear una base de datos llamada videogames.
 Registrarte en rawg para conseguir una apikey.
 Crear un archivo .env dentro de la carpeta Api con los siguientes campos:
 API_KEY = tuapikeyderawg
 DB_USER= tuUserDePostgress
 DB_PASSWORD= tuPasswDePostgress
 DB_HOST=localhost
 PORT = 3001
 DB_NAME=videogames

- Luego estando parado en la ruta api hacer npm i para instalar las dependencias, hacer lo mismo desde la ruta client.
- Despues solo tenes que hacer "npm start" en consola del cliente y api para correr el proy



