import React from "react";
import  zoro from "../../imagenes/zoro.gif"
import s from "./about.module.css"


export const About = () => {




    return (
        <div className={s.divContainer}>
            <h1 className={s.detail}>Details</h1>
            <div className={s.container}>
              <div className={s.imgDiv}>
                <img src={zoro} alt="zoro" />
              </div>
              <h2>Proyecto individual bootcamp <b>Soy Henry</b></h2> 
              <div>
                <h3>Redes: 
                    <a href="https://github.com/WilliamFleitas" target="_blank" rel="noopener noreferrer">Github</a>, 
                    <a href="https://www.linkedin.com/in/w-oni/" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
                </h3>
              </div>
              
              <h5>La tematica de la pagina esta inspirada en el estilo Cyberpunk de Night City con sus representativas luces de neon, esta hecha con css puro sin usar librerias siguiendo las restricciones del proyecto, la <a href="https://drive.google.com/file/d/1LKkgfTjew1NbZ-8Ax-tuVpvrDngjwE_z/view?usp=sharing" target="_blank" rel="noopener noreferrer">imagen</a>  de fondo fue hecha en Dall-e </h5>  
            </div>
            



        </div>
    )
};