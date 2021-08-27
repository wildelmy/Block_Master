import React from 'react'
import '../../styles/styleLogin.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

const login = () => {
  return (
    <div className="Registro py-5 container text-center">

      <form className="form-signin">
        <h1 className="h4 mb-3 font-weight-normal">
          Inicio de sesión
        </h1>

        <input
          type="email"
          id="inputEmail"
          className="form-control mt-1"
          placeholder="Correo"
          required=""

        />

        <input
          type="Password"
          id="inputPassword"
          className="form-control mt-1"
          placeholder="Contraseña"
          required=""

        />

        <button
          type="submit"
          className="btn btn-primary btn-block"

        >
          Acceder
        </button>

        <div className="">
          <p>Acceder mediante</p>

          <div
            className="google-btn btn-primary"
          >
            <div className="google-icon-wrapper">
              <img className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button" />
            </div>
            <p className="btn-text">
              <b>Entrar con google</b>
            </p>
          </div>
        </div>
        <div
          className="google-btn btn-primary"
        >
          <div className="google-icon-wrapper">
            <img className="google-icon"
              src="https://image.flaticon.com/icons/png/512/20/20673.png"
              alt="google button"
              width="30px" />
          </div>
          <p className="btn-text">
            <b>Entrar con Facebook</b>
          </p>
        </div>

        <a
          to="/auth/register"
          className="link"
        >
          Crear nueva cuenta
        </a>
      </form>
    </div>
  )
}
export default login;