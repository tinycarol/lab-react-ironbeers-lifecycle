import { getByPlaceholderText } from '@testing-library/dom';
import React, { Component } from 'react';
import './Beer.css';

export default function Beer({ image_url, name, tagline, contributed_by }) {
  
  return(
    <div className='Beer'>
      <div className="col-sm-6">
        <div className="card">
          <img className="" src={image_url} alt={name} />
          <div className="card-body beer-info">
            <h4 className="card-title">{name}</h4>
              <p>{tagline}</p>
              <p className="card-text"><small className="text-muted"><strong>Created by:</strong> {contributed_by}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}






