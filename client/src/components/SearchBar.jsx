import {getVideogamesName } from "../redux/actions/index";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const SearchBar = () => {
 
    const [searchState, setSearchState] = useState("");
    const dispatch = useDispatch();

        const handleInputChange = (event) =>{
            event.preventDefault();
            setSearchState(event.target.value);
            console.log(searchState);
        };
        const handleSubmit = (event) => {
            event.preventDefault();
            dispatch(getVideogamesName(searchState))
        }

    return (
        <div className="searchbar">
           
             <input type="text" onChange={(event) => handleInputChange(event)} placeholder = "Buscar juego por nombre" />
            
             <button type="submit" onClick={(event) => handleSubmit(event)} >Buscar</button>
            
        </div>
    )

};
