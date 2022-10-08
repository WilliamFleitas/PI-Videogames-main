const { Router } = require('express');
const express = require("express");
const videogamesRouter = require("./vidgeogame");
const platformsRouter = require("./platforms");
const {API_KEY} = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


//esto conecta las rutas



const router = Router();
router.use(express.json());
router.use("/videogames", videogamesRouter);
router.use("/platforms", platformsRouter);




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
