const { Router, response } = require("express");
const fetch = require("cross-fetch");
const { Videogame, Genre} = require("../db");
const {API_KEY} = process.env;


//apigameinfo trae 5 pag concatenadas de info sobre juegos
//dbGamesinfo trae los juegos dentro de nuestra base de datos
//gamesInfo concatena apigameinfo y dbgameinfo
//listGames mapea toda la info dentro de GamesInfo y devuelve sus propiedades en un objeto
const getGames = async () => {
 try {
     const URL = `https://api.rawg.io/api/games?key=${API_KEY}`;
     const promise1 = fetch(URL).then((response) => response.json());
     const promise2 = fetch(URL + "&page=2").then((response) => response.json());
     const promise3 = fetch(URL + "&page=3").then((response) => response.json());
     const promise4 = fetch(URL + "&page=4").then((response) => response.json());
     const promise5 = fetch(URL + "&page=5").then((response) => response.json());
     await Promise.all([promise1, promise2, promise3, promise4, promise5])
       .then((data) => {
         console.log(data);
         apiGamesInfo = data[0].results
           .concat(data[1].results)
           .concat(data[2].results)
           .concat(data[3].results)
           .concat(data[4].results);
       });
   
   const dbGamesInfo = await Videogame.findAll();
   
   const gamesInfo = apiGamesInfo.concat(dbGamesInfo);
   
   
   
     const listGames = gamesInfo.map((nameG) => {
       return {
          name: nameG.name,
          id: nameG.id,
          released: nameG.released,
          image: nameG.background_image,
          platforms: nameG.platforms,
          genres: nameG.genres,
          rating: nameG.rating
       }
     });
     return listGames;
 } catch (error) {
    return error;
 }
};



const getPlatforms = async () => {
  const infoPlatforms = await fetch(
    `https://api.rawg.io/api/platforms?key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => data);

  let platformsApi = infoPlatforms.results.map((nameP) => {
    return {
      name: nameP.name,
      games_count: nameP.games_count,
      games: nameP.games
    }
  });
  return platformsApi;
};

module.exports = {
  getPlatforms,
  getGames,
};
