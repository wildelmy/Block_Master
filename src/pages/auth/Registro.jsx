import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const registro = () => {
  return (
    <div className="Registro py-5 container text-center">
      <form className="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">
          ¡Registrate en nuestro sistema!
        </h1>
        <label for="inputemailaddress" class="sr-only">
          Correo electrónico
        </label>

        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          className="form-control"
          autoComplete="off"

        />

        <input
          type="email"
          placeholder="Correo"
          name="email"
          className="form-control"
          autoComplete="off"
          required=""

        />

        <input
          type="Password"
          name="Password"
          id="inputPassword"
          className="form-control"
          placeholder="Contraseña"
          required=""

        />

        <input
          type="Password"
          name="Password2"
          id="inputPassword2"
          className="form-control"
          placeholder="Confirmar contraseña"
          required=""

        />

        <button
          type="submit"
          className="btn btn-primary btn-block mb-1"
        >
          Registrar
        </button>
        <br />
        <a
          to="/auth/login"
          className="link"
        >
          ¿Ya registrado?
        </a>

      </form>

    </div>
  )
}

export default registro
