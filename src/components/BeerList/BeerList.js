import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const Beers = () => {
    const [loading, setLoading] = useState(true)
    const [beers, setBeers] = useState(null)
    
    // seguidos los pasos de la clase anterior de Pablo

    const fetchBeers = useCallback(() => {
        return axios.get("https://ih-beers-api2.herokuapp.com/beers")
    }, [beers])

    useEffect(() => {
        fetchBeers()
        .then(response => setBeers(response.data))
    }, [fetchBeers])

    useEffect(() => {
        if(beers) {
            setLoading(false)
        }
    }, [beers])


    return (
        <div>
            {loading ? (<p>Loading...</p>) : (
                beers && beers.map(beer => (
                    <div className="BeerCard">
                    <div key={beer._id}>
                        <img src={beer.image_url} alt="beer" className="BeerImg"/>

                        <div className="BeerInfo">
                            <h1>{beer.name}</h1>
                            <h3>{beer.tagline}</h3>
                            <p><strong>Created by: </strong>{beer.contributed_by}</p>
                        </div>
                    </div>
                </div>
                ))
            )}
        </div>
    )
}



export default Beers;