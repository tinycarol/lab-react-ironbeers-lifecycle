import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BeerID from './components/BeerID';
import axios from 'axios';

function BeerIDPage() {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchBeers = async () => {
      const { data } = await axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .catch((e) => console.log(e));

      setBeer(data);
    };

    fetchBeers();
  }, []);

  return <div>{beer ? <BeerID beer={beer} /> : 'loading'}</div>;
}

export default BeerIDPage;
