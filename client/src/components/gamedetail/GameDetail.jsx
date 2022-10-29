import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, deleteGame } from "../../redux/actions";
import { NavLink, useHistory, useParams } from "react-router-dom";
import Loading from "../loading/Loading"
import s from "../gamedetail/gameDetail.module.css";
const GameDetail = (props) => {
  const [carga, setCarga] = useState(true);

  const dispatch = useDispatch();
  const {id} = useParams();
  const detail = useSelector((state) => state.gameDetail);
  const history = useHistory();
  

  useEffect(() => {
    dispatch(getDetail(id)).then(() => setCarga(false)).catch(() => {
      alert("No se encontro el juego")
      window.location.replace("http://localhost:3000/home")
    });
  }, [dispatch, id]);

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteGame(id));
    alert("Juego eliminado");
    history.push("/home");
  };
  

  if (carga) {
    return (
     <Loading/>   
    )
  }

  var regex = /(<([^#$>]+)>)/gi;

  return (
    <div className={s.containerPadre}>
      <div className={s.containerButton}>
        <NavLink className={s.detailButton} to={"/home"}>
          Volver al inicio
        </NavLink>
      </div>

      <div className={s.containerCrearJuego}>
        <NavLink className={s.detailButton} to={"/creategame"}>
          Crear un juego
        </NavLink>
      </div>
      
      <div className={s.containerMain} key={detail.id}>
        <div
          className={s.containerImg}
          key={detail.id}
          style={{
            backgroundImage: `url(${
              detail.image ? detail.image : detail.background_image
            })`,
          }}
        >
          {/* <img
            src={detail.image ? detail.image : detail.background_image}
            alt={`${detail.name}`}
          /> */}
        </div>
        <div className={s.containerTextDescrip}>
            <div className={s.nameDiv}>
            <h1>{detail.name}</h1>
            </div>
           

          <div className={s.containerGenPlat}>
           
            <p>Generos: {detail.genres?.map((e) => e.name).join(", ")}</p>

            <p>
              Plataformas:{" "}
              {typeof detail.platforms === "object"
                ? detail.platforms.map((e) => e).join(", ")
                : detail.platforms.split(",").join(", ")}
            </p>
          </div>

          <div className={s.ratingAndReleased}>
            <p>Rating: {detail.rating}</p>
            <p>Fecha de lanzamiento: {detail.released}</p>
          </div>

          <div className={s.descriptionText}>
            <p>
              Descripción:
              {detail.description?.replace(regex, " ").replace(" ", " ")}
            </p>
          </div>
        
      </div>
      </div>
      
          
        {
            detail.createInDb? <div className={s.containerDelete}> 
            <button className={s.buttonDel} onClick={(event) => handleDelete(event)}>Eliminar juego</button>
          </div> : <div></div>
        } 
      
    </div>
  );
};


export default GameDetail;
