const express = require("express");
const router = express.Router();

const {getPlatforms} = require("./controllers");


//aca hacemos que el router.get traiga la info de la api desde la funcion getPlatforms
router.get("/", async (req, res) => {
    try {
        const response = await getPlatforms();
        res.status(200).send(response);
    } catch (error) {
       res.status(400).send(error); 
    }
});


module.exports = router;