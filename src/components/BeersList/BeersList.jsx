import React, { Component } from 'react'
import './BeersList.css'

class BeersList extends Component {
    state = {
    }

  render() {
    const { image_url, name, tagline, contributed_by } = this.props
    return (
      <div className='BeersList'>
        <div className='img-container'>
          <img src={image_url} alt={name} height="150px" />
        </div>
        <div className='info-container'>
          <h2>{name}</h2>
          <p>{tagline}</p>
          <small>{contributed_by}</small>
        </div>
      </div>
    )
  }
}

export default BeersList