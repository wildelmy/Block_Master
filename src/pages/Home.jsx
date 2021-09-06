import React from 'react';
import Navbar from '../components/shared/Navbar';
import CardsMovie from '../components/CardsMovie';
import Movie from '../components/Movie.jsx'

const Home = () => {
    return (
        <div>
        <Navbar />
        <div className="container ">
            <div className="row mt-4">
                <div className="col-md-8">
                    <div className="row">
                        <main>
                            <CardsMovie />
                        </main>
                    </div>
                </div>
            </div>
        </div>
       <Movie /> 

        </div> 
    )
}

export default Home
