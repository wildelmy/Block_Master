import React from 'react'
import Logo from '../../multimedia/logo-blockBuster.svg'

const AppMovie = () => {
    return (
        <div className="App">
        <div className=" d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark text-white border-bottom shadow-sm">
            <img src="Logo" alt="" />
            <h5 className="my-0 mr-md-auto font-weight-normal">Taks</h5>
            <span className="badge badge-pill bg-danger ml-2 m-2">
                2
            </span>

            <nav className="my-2 my-md-0 mr-md-3 d-flex   ">
                <a className="p-2 text-white " href="/">
                    Todas
                </a>
                <a className="p-2 text-white" href="/">
                    Más valoradas
                </a>
                <a className="p-2 text-white" href="/"
                    >

                    Menos valoradas

                </a>
            </nav>
        </div>

        <div className="container ">
            <div className="row mt-4">
                <div className="col-md-4 text-center py-3">
                    <img src="https://res.cloudinary.com/db9wh5uvt/image/upload/c_thumb,w_200,g_face/v1622742996/x9min2yx30d4bbwgrzpk.png" className="App-logo " alt="logo" />

                </div>

                <div className="col-md-8">
                    <div className="row">

                        <main>
                            
                        </main>


                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default AppMovie
