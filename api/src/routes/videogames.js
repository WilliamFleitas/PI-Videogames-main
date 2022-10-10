const express = require("express");
const { Sequelize, Op } = require('sequelize');
const router = express.Router();
const { getGames, gameId, createGame, } = require("./controllers");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const response = await getGames();

    if (name) {
      
      const gameFilter = response.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );

      if (!gameFilter.length) {
        return res.status(200).send(`Oppss! no se encontro el juego ${name}`);
      }
      return res.status(200).send(gameFilter);
    }

    res.status(200).send(response);
    
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const {id} = req.params;  
    // console.log(id);
    const response = await gameId(id);
    const { name} = response;
   
   if(name === undefined){
    return res.status(400).send("no se encontro el juego")
   }
   return res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error)
  }
});

router.post("/", async (req, res) => {
  const {name, description, released, rating, background_image, genres, platforms} = req.body;
  
  try {
    const response = await createGame(
      name,
      description,
      released,
      rating,
      background_image,
      genres,
      platforms
    );
    if(response.name && response.description  && response.platforms && response.background_image){
      return res.status(201).send(response);
    }
    else {
      return res.status(404).send(response);
    }

  } catch (error) {
    return res.status(400).send(error);
  }
    
});

module.exports = router;
