import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { getVideogames, sortByRating } from "../redux/actions/index";
import { VideoGameCard } from "./VideoGameCard";
const Home = (props) => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.listGames);

  useEffect( () => {
   dispatch(getVideogames());
  }, [dispatch]);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getVideogames);
  };

  const handleSortByRating = (event) => {
       event.preventDefault();
       dispatch(sortByRating(event.target.value));
  }

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <h1>hola: Ruta HomePage es la ruta principal</h1>
      <button
        onClick={(event) => {
          handleClick(event);
        }}
      >
        Recargar personajes
      </button>
      <div>
        <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select name="ratings" onChange={(event) => handleSortByRating(event)}>
          <option value="bestrt">Best Rating</option>
          <option value="worstrt">Worst Rating</option>
        </select>
        {
         allGames && allGames.map((e) => {
          return (
              <VideoGameCard name={e.name} image={e.image} genres={e.genres} />
          )
           
         } )
        }
      </div>
    </div>
  );
};

export default Home;
