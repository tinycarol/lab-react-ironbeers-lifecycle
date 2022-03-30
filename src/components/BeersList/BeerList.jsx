import React from 'react'
import BeerCard from '../BeerCard/BeerCard'
import './BeerList.scss'

const BeerList = (beers) => {
    return(
        <div>
            {beers.beers.map( beer => {
                return(
                    <BeerCard key={beer._id} beer={beer}/>
                )
            })}
        </div>
    )
}
export default BeerList