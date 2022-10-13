export const VIDEO_GAMES = "VIDEO_GAMES";
export const VIDEO_GAMES_NAME = "VIDEO_GAMES_NAME";

export const getVideogames = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/videogames");
    const data = await response.json();
    return dispatch({ type: VIDEO_GAMES, payload: data });
  } catch (error) {
    console.log(error)
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