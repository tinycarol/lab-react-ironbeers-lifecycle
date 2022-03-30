import React, { useEffect, useState } from "react";
import { getBeers } from "../../services/BeersService";

import './BeerList.css'

function BeersList() {
    const [loading, setLoading] = useState(true)
    const [beersList, setBeers] = useState([])

    
    useEffect(() => {
        getBeers()
            .then(beers => {
                console.log(beers)
                setBeers([...beers])
                setLoading(false)
            })
            .catch(error => error)
            
    }, [])
    
    
    return (
        <div>
            {loading ? <p>Loading...</p> : beersList.map(beer => {
                return(
                    <>
                    <div className="beer-box" key={beer._id}>
                        <img className="beer-image" src={beer.image_url} alt={beer.name} />
                        <div className="beer-info">
                            <h3 className="mn-3">{beer.name}</h3>
                            <h4 className="mt-1">{beer.tagline}</h4>
                            <p><strong>Created by: </strong>{beer.contributed_by}</p>
                        </div>
                    </div>
                    <hr />
                    </>
                )
            })
        }
        </div>
    )
}

export default BeersList