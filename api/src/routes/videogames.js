const express = require("express");
const router = express.Router();

const { getGames } = require("./controllers");

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

module.exports = router;
