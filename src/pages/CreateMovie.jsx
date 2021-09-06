import React from 'react'
import CardsMovie from '../components/CardsMovie';

const CreateMovie = () => {
    return (
        <div>
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

export default CreateMovie
