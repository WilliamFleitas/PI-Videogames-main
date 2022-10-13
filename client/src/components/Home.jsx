import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { SearchBar } from "./SearchBar";
const Homepage = (props) => {
    
    const dispatch = useDispatch();
    const [gameList, setGameList] = useState("")
    
    
    return (
        <>

            <h1>hola</h1>
            <SearchBar/>
            <h2>Ruta HomePage es la ruta principal</h2>
            <div>
                
            </div>
        </>
    )
}

export default Homepage;