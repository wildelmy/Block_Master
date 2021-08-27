import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'

const MovieApp = () => {
    return (
        <Provider store= {store}>
            <h1>Ejercicio</h1>
        </Provider>
    )
}

export default MovieApp
