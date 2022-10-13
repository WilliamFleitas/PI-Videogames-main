import { VIDEO_GAMES, VIDEO_GAMES_NAME } from "../actions";

const initialState = {
    listGames: [],
}


function rootReducer (state=initialState, action) {
   switch (action.type){
    case VIDEO_GAMES:
        return {
            ...state, listGames: action.payload,
        }
    case VIDEO_GAMES_NAME:
        return {
          ...state, listGames: action.payload,  
        }
    default:
     return state;
   }
}



export default rootReducer;