import React from "react";
import loading from "../../videos/loading.mp4";

const Loading =  () =>  {
 
    return (
        <div>
            <video src={loading}/>
            <h1>Cargando...</h1>
            
        </div>
    )

}

export default Loading;