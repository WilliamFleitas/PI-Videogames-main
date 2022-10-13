import React,{useState} from 'react';
import {useDispatch} from 'react-redux';


export const VideoGameCard = ({name, image, genres, released, platforms, id }) => {


    const dispatch = useDispatch();
    

    return (
        <div id={id} key={id} className="divCardPadre" >
            <p>hola</p>
            <div id={id} key={id} className="divCard" >
            <img src={image} alt="imagen juego" />
            <h3>Name: {name}</h3>
            <h4>Genres: {genres}</h4>
            <h5>Released: {released}</h5>
            <h6>Patforms: {platforms}</h6>
            
            </div> 
        </div>
    )
}