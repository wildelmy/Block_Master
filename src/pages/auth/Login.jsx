import React from 'react'
import '../../styles/styleLogin.css'
import 'bootstrap/dist/css/bootstrap.css'
import { UseForm } from '../../hooks/useForm'
import { useDispatch as UseDispatch} from 'react-redux'
import { loginAction, loginFacebook, loginGoogle } from '../../actions/actions'


const login = () => {

  const dispatch = UseDispatch();

  const [values, handleInputChange] = UseForm({
    email: '',
    password: ''
  })

  const { email, password }= values;

  const handleLogin= (e)=> {
    e.preventDefault();
    dispatch(loginAction(email, password));
  }

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  }

  const handleLoginFacebook = () => {
    dispatch(loginFacebook());
  }

  return (
    <div className="Registro py-5 container text-center">

      <form className="form-signin" onSubmit={handleLogin}>
        <h1 className="h4 mb-3 font-weight-normal">
          Inicio de sesión
        </h1>

        <input
          type="email"
          id="inputEmail"
          className="form-control mt-1"
          name= "email"
          value= {email}
          onChange= {handleInputChange}
          placeholder="Correo"
          required=""

        />

        <input
          type="Password"
          id="inputPassword"
          className="form-control mt-1"
          name= "password"
          value= {password}
          onChange=  {handleInputChange}
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
            onClick= {handleLoginGoogle}
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
          onClick= {handleLoginFacebook}
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
      </form>
    </div>
  )
}
export default login;