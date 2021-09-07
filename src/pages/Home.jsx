import React, { useEffect, useState} from "react";
import axios from 'axios'
import Navbar from '../components/shared/Navbar';
import Movies from '../components/Movies.jsx'
import Carousel from '../components/Carousel.jsx'

const Home = () => {
    const [listMovies, setListMovies]= useState([]);
    const [ search, setSearch ]= useState("");

    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/list/1?api_key=042f14f24973c0d4bc7bde71477e7191#")
        .then((response)=>{
            setListMovies(response.data.items)
        })
    }, [])

    const handleFormChange = (e)=>{
        setSearch(e.target.value)
    }

    const searchMovie=()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=042f14f24973c0d4bc7bde71477e7191&query=${search}`)
        .then((response)=>{
            console.log(response)
            setListMovies(response.data.results)
        })

    }

    return (
        <div>
        <Navbar handleFormChange={ handleFormChange } searchMovie={ searchMovie }/>
        <Carousel />
        <Movies movies={listMovies} /> 
        </div> 
    )
}

export default Home
