import React from "react";
import loading from "../../videos/loading.mp4";
import s from "../loading/loading.module.css";
import load from "../../imagenes/loadcat.gif";
const Loading =  () =>  {
 
    return (
        <div className={s.divContainer}>
          <div className={s.load}>
            <img className={s.img} src={load} />
          </div>
           
            
        </div>
    )

}

export default Loading;