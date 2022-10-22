import React from "react";
import s from "../landingpage/landingPageCss.module.css";
import {NavLink } from "react-router-dom";
import giticon from "../../imagenes/githubIcon.png";
import linkicon from "../../imagenes/linkedIncon.png";

const LandingPage = (props) => {
    return (
        <div className={s.landingContainer}>
            <div className={s.text}>
             Videogames
            </div>

          

            <div  >
            <a  href="https://github.com/WilliamFleitas" target="_black"> 
            <img className={s.giticon} src={giticon} alt="githut"/>
             </a>
            </div>
            <div  >
            <a href="https://www.linkedin.com/in/w-oni/" target="_black">
                <img className={s.linkicon} src={linkicon} alt="linkedin"/>
             </a> 
            </div>
            
            
            <div className={s.buttonDiv}>
            <NavLink className={s.button} to="/home">
            
            </NavLink>
            </div>
             
           
        </div>
    )
}

export default LandingPage;