import "./index.css"
import React, { useState } from 'react'
import { useEffect } from 'react'
import { list } from '../../services/BeerService'
import { Beer } from '../Beer'
import { Link } from "react-router-dom"


export const BeersList = () => {
  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(true)
  
  
  useEffect(() => {
    list()
    .then((beers) =>{
      setBeers(beers);
      setLoading(false);
    })
    .catch((err) => console.log(err));
  }, []);
  

    return (
      <div className='beersList'>
    {!loading
      ? beers.map((beer) => {        
      return <div className="beerdiv" key={beer.key}>
       <Link to={`/beers/${beer._id}`} style={{ color: "black", textDecoration: 'none'}}>
        <Beer  {...beer}/>
       </Link>
      </div>

    })
  : <p><b> LOADING...</b></p>
  }
      </div>
      )
      
    }