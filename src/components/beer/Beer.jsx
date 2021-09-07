import React from 'react';
import './Beer.css';

export default function Beer({ image_url, name, tagline, contributed_by }) {
  return (
      <div className='Beer'>
        <img src={image_url} alt={name} />
        <div className='beerContainer'>
            <div className='beerInfo'>
                <h1>{name}</h1>
                <h3>{tagline}</h3>
                <p><strong>Created by: </strong>{contributed_by}</p>
            </div>
            <hr /> 
        </div>
      </div>
  )
}