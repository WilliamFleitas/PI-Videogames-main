const { API_KEY } = process.env;
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
    const response = await fetch("http://localhost:3001/videogames");
    const data = await response.json();
    return dispatch({
       type: VIDEO_GAMES,
        payload: data });
  } catch (error) {
    console.log(error)
    return error;
  }
};

export const getDetail = (id) => async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:3001/videogames/${id}`);
        const data = await response.json();
       
        
         return dispatch({
          type: GET_DETAILS,
          payload: data,
         })
      } catch (error) {
        return error;
      }
};

export const deleteGame = (id) => async (dispatch) =>{

  return await axios.delete(`http://localhost:3001/videogames/${id}`).then( (g) => dispatch ({
    type: DELETE_GAME,
    payload: g.data
  }))
   
};

export const getPlatform = () => async (dispatch) => {
 try {
    const response = await fetch(`http://localhost:3001/videogames`);
    const data = await response.json();
   
    const allPlat = await data.map((e) => e.platforms);
    
    
    const plats = await allPlat.flat();
    const unicos = await [... new Set(plats)];
    
    return dispatch({
      type: GET_PLATFORMS,
      payload: unicos,
    })
 } catch (error) {
  return error;
 }
};

export const postGame = (game) => async (dispatch) => {

  try {
     const response = await axios.post("http://localhost:3001/videogames", game);
    
    return response;
    
  } catch (error) {
    return error;
  }
};

export const getVideogamesName = (name) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/videogames?name=${name}`);
    const data = await response.json();
   
    return dispatch({ type: VIDEO_GAMES_NAME, payload: data });
  } catch (error) {
    console.log(error)
    return error;
  }
};

export const getByGenres = () => async  (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/genres`);
    const data = await response.json();
  
    return dispatch({
      type: GET_BY_GENRE,
      payload: data,
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