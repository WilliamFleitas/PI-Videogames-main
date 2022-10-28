import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import { SearchBar } from "../SearchBar/SearchBar";
import { getVideogames, sortByRating, filterCreatedGame, orderByName, filterByGenres} from "../../../src/redux/actions/index";
import FilterBar from "../filtros/Filters"
import { VideoGameCard } from "../videogamecard/VideoGameCard";
import Paginado from "../paginado/Paginado";
import img404 from "../../imagenes/img404.jpg";
import { NavLink } from "react-router-dom";
import s from "./HomeCss.module.css";
const Home = (props) => {

  const dispatch = useDispatch();

  const allGames = useSelector((state) => state.listGames);

 

  const [carga, setCarga] = useState(true);
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
    dispatch(getVideogames()).then(() =>setCarga(false));
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
    event.preventDefault();
    if(event.target.value === "All"){
      dispatch(getVideogames());
      setCurrentPage(1);
      setOrden(`Ordenado ${event.target.value}`);
    }else {
      
      dispatch(filterCreatedGame(event.target.value));
      setCurrentPage(1);
      setOrden(`Ordenado ${event.target.value}`);
    }
      
  }; //handlefiltercreated es para el filtro de los juegos creados en db
  if(carga){
    return (
      <div className={s.cargaDiv}>
        <Loading/>
      </div>
    )
  }

  return (
    <div className={s.homediv}>
      <div className={s.searchBarDiv}>
        <SearchBar className={s.searchBar} setCurrentPage={setCurrentPage}/>
      </div>
      
      <div className={s.containerButtonStart}>
        <NavLink className={s.detailButtonStart} to={"/"}>
         
        </NavLink>
      </div>

      <div className={s.containerCrearJuego}>
        <NavLink className={s.detailButton} to={"/creategame"}>
          Crear un juego
        </NavLink>
      </div>

      <div className={s.containerDetails}>
        <NavLink className={s.detailButton} to={"/detail"}>
          Detalles
        </NavLink>
      </div>
      
      <div className={s.containerRecarga}>
      <button
        className={s.detailButton}
        onClick={(event) => {
          handleClick(event);
        }}
      >
        Recargar personajes
      </button>
      </div>
      
      
      <div className={s.filterBar}>
      <FilterBar className={s.detailButton} handleSortByName={handleSortByName} handleFilterGenres={handleFilterGenres}
      handleSortByRating={handleSortByRating}
      handleFilterCreated={handleFilterCreated}
      ></FilterBar>
      </div>

      <div className={s.paginado} >
        <Paginado  gamesPerPage={gamesPerPage} allGames={allGames.length} paginado={paginado} />
      </div>


      <div className={s.cards}>
        {
          allGames.length? currentGames.map((e) => {
            return (
              
              <div key={e.id} >
                <NavLink className={s.navLink} to={`/videogames/` + e.id}>
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
                rating={e.rating}
              />
                </NavLink>
              </div>
            );
          }) : (
           <div>
            <h6>No se encontraron juegos</h6>
           </div>
          )
        } 
      </div>
    </div>
  );
};

export default Home;
