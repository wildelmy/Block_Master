import React from "react";
import CardMovie from "./shared/CardMovie";


const Movie = ({ movies }) => {

    return (
        <div className="container">
            <h2 className="text-white m-2">Todas las peliculas</h2>
            <div className="row">
            {movies.map((movie)=>{
                return(
                    <div className=" col-12 col-md-2 ">
                        <CardMovie movie={movie}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Movie;