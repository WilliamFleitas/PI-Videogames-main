import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { getVideogames, sortByRating, filterCreatedGame, orderByName, filterByGenres} from "../redux/actions/index";
import FilterBar from "../components/filtros/Filters"
import { VideoGameCard } from "./VideoGameCard";
import Paginado from "./paginado/Paginado.jsx";
import img404 from "../imagenes/img404.jpg";
const Home = (props) => {

  const dispatch = useDispatch();

  const allGames = useSelector((state) => state.listGames);

  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(15);
  const indexOfLastGame = currentPage * gamesPerPage; 
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);

 const paginado = (pageNumber) => {
  setCurrentPage(pageNumber)
 }

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getVideogames());
    setCurrentPage(1);
  };
  
  const handleFilterGenres = (event) => {
    event.preventDefault();
    if(event.target.value === "Generos"){
      dispatch(getVideogames());
      setCurrentPage(1);
    }
    else{
      dispatch(filterByGenres(event.target.value));
      setCurrentPage(1);
      setOrden(`Ordenado ${event.target.value}`);
    }
  };

  const handleSortByRating = (event) => {
    event.preventDefault();
    dispatch(sortByRating(event.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`);
  };
  
  const handleSortByName = (event) => {
    event.preventDefault();
    dispatch(orderByName(event.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`); //sin esto la pag no se vuelve a renderizar
  };
 // handlefilter es el manejador despacha el target.value(el value viene de las options que son existente, creadoindb y all) que viene de nuestro select a nuestro action, esa action manda un type que va a ser el value como payload a nuestro reducer, el reducer recibe la action type y dependiendo del payload que le llega filtra los juegos
 //el setCurrenpage(1) esta para que al apretar el boton el paginado vuelva a la pag 1 siempre
  const handleFilterCreated = (event) => {
      dispatch(filterCreatedGame(event.target.value));
      setCurrentPage(1);
  }

  return (
    <div className="homeDiv">
      <div className="searchBarDiv">
        <SearchBar />
      </div>
      
      <h1 className="tituloHome">hola: Ruta HomePage es la ruta principal</h1>

      <button
        className="buttonGameL"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        Recargar personajes
      </button>
      
      <div className="filtrados">
      <FilterBar handleSortByName={handleSortByName} handleFilterGenres={handleFilterGenres}
      handleSortByRating={handleSortByRating}
      handleFilterCreated={handleFilterCreated}
      ></FilterBar>
      </div>
      <div className="divFiltrados">
        <Paginado gamesPerPage={gamesPerPage} allGames={allGames.length} paginado={paginado} />

        {
          currentGames?.map((e) => {
            return (
              <VideoGameCard
                key={e.id}
                id={e.id}
                name={e.name}
                platforms={e.platforms
                  .map((e) => (typeof e === "object" ? e.name : e))
                  .join(", ")}
                released={e.released}
                createdInDb={e.createdInDb}
                image={e.image ? e.image : img404}
                genres={e.genres
                  ?.map((e) => (typeof e === "object" ? e.name : e))
                  .join(", ")}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
