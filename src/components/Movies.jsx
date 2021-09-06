import React, { useEffect, useState} from "react";
import axios from 'axios'
import CardMovie from "./shared/CardMovie";


const Movie = () => {
    const [listMovies, setlistMovies]= useState([]);

    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/list/1?api_key=042f14f24973c0d4bc7bde71477e7191#")
        .then((response)=>{
            setlistMovies(response.data.items)
        })
    }, [])

    return (
        <div className="container">
            <h2 className="text-white m-2">Todas las peliculas</h2>
            <div className="row">
            {listMovies.map((movie)=>{
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