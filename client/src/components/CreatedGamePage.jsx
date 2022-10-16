// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { VideoGameCard } from "./VideoGameCard";
// import { getByGenres, getVideogames } from "../redux/actions";
// import img404 from "../imagenes/img404.jpg";

// const CreatedGamePage = (props) => {
//   const dispatch = useDispatch();
//   const gameC = useSelector((state) => state.createGame);
  
//   const allGames = useSelector((state) => state.listGames);
//   const gameName = gameC.find((e) => e.name);
//   const gameFiltered = allGames.find((e) => e.name === gameName);
 
//   useEffect(() => {
//     dispatch(getVideogames());
//     dispatch(getByGenres());
   
//   }, [dispatch]);
//   return (
//     <div>
//       {
//         gameC?.map((e) => {
//             return (
//               <div key={e.id}>
//                 <VideoGameCard
//                   key={e.id}
//                   id={e.id}
//                   name={e.name}
//                   platforms={e.platforms
//                     .map((e) => (typeof e === "object" ? e.name : e))
//                     .join(", ")}
//                   released={e.released}
//                   createdInDb={e.createdInDb}
//                   image={e.image ? e.image : img404}
//                   genres={e.genres
//                     ?.map((e) => (typeof e === "object" ? e.name : e))
//                     .join(", ")}
//                 />
//               </div>
//             );
//           }) 
          
//       }
//     </div>
//   );
// };

// export default CreatedGamePage;
