import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Beer from './components/Beer';
import SearchBar from './components/SearchBar';
import styles from './components/Beer.module.css';

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
      <div className={styles.page_container}>
        <SearchBar setBeers={setBeers} />
        <Beer beers={beers} />
      </div>
    </div>
  );
}

export default BeerPage;
