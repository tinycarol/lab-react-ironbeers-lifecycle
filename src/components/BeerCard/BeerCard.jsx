import React from "react";
import './BeerCard.css'

function BeerCard ({name, image_url, tagline, contributed_by}) {
  return (
    <div className="BeerCard">
      <img src={image_url} alt="beer-pic" className="BeerCard__img"/>
      <div className="BeerCard__text">
        <h2>{name}</h2>
        <p>{tagline}</p>
        <p><strong>Created by:</strong> {contributed_by}</p>
      </div>
    </div>
  )
}

export default BeerCard