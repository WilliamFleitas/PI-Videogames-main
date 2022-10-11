const { Router } = require('express');
const express = require("express");
const videogamesRouter = require("./videogames");
const platformsRouter = require("./platforms");
const genresRouter = require("./genres");
const {API_KEY} = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


//esto conecta las rutas



const router = Router();
router.use(express.json());
router.use("/videogames", videogamesRouter);
router.use("/platforms", platformsRouter);
router.use("/genres", genresRouter);



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
