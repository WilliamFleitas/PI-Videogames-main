import {getVideogamesName } from "../../../src/redux/actions/index";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "../SearchBar/searchBar.module.css"

 export const SearchBar = ({setCurrentPage}) => {
  
    const [searchState, setSearchState] = useState("");
    const dispatch = useDispatch();

        const handleInputChange = (event) =>{
            event.preventDefault();
            setSearchState(event.target.value);
            
           
        };
        const handleSubmit = (event) => {
            event.preventDefault();
            dispatch(getVideogamesName(searchState))
            setSearchState("");
            setCurrentPage(1);
            
        }

    return (
        <div className={s.container}>
           
             <input className={s.inputs} value={searchState} type="text" onChange={(event) => handleInputChange(event)}  placeholder="Buscar juego por nombre" />
            
             <button className={s.buttons} type="submit" onClick={(event) => handleSubmit(event)} >Buscar</button>
            
        </div>
    )

};

