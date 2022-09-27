import React, { Component } from 'react';
import './BeerList.css';

export default class BeersList extends Component {


  render() {
    const {name, image_url, tagline, contributed_by  } = this.props;
    return (
      <div className="Beer-container">
        <div className="div-img">
          <img height={150} src={image_url} alt="beer"></img>
        </div>
        <div className="Beer-info-container">
          <h3>{name}</h3>
          <p>{tagline}</p>
          <strong>
            Created by:{' '}
            {contributed_by
              .replace('<samjbmason>', '')
              .replace('<AliSkinner>', '')}
          </strong>
        </div>
      </div>
    );
  }
}
