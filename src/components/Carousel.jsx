import React from 'react'
import Raya from '../multimedia/rayaSlider1.png'
import Mulan from '../multimedia/mulanSlider2.png'
import Unidos from '../multimedia/unidosSlider3.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Raya} className="d-block w-100" alt="Raya" />
        </div>
        <div className="carousel-item">
          <img src={Mulan} className="d-block w-100" alt="Mulan" />
        </div>
        <div className="carousel-item">
          <img src={Unidos} className="d-block w-100" alt="Unidos" />
        </div>
      </div>
    </div>
  )
}

export default Carousel
