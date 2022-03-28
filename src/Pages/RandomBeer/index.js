import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RandomB from './components/RandomBeer';
import axios from 'axios';

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchBeers = async () => {
      const { data } = await axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .catch((e) => console.log(e));

      setBeer(data);
    };

    fetchBeers();
  }, []);

  return <div>{beer ? <RandomB beer={beer} /> : 'loading'}</div>;
}

export default RandomBeer;
