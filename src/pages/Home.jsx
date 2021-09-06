import React from 'react';
import Navbar from '../components/shared/Navbar';
import Movies from '../components/Movies.jsx'
import Carousel from '../components/Carousel.jsx'

const Home = () => {
    return (
        <div>
        <Navbar />
        <Carousel />
        <Movies /> 
        </div> 
    )
}

export default Home
