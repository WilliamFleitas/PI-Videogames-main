import React,{useState} from 'react';
import {useDispatch} from 'react-redux';


export const VideoGameCard = ({name, image, genres, released }) => {


    const dispatch = useDispatch();
    

    return (
        <div>
            <img src={image} alt="imagen juego" />
            <h3>{name}</h3>
            <h4>{genres}</h4>
            <h5>{released}</h5>
            <h5>hola</h5>
            
        </div>
    )
}