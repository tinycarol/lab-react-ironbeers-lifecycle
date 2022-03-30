import React from 'react'
import BeerCard from '../BeerCard/BeerCard'
import './BeerList.scss'

const BeerList = (beers) => {
    return(
        <div className='BeerList'>
            <h1>Beers List:</h1>
            {beers.beers.map( beer => {
                return(
                    <BeerCard key={beer._id} beer={beer}/>
                )
            })}
        </div>
    )
}
export default BeerList