import {
  SORT_BY_RATING,
  VIDEO_GAMES,
  VIDEO_GAMES_NAME,
  FILTER_CREATED_GAME,
  ORDER_BY_NAME,
  GET_BY_GENRE,
  FILTER_BY_GENRES,
  CREATED_GAME,
  GET_PLATFORMS,
  GET_DETAILS,
  DELETE_GAME,
} from "../actions/index";


const initialState = {
  listGames: [],
  videogamesF: [],
  listGenres: [],
  platforms: [],
  gameDetail: [],
  
  
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
    
    case DELETE_GAME:
      return {
        ...state
      }
    case CREATED_GAME:
      
      return {
        ...state,
        
      };
    case GET_DETAILS:
      return {
        ...state,
        gameDetail: action.payload,
      }


    case GET_PLATFORMS:
      
      return {
        ...state,
        platforms: action.payload
      };

    case GET_BY_GENRE:
      return {
        ...state,
        listGenres: action.payload,
      };

      case FILTER_BY_GENRES:
        let aux = [];
        if(action.payload) {
            aux = state.videogamesF.filter(elem => {
                
                if(elem.genres.some(e => e.name === action.payload)) {
                    return elem.genres.map(el => el.name === action.payload )
                } else {
                    return elem.genres.includes(action.payload)
                }
            })
        } else {
            aux = state.videogamesF
        }
        // if(!aux.length){
        //   aux = [{
        //     id: "asda",
        //     name: "No se encontraron juegos con ese genero:(",
        //     background_image: img404,
        //     description: "Podes crearlo o buscar otros generos",
        //     released: "9999-99-99",
        //     rating: "5",
        //     genres: [{name:"Action"}, {name: "RPG"}],
        //     platforms: ["Pc", "Steam"], 
        // }]
        // }
        return {
            ...state,
            listGames: aux,
        }

    case FILTER_CREATED_GAME :
      
      const createdGame = action.payload === 'createdInDb' ? state.videogamesF.filter( e => e.createdInDb) : state.videogamesF.filter(e => !e.createdInDb)
      
      
     return {
          ...state,
            listGames: action.payload === "All" ? state.videogamesF: createdGame,
            videogamesF: action.payload === "All" ? state.videogamesF: createdGame
     };

     case ORDER_BY_NAME:
      let orderedArr = action.payload === 'asc' ? state.listGames.sort(function (a, b) {
         if (a.name > b.name){
            return 1;
         }
         if (b.name > a.name){
          return -1;
         }
         return 0;
      }) : state.listGames.sort(function (a, b) {
        if (a.name > b.name){
          return -1;
       }
       if (b.name > a.name){
        return 1;
       }
       return 0;
      })
      return {
        ...state,
        listGames: orderedArr
      }
      
    case SORT_BY_RATING :
      let sortByRating =
        action.payload === "bestrt"
          ? state.listGames.sort((a, b) => b.rating - a.rating)
          : state.listGames.sort((a, b) => a.rating - b.rating);
      return {
        ...state, listGames: sortByRating
      };
    default:
      return state;
  }
}

export default rootReducer;
