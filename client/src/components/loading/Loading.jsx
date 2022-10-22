import React from "react";
import s from "../loading/loading.module.css";
import load from "../../imagenes/loadcat.gif";
const Loading =  () =>  {
 
    return (
        <div className={s.divContainer}>
          <div className={s.load}>
            <img className={s.img} src={load} alt="loading " />
          </div>
           
            
        </div>
    )

}

export default Loading;