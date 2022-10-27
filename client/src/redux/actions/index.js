
const axios = require('axios').default;


export const VIDEO_GAMES = "VIDEO_GAMES";
export const VIDEO_GAMES_NAME = "VIDEO_GAMES_NAME";
export const SORT_BY_RATING = "SORT_BY_RATING";
export const FILTER_CREATED_GAME = "FILTER_CREATED_GAME";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const GET_BY_GENRE = "GET_BY_GENRE";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export const CREATED_GAME = "CREATED_GAME";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const GET_DETAILS = "GET_DETAILS";
export const DELETE_GAME = "DELETE_GAME";

export const getVideogames = () => async (dispatch) => {
  try {
 
    //  const call = fetch("http://localhost:3001/videogames").then(data => data.json()).then(response => dispatch({
    //   type: VIDEO_GAMES,
    //   payload: response
    //  }));
    //  return call;
     
    
    //http://localhost:3001/videogames
    const call = await axios.get("/videogames");
    return dispatch({
      type: VIDEO_GAMES,
      payload: call.data,
    });
  } catch (error) {
    
    return error;
  }
};

export const getDetail = (id) => async (dispatch) => {
      try {
        const response = await axios.get(`/videogames/${id}`);
        
         return dispatch({
          type: GET_DETAILS,
          payload: response.data,
         })
      } catch (error) {
        return error;
      }
};

export const deleteGame = (id) => async (dispatch) =>{

    try {
    return await axios.delete(`/videogames/${id}`).then( (g) => dispatch ({
    type: DELETE_GAME,
    payload: g.data
  }))
    } catch (error) {
      return error;
    }

  
   
};

export const getPlatform = () => async (dispatch) => {
 try {
    const response = await axios.get(`/videogames`);
    
   
    const allPlat = await response.data.map((e) => e.platforms);
    
    
    const plats = await allPlat.flat();
    const unicos = [...new Set(plats)];
    
    return dispatch({
      type: GET_PLATFORMS,
      payload: unicos,
    })
 } catch (error) {
  return error;
 }
};

export const postGame = (game) => async () => {

  try {

    //  const response = await fetch("https://videogame-henry-pi.herokuapp.com/videogames", {
    //   method: "POST",
    //   body: JSON.stringify(game),
    //   headers: { 'Content-Type': 'application/json' }
    //  });
    //  return response;

     const response = await axios.post("/videogames", game);
    
    return response;
    
  } catch (error) {
    return error;
  }
};

export const getVideogamesName = (name) => async (dispatch) => {
  try {
    const response = await axios.get(`/videogames?name=${name}`);
    
   
    return dispatch({ type: VIDEO_GAMES_NAME, payload: response.data });
  } catch (error) {
    
    return error;
  }
};

export const getByGenres = () => async  (dispatch) => {
  try {
    const response = await axios.get(`/genres`);
    
  
    return dispatch({
      type: GET_BY_GENRE,
      payload: response.data,
    })
  } catch (error) {
    return error;
  }

};

export const filterByGenres = (payload) => {
  return {
    type: FILTER_BY_GENRES,
    payload,
  }
}

export const filterCreatedGame = (payload) => {
    return{
      type: FILTER_CREATED_GAME,
      payload,
    }
};

export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload,
    }
};

export const sortByRating = (payload) => {
  return {
    type: SORT_BY_RATING,
    payload,
  };

}