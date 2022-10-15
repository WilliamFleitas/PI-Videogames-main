import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getByGenres,} from "../../redux/actions";

 const FilterBar = ({handleSortByName, handleFilterGenres, handleSortByRating, handleFilterCreated}) => {
 const dispatch = useDispatch();
 const allGenres = useSelector((state) => state.listGenres);

 

 useEffect(() => {
    dispatch(getByGenres());
 }, [dispatch]);

 

return (
    <div>
        <select onChange={(event) => handleSortByName(event)}>

          <option  value="asc">Ascendente</option>

          <option  value="desc">Descendente</option>

        </select>

        <select onChange={(event) => handleFilterGenres(event)}>
          <option>Generos</option>
          {
            allGenres?.map((g) => {
              return (
                <option key={g.id} value={g.name} >{g.name}</option>
              )
            })
          }
        </select> 


        <select  onChange={(event) => handleSortByRating(event)}>

          <option  value="bestrt">Best Rating</option>

          <option  value="worstrt"> Worst Rating</option>

        </select>
        
        <select onChange={(event) => handleFilterCreated(event)}>
            
            <option value="All">Todos</option>
            <option value="createdInDb">Creados</option>
            <option value="api">Existentes</option>

        </select>
    </div>
)

}

export default FilterBar;