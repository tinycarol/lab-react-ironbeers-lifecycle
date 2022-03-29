import React from "react";
import './Beer.css'

const Beer = ({ name, image, tagline, id }) => {
  return (
    <>
      <div className="container">

      <div key={id}>
      <img className="beer-img" src={image} alt={name}/>
      </div>

      <div>
        <h2>{name}</h2>
        <p>{tagline}</p>
        <p>
        <strong>
        Contributed by: <small>{name}</small>
        </strong>
        </p>
      </div>
      </div>


    </>
  )
}

export default Beer;
