import {
  SORT_BY_RATING,
  VIDEO_GAMES,
  VIDEO_GAMES_NAME,
} from "../actions/index";

const initialState = {
  listGames: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case VIDEO_GAMES:
      return {
        ...state,
        listGames: action.payload,
      };
    case VIDEO_GAMES_NAME:
      return {
        ...state,
        listGames: action.payload,
      };
    case SORT_BY_RATING:
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
