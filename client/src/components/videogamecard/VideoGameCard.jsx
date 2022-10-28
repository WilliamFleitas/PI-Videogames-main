import React from 'react';
import s from "../videogamecard/GameCardCss.module.css";
import cyber from "../../videos/cybergirl.mp4"

export const VideoGameCard = ({name, image, genres, released, platforms, id, createdInDb, rating }) => {


    

    return (
        <div id={id} key={id} className={s.containerDiv}>
            <div id={id} key={id} className={ s.containerCard}  >
             {/* <video autoPlay loop muted src={cyber}></video> */}
             <div className={s.textDiv}>
             <h3 className={s.text}>{name}</h3>
              <h4 className={s.text}>Genres: {genres}</h4>
              <h5 className={s.text}>Rating: {rating}</h5>
              
             </div>
              
            <div className={s.imageDiv }>
              <img src={image} alt="imagen juego" className={s.image}/>
            </div>
            
            </div> 
        </div>
    )
}