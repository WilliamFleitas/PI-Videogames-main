import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import img404 from "../../imagenes/img404.jpg"
import {NavLink} from "react-router-dom";

const GameDetail = (props) => {
    const [carga, setCarga] = useState(true);


const dispatch = useDispatch();
const detail = useSelector((state) => state.gameDetail);


useEffect(() => {
    dispatch(getDetail(props.match.params.id)).then(() => setCarga(false));
}, [dispatch,]);

if (carga){
    return "cargando";
}




var regex = /(<([^>]+)>)/gi;

console.log("hola", detail);

return (
    <div>
        
            <div key={detail.id}> 
                <div key={detail.id}> 
                <img src={detail.image? detail.image : detail.background_image} alt={`${detail.name}`}/>
                </div>
                <h1>Nombre: {detail.name}</h1>
                <p>Rating: {detail.rating}</p>
                <div>
                <p>Generos: {detail.genres?.map((e) =>  e.name).join(', ')}</p>
                <p>Plataformas: {typeof detail.platforms === "object" ? detail.platforms.map((e) => e.name) : detail.platforms.split(",").join(", ")}</p>
                </div>
                
                <p>Fecha de lanzamiento: {detail.released}</p>
                <p>Descripción: {detail.description?.replace(regex, '').replace('&#39', '')}</p>
                
            </div> : 
             
        
         <NavLink to={"/home"}>Volver al Home</NavLink>
    </div>
)
};
export default GameDetail;