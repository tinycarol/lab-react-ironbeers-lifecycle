import React from 'react';

import './Beer.css';

export default function Beer({ image_url, name, tagline, contributed_by }) {
  return (
    <div className="Beer">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={image_url}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body Beer-data">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{tagline}</p>
              <p className="card-text">
                <strong>
                  <small className="text-muted">{contributed_by}</small>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
