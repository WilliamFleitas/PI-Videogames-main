import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { getVideogames, sortByRating } from "../redux/actions/index";
import { VideoGameCard } from "./VideoGameCard";
import img404 from "../imagenes/img404.jpg";
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
    <div className="homeDiv">
      <div className="searchBarDiv">
        <SearchBar />
      </div>
      <h1 className="tituloHome">hola: Ruta HomePage es la ruta principal</h1>
      <button className="buttonGameL"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        Recargar personajes
      </button>
      <div className="divFiltrados">
        <select name="selectAscDesc" id="adf" key="adf">
          <option key="asc" value="asc">Ascendente</option>
          <option key="desc" value="desc">Descendente</option>
        </select>
        <select name="selectRat" key="selectRat" onChange={(event) => handleSortByRating(event)}>
          <option key="bestrt" value="bestrt">Best Rating</option>
          <option key="worstrt" value="worstrt">Worst Rating</option>
        </select>
        {
         allGames && allGames.map((e) => {
          return (
              <VideoGameCard key={e.id} id={e.id} name={e.name} platforms={e.platforms.map(e => typeof (e) === 'object' ? e.name : e ).join(', ')} released={e.released} image={e.image ? e.image: img404} genres={e.genres?.map(e => typeof (e) === 'object' ? e.name : e ).join(', ')} />
          )
           
         } )
        }
      </div>
    </div>
  );
};

export default Home;
