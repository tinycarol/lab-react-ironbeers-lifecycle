import React from "react";
import './Beer.css'

const Beer = ({ name, image, tagline, id }) => {
  return (
    <>
      <div key={id} className="container">

      <div className="card-container">
      <img className="beer-img" src={image} alt={name}/>
      </div>

      <div className="text-card">
        <h2>{name}</h2>
        <h4>{tagline}</h4>
        <h6>
        <strong>
        Contributed by: <small>{name}</small>
        </strong>
        </h6>
      </div>
      </div>
      <hr/>

    </>
  )
}

export default Beer;
