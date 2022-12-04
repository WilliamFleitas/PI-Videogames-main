import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  postGame,
  getByGenres,
  getPlatform,
} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import s from "../gamecreate/gameCreate.module.css"
import Loading from "../loading/Loading";

const validate = (input) => {
    let errors = {};
      if(!input.name) {
        errors.name = 'El nombre es requerido';
      } else if(!/^[a-zA-Z0-9-() .]+$/.test(input.name)){
        errors.name = 'Solo se aceptan letras, numeros, guiones medios y parentesis';
      }
      else if(input.name.length > 50){
        errors.name = "El nombre es demasiado largo";
      };

// || !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.background_image)
      if(!input.background_image.length || !/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(input.background_image)
      ){
        errors.background_image='invalid URL, debe ser una imagen(png, jpg, gif)';
      };


      if(!input.description) {
        errors.description = 'La descripcion es requerida';
      } else if (input.description.length > 800) {
        errors.description = 'La descripcion es muy larga. (Max = 800 caracteres)';
      };

      
      
      
      if(!input.released){
        errors.released = 'Se requiere fecha de creación';
    }else if (input.released.length < 10 ) {
        errors.released = "Ingresar datos de released: yyyy-mm-dd";
      }
      if( input.released.length > 10 || !/^[0-9-]+$/.test(input.released)) {
       errors.released = "Se requiere una fecha valida(yyyy-mm-dd)"
     } 
     


    if(!input.rating) {
        errors.rating = 'El rating es requerido';
      } else if(input.rating > 5) {
        errors.rating = 'El rating no debe ser mayor a 5';
      } else if(input.rating < 1.0) {
        errors.rating = 'El rating no puede ser menor que 1.0';
      };

    return errors;
}

const GameCreate = () => {
            const dispatch = useDispatch();
            const history = useHistory();
            const allGenres = useSelector((state) => state.listGenres);
            const allPlatforms = useSelector((state) => state.platforms);
            const nameList = useSelector((state) => state.listGames);
            
            const [carga, setCarga] = useState(true);
            const [input, setInput] = useState({
                 name: "",
                 background_image: "",
                 description: "",
                 released: "",
                 rating: "",
                 genres: [],
                 platforms: [],
            });

            const [errors, setErrors] = useState({});

  useEffect(() => {
    // dispatch(getVideogames());
    dispatch(getByGenres()).then(() =>setCarga(false));
    dispatch(getPlatform());
  }, [dispatch]);


  const handleSubmit = (event) => {
    event.preventDefault();
    let noRepeat = nameList.filter((n) => n.name === input.name);
    if(noRepeat.length){
        alert("Ya existe un juego con ese nombre");
        errors.name = "Ya existe un juego con ese nombre";
    }else {
        let error = Object.keys(validate(input));
//objet keys devuelve un array de streams partiendo de un objeto
        if(error.length || !input.genres.length || !input.platforms.length ){
            alert("Falta completar datos")
            errors.genres = "falta completar datos";
            error.platforms = "falta completar datos";
        }
        else {
            dispatch(postGame(input))
        alert("Personaje creado");
        setInput({
            name: "",
            background_image: "",
            description: "",
            released: "",
            rating: "",
            genres: [],
            platforms: [], 
        })
        history.push('/home')
        }
    } 
    
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(validate({
       ...input,
       [event.target.name]: event.target.value, 
    }))
  };

  const handlePlatform = (event) => {
     
     if(event.target.value === "all"){
      return 
     }
      setInput({
        ...input,
        platforms: [...new Set([...input.platforms, event.target.value ])],
      });
    
    
  };

  const handleDeletePlatform = (event) => {
    setInput({
      ...input,
      platforms: input.platforms.filter((p) => p !== event),
    });
  };

  const handleGenre = (event) => {
    setInput({
      ...input,
      genres: [...new Set([...input.genres, event.target.value])],
    });
  };

  const handleDeleteGenre = (event) => {
    setInput({
      ...input,
      genres: input.genres.filter((g) => g !== event),
    });
  };

  if(carga){
    return (
      <div className={s.cargaDiv}>
        <Loading/>
      </div>
    )
  }

  return (
    <div className={s.containerPadre}>

      <div className={s.subContainer}>
      <div className={s.firstContainerForm}>
      <NavLink  to="/home">

        <div className={s.buttonContainer}>
          
        <button className={s.buttonForm}>
          Volver a Home
        </button>

        </div>
        
      </NavLink>
      
      
      <div className={s.containerForm}>

      <h1 className={s.titulo}>Crea tu juego!</h1>

      <form className={s.form} onSubmit={ (event ) => handleSubmit(event)}>
        <div>
          <label>Nombre: </label>
          <input className={s.thisInput}
            type="text"
            value={input.name}
            name="name"
            onChange={(event) => handleChange(event)}
          ></input>
          {
            errors.name && (
                <p className={s.red}>{errors.name}</p>
            )
          }
        </div>

        <div>
          <label>Descripción: </label>
          <textarea className={s.textArea}
            type="text"
            value={input.description}
            name="description"
            onChange={(event) => handleChange(event)}
          />
          {
            errors.description && (
                <p className={s.red}>{errors.description}</p>
            )
          }
        </div>

        <div>
          <label>Fecha de lanzamiento: </label>
          <input className={s.thisInput}
            type="text"
            placeholder="yyyy-mm-dd"
            value={input.released}
            name="released"
            onChange={(event) => handleChange(event)}
          ></input>
           {
            errors.released && (
                <p className={s.red}>{errors.released}</p>
            )
          }
        </div>

        <div>
          <label>Rating: </label>
          <input className={s.thisInput}
            type="number"
            value={input.rating}
            name="rating"
            onChange={(event) => handleChange(event)}
          ></input>
           {
            errors.rating && (
                <p className={s.red}>{errors.rating}</p>
            )
          }
        </div>

        <div>
          <label>ImagenUrl: </label>
          <input className={s.thisInput}
            type="text"
            value={input.background_image}
            name="background_image"
            onChange={(event) => handleChange(event)}
          ></input>
          {
            errors.background_image && (
                <p className={s.red}>{errors.background_image}</p>
            )
          }
        </div>
        
        <div>
          <label>Plataformas: </label>
          <select className={s.thisInput} onChange={(event) => handlePlatform(event)}>
            <option value="all">All</option>
            {allPlatforms?.map((p) => {
              return (
                <option key={p} value={p}>
                  {p}
                </option>
              );
            })}
          </select>
          </div>
          <div className={s.selected}>
          
          {input.platforms.map((p) => (
            <div key={p}>
              <p>{p}</p>
              <button
                onClick={() => handleDeletePlatform(p)}
                key={p.id}
                id={p.id}
                value={p.name}
              >
                <span>X</span>
              </button>
            </div>
          ))}
        </div>

        <div>
          <label>Generos: </label>
          <select className={s.thisInput} onChange={(event) => handleGenre(event)}>
            <option value="all">All</option>
            {allGenres?.map((g) => {
              return (
                <option key={g.id} value={g.name}>
                  {g.name}
                </option>
              );
            })}
          </select>
          </div>
          <div className={s.selected}>
          {input.genres.map((g) => (
            <div key={g}>
              <p>{g}</p>
              <button
                onClick={() => handleDeleteGenre(g)}
                key={g.id}
                id={g.id}
                value={g.name}
              >
                <span>X</span>
              </button>
            </div>
          ))}
          </div>
       

        {Object.keys(errors).length ? (
            <div className={s.formDiv}>
              <input className={s.buttonForm} type="submit" disabled name="Send" />
            </div>
          ) : (
            <div className={s.formDiv}>
              <input className={s.buttonForm} type="submit"   name="Send" />
            </div>
          )}
      </form>
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default GameCreate;
