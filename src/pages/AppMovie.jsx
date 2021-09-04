import React from 'react';
import Navbar from '../components/shared/Navbar';
import CardsMovie from '../components/CardsMovie'

const AppMovie = () => {
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
        </div> 
    )
}

export default AppMovie
