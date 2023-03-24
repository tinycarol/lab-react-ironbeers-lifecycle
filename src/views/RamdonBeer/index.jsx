import React from 'react';
import { useState, useEffect } from 'react';
import { getRandomBeer } from '../../services/BeerService';
import { BeerDetail } from '../BeerDetail';

export const RamdonBeer = () => {
  const [loading, setLoading] = useState(true);
  const [beer, setBeer] = useState({});

  useEffect(() => {
    getRandomBeer()
      .then((beerDB) => {
        setLoading(false);
        setBeer(beerDB);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="RamdonBeer">
      {loading ? 
        <p><b>Loading...</b></p> 
        : <BeerDetail id={beer._id} />}
    </div>
  );
};
