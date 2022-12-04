import React,{useState, useEffect} from "react";
import  cyber from "../../imagenes/cyberimg.jpeg"
import s from "./about.module.css";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getVideogames } from "../../redux/actions";
import Loading from "../loading/Loading";

export const About = () => {

   const dispatch = useDispatch();
  const [carga, setCarga] = useState(true);
  
  useEffect(() => {
    dispatch(getVideogames()).then(() =>setCarga(false));
  }, [dispatch]);


  if(carga){
    return (
      <div className={s.cargaDiv}>
        <Loading/>
      </div>
    )
  }

    return (
        <div className={s.divContainer}>
           <div className={s.SegContainer}>
            <h1 className={s.title}>
              Proyecto individual bootcamp <b>Soy Henry</b>
            </h1>

            <div className={s.imgDiv}>
                <img className={s.img} src={cyber} alt="cyberpunk" />
            </div>

            <div className={s.container}>
              
              
              <div className={s.containerDescrip}>
                {/* <h3>Redes: 
                    <a href="https://github.com/WilliamFleitas" target="_blank" rel="noopener noreferrer">Github</a>, 
                    <a href="https://www.linkedin.com/in/w-oni/" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
                </h3> */}
                <p>La tematica de la pagina esta inspirada en el estilo Cyberpunk de Night City con sus representativas luces de neon, esta hecha con css puro sin usar librerias siguiendo las restricciones del proyecto, la <a href="https://drive.google.com/file/d/1LKkgfTjew1NbZ-8Ax-tuVpvrDngjwE_z/view?usp=sharing" target="_blank" rel="noopener noreferrer">imagen</a>  de fondo fue hecha en Dall-e. </p>  
                <div className={s.lista}>
                
                  
                    <ul>Objetivos del proyecto: 
                      <li>Construir una App utlizando React, Redux, Node y Sequelize.</li>
                      <li>Afirmar y conectar los conceptos aprendidos en la carrera.</li>
                      <li>Aprender mejores prácticas.</li>
                      <li>Aprender y practicar el workflow de GIT.</li>
                      <li>Usar y practicar testing.</li>
                    </ul>
                
                </div>
                

              </div>
              
              
            </div>
            
            <div className={s.containerButton}>
                <NavLink className={s.detailButton} to={"/home"}>
                  Volver al inicio
                </NavLink>
            </div>

            </div>
        </div>
    )
};