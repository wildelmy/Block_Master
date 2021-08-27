import React from 'react'

const CardsMovie = () => {
  return (
    <div className=" row ">
      <div className="col-md-4 text-center py-1 container">
        <div className="card mt-2 container text-center">
          <div className="card-title text-center container">
            <h3>Titulo</h3>
            <img className="text-center container" src="" alt="" width="60px" height="80px" />
            <span className="badge badge-pill bg-danger ml-2">
            Prioridad
            </span>

          </div>

          <div className="card-body">

            <p>Descripción</p>
            <p>
              <mark>Responsable</mark>
            </p>
          </div>
          <div className="card-footer text-center" >

            <button
              className="btn btn-warning"
            >
              Editar
            </button>

            <button
              className="btn btn-danger"

            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CardsMovie
