import React from 'react';
import './BeerBox.css'

const BeerBox = ({ name, tagline, image, contributedBy }) => {
  return (
    <div className="BeerBox">
      <img src={image} />
      <div className="DataBeer">
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p>{contributedBy}</p>
      </div>
    </div>
  );
};

export default BeerBox;
