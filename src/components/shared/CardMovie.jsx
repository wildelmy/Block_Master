import React from 'react'

const CardMovie = ({movie}) => {
  const img= `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <div className="card mb-4" style={{maxWidth: "200px"}}>
      <div className="row g-0">
        <div>
          <img src={ img } className="img-fluid rounded-start" alt="Que chafa :(" />
        </div>
      </div>
    </div>
  )
}

export default CardMovie
