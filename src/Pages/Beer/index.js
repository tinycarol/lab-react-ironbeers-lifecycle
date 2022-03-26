import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Beer from './components/Beer';

function BeerPage() {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    const fetchBeers = async () => {
      const { data } = await axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .catch((e) => console.log(e));
      setBeers(data);
    };

    fetchBeers();
  }, []);

  return (
    <div className="App">
      <div>
        <Beer beers={beers} />
      </div>
    </div>
  );
}

export default BeerPage;
