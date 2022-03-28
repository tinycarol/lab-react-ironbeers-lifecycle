import axios from 'axios';
import React, { useState, useEffect } from 'react';
const BeerList = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                console.log(response.data)
                setBeers(response.data)
            })
    }, [])


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "800px" }} >
            {beers?.length ?
                <div style={{ display: "flex", flexWrap: "wrap", width: "800px" }}>
                    {beers.map(beer => {
                        return (
                            <div style={{ border: "1px solid black", borderRadius: "8px", width: "200px" }} >
                                <img src={beer.image_url} style={{ width: "50px" }} />
                                <p>{beer.name}</p>
                                <hr/>
                                <p>{beer.tagline}</p>
                                <hr/>
                                <p>{beer.contributed_by}</p>
                            </div>
                        )
                    })}
                </div>
                : <h1>Loading...</h1>
            }

        </div>
    )
}

export default BeerList