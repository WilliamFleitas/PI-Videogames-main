const express = require("express");
const router = express.Router();

const {getGenres } = require("./controllers");

router.get("/", async (req, res) =>{
   try {
     const response = await getGenres();
    
     
     res.status(200).send(response);
   } catch (error) {
    res.status(400).send(error);
   }
});

module.exports = router;