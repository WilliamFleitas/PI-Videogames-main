const fetch = require("cross-fetch");
const { Videogame, Genre } = require("../db");
const { API_KEY } = process.env;

//apigameinfo trae 5 pag concatenadas de info sobre juegos
//dbGamesinfo trae los juegos dentro de nuestra base de datos
//gamesInfo concatena apigameinfo y dbgameinfo
//listGames mapea toda la info dentro de GamesInfo y devuelve sus propiedades en un objeto
const getGames = async () => {
  // https://api.rawg.io/api/games?key=${API_KEY}`
  try {
    const URL = `https://api.rawg.io/api/games?key=${API_KEY}`;
    const promise1 = fetch(URL).then((response) => response.json());
    const promise2 = fetch(URL + "&page=2").then((response) => response.json());
    const promise3 = fetch(URL + "&page=3").then((response) => response.json());
    const promise4 = fetch(URL + "&page=4").then((response) => response.json());
    const promise5 = fetch(URL + "&page=5").then((response) => response.json());
    await Promise.all([promise1, promise2, promise3, promise4, promise5]).then(
      (data) => {
        apiGamesInfo = data[0].results
          .concat(data[1].results)
          .concat(data[2].results)
          .concat(data[3].results)
          .concat(data[4].results);
      }
    );
      const apiGames = await apiGamesInfo.map((e) => {
        return {
          id: e.id,
          name: e.name,
          released: e.released,
          background_image: e.background_image,
          rating: e.rating,
          platforms: e.platforms.map((p) => p.platform.name ),
          genres: e.genres.map((g) => g.name),
        }
      })
    const dbGamesInfo = await Videogame.findAll({
      include: 
        {
          model: Genre,
          attributes: ["name"],
          throught: {
            attributes: [],
          },
        },
    });

    const gamesInfo = apiGames.concat(dbGamesInfo);
    
    const listGames = gamesInfo.map((nameG) => {
      return {
        name: nameG.name,
        id: nameG.id,
        released: nameG.released,
        image: nameG.background_image,
        platforms: nameG.platforms,
        genres: nameG.genres,
        rating: nameG.rating,
        createdInDb: nameG.createdInDb
      };
    });
    
    return listGames;
  } catch (error) {
    return error.status(400);
  }
};



const gameId = async (id) => {

  try {
    if (!isNaN(id)) {
      const responseApi = await fetch(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => data);
  
      
      const gameApiInfo = {
          image: responseApi.background_image,
          name: responseApi.name,
          genres: responseApi.genres,
          description: responseApi.description,
          released: responseApi.released,
          rating: responseApi.rating,
          platforms: responseApi.platforms.map((p) => p.platform.name).toString(),
          
        };
        
        return gameApiInfo;
    }
  } catch (error) {
    return error;
  }
  
  try {
    if(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(id)){
      const responseDb = await Videogame.findByPk(id, {
        include: [
          {
            model: Genre,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        ],
      })
       
    
      
      const gameDbInfo = {
        background_image: responseDb.dataValues.background_image,
        name: responseDb.dataValues.name,
        genres: responseDb.dataValues.genres,
        description: responseDb.dataValues.description,
        released: responseDb.dataValues.released,
        rating: responseDb.dataValues.rating,
        platforms: responseDb.dataValues.platforms,
        createInDb: responseDb.dataValues.createdInDb,
      };
      
      
      return gameDbInfo;
    }
    
  } catch (error) {
    return error
  }
  
};


const createGame = async (name, description, released, rating, background_image, Genres, platforms) => {
  try {
   
    if(!name || !description  || !platforms || !background_image){
        throw ("faltan datos para crear el juego");
     }
     
     else {
       const newGame = await Videogame.create({
        
          name,
          description,
          released,
          rating,
          background_image,
          Genres,
          platforms
        
        
       }); 
       
       const newGenre = await Genre.findAll({
        where: {
          name: Genres,
        },
      });
      
       newGame.addGenre(newGenre);
       return newGame;
  
    }
  } catch (error) {
    return error;
  }
};

const getGenres = async () => {
   
    
 try {
  const response = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`).then(response => response.json())
  .then(data => data );
  
  const genresApi = await response.results.map((e) => e.name);
  
  
    genresApi.map(e=> Genre.findOrCreate({
      where: {name: e}
    }))
  
  const allGenres = await Genre.findAll();
 
  return allGenres  

 } catch (error) {
   return error;
 }
};

module.exports = {
 
  getGames,
  gameId,
  createGame,
  getGenres,
 
};
