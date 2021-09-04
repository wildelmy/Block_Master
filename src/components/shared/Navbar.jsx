import React from 'react'
import Logo from '../../multimedia/logo-blockBuster.svg';

const Navbar = () => {
  return (
    <div className="App">
      <div className=" d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark text-white border-bottom shadow-sm">
        <img src={Logo} alt="Logo" />
        <nav className="my-2 my-md-0 mr-md-3 d-flex ">
          <a className="p-2 text-white " href="/">
            Todas
          </a>
          <a className="p-2 text-white" href="/">
            Más valoradas
          </a>
          <a className="p-2 text-white" href="/" >
            Menos valoradas
          </a>
          
        </nav>
      </div>
    </div>
  )
}

export default Navbar
