import './Beer.css';
import React from 'react';

const Beer = ({ image_url, name, tagline, contributed_by }) => {
  return (
    <div>
      <div className="card d-flex">
        <div className="d-flex justify-content-center">
          <img
            src={image_url}
            style={{ height: 200, width: 100 }}
            className="card-img mt-2"
            alt="..."
          />
        </div>
        <h3 className="card-title">{name}</h3>
        
        <h5 className="card-title">{tagline}</h5>

        <p className="card-text">Created by: {contributed_by}</p>
      </div>
    </div>
  );
};

export default Beer;
