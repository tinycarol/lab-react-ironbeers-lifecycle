import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './Beer.module.css';

const SearchBar = ({ setBeers }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const searchBeers = async () => {
      const { data } = await axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        .catch((e) => console.log(e));
      setBeers(data);
    };

    searchBeers();
  }, [query]);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <div className={styles.search}>
      Search Beer DB
      <input onChange={handleChange}></input>
    </div>
  );
};

export default SearchBar;
