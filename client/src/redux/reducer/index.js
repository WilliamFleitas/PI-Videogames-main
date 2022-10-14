import {
  SORT_BY_RATING,
  VIDEO_GAMES,
  VIDEO_GAMES_NAME,
  FILTER_CREATED_GAME,
} from "../actions/index";

const initialState = {
  listGames: [],
  videogamesF: [],
  genres: [],
  platforms: [],
  videogameId: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case VIDEO_GAMES:
      return {
        ...state,
        listGames: action.payload,
        videogamesF: action.payload,
      };
    case VIDEO_GAMES_NAME:
      return {
        ...state,
        listGames: action.payload,
      };
    case FILTER_CREATED_GAME :
      
      const createdGame = action.payload === 'createdInDb' ? state.videogamesF.filter( e => e.createdInDb) : state.videogamesF.filter(e => !e.createdInDb)
      
      
     return {
          ...state,
            listGames: action.payload === "All" ? state.videogamesF: createdGame
     }
      
    case SORT_BY_RATING :
      let sortByRating =
        action.payload === "bestrt"
          ? state.listGames.sort((a, b) => a.rating - b.rating)
          : state.listGames.sort((a, b) => b.rating - a.rating);
      return {
        ...state, listGames: sortByRating
      };
    default:
      return state;
  }
}

export default rootReducer;
