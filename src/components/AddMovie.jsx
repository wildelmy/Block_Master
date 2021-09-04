import React from 'react'

const AddMovie = () => {
    return (
        <div className="card container text-center">
        <h2>Agregar nueva pelicula</h2>
        <form className="card-body " >
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control mt-1"
              placeholder="Titulo"
             
            />
          </div>
  
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control mt-1"
              placeholder="Responsable"
            
            />
          </div>
  
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control mt-1"
              placeholder="Descripción"
             
            />
          </div>
  
          <div className="form-group">
            <select
              name="priority"
              className="form-control mt-1"
            
            >
              <option>Baja</option>
              <option>Medio</option>
              <option>Alta</option>
            </select>
          </div>
  
          <input
            id="fileSelector"
            type="file"
            name="file"
            style={{ display: 'none' }}
         
          />
          <div>
            <input
             type="button"
              className="btn border-bottom shadow-sm"
              value="Imagenes"
            />
             
           
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Guardar
          </button>
        </form>
      </div>
    )
}

export default AddMovie
