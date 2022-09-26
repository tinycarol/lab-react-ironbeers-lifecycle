import React from "react";

function BeerCard({name, image_url, tagline, contributed_by}) {
  return (
    <div className="row p-2 my-4 align-items-center">
      <div className="col-4">
        <img src={image_url} alt={name} height="100"/>
      </div>
      <div className="col-8 text-start">
        <h2>{name}</h2>
        <p className="mb-0 fw-bold text-secondary">{tagline}</p>
        <p className="mb-0">{contributed_by}</p>
      </div>
    </div>
  )
}

export default BeerCard