import React, {useEffect, useState} from 'react';
import {getBeers} from '../../services/BeersService';
import './BeerList.css';

export default function BeerList() {
    const [loading,setLoading] = useState(true);
    const [beersList, setBeers] = useState([]);

    useEffect(() => {
        getBeers()
            .then(beers => {
                setBeers([...beers])
                setLoading(false)
            })
            .catch(error => error)
    })

    return(
        <div>
            {loading ? <p>Loading...</p> : beersList.map(beer => {
                return(
                    <>
                        <div 
                            className='beer-box'
                            key={beer.id}
                        >
                            <img
                                className='beer-img'
                                src={beer.image_url}
                                alt={beer.name}
                            />
                            <div className='beer-info'>
                                <h4 className='mn-3'>{beer.name}</h4>
                                <h5 className='mt-1'>{beer.tagline}</h5>
                                <p><strong>Created by: </strong>{beer.contributed_by}</p>
                            </div>    
                        </div>
                    </>
                );
            })
            }
        </div>
    );
}