import React, { Component } from 'react';
import './BeerList.css';

export default class BeersList extends Component {


  render() {
    const {name, image_url, tagline, contributed_by  } = this.props;
    return (
      <div className="Beer-container">
        <img height={150} src={image_url} alt="beer"></img>
        <div className="Beer-info-container">
            <h2>{name}</h2>
            <p>{tagline}</p> 
            <strong>Created by: {contributed_by}</strong>
        </div>
      </div>
    );
  }
}
