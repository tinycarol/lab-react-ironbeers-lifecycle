import "./index.css"
import React, { useState } from 'react'
import { useEffect } from 'react'
import { list } from '../../services/BeerService'
import { Beer } from '../Beer'

export const BeersList = () => {
    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        list()
            .then((beers) => {
                setBeers(beers);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);


    return (
        <div className='beersList'>
            {!loading
                ? beers.map((beer) => {
                    console.log(beers);
                    return <div className="beerdiv" key={beer.id}>
                        <Beer  {...beer} />
                    </div>

                })
                : <p><b> LOADING...</b></p>
            }
        </div>
    )

}

