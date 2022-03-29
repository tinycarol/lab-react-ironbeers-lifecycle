import React from 'react'
import './Beer.scss'


const Beer = ({ name, image, tagline }) => {
  return (
    <div className="beer">
      <div className="beer__capture">
        <img className="beer__image" src={image} alt={name} />
      </div>

      <div className="beer__info">
        <h1 className="beer__name">{name}</h1>
        <p className="beer__tagline">{tagline}</p>
        <p className="beer__contributed"><strong>Contributed by:</strong> {name}</p>
      </div>
    </div>
  )
}

export default Beer