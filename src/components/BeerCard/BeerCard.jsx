import React from 'react'
import './BeerCard.scss'

const BeerCard = (beer) => {
    const { image_url, name, tagline, contributed_by } = beer.beer
    return(
        <div className='BeerCard'>
            <img src={image_url} alt={name} />
            <div className='body-card'>
                <h2>{name}</h2>
                <p>{tagline}</p>
                <small>{contributed_by}</small>
            </div>
        </div>
    )
}

export default BeerCard