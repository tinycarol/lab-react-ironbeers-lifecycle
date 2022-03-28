import React from 'react';
import { Link } from 'react-router-dom';
import styles from './App.module.css';
import Nav from './Components/Navigation/Nav';

function App() {
  return (
    <div className={styles.App}>
      <Nav />
      <div className={styles.beer_container}>
        <Link to="/beer">
          <img
            className={styles.fw_image}
            src="./images/beers.png"
            alt="blah"
          />
          <div className={styles.title}>All Beers</div>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a
          pharetra neque. Nunc nec varius dui. Aenean a dolor ex. Curabitur et
          ultricies dolor, sed malesuada lectus. Integer posuere tortor non
          magna feugiat luctus. Morbi in rutrum enim. Morbi rhoncus pretium dui,
          ac lacinia mi luctus at
        </p>
      </div>
      <div>
        <Link to="/random">
          <img
            className={styles.fw_image}
            src="./images/new-beer.png"
            alt="blah"
          />
          <div className={styles.title}>Random Beer</div>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a
          pharetra neque. Nunc nec varius dui. Aenean a dolor ex. Curabitur et
          ultricies dolor, sed malesuada lectus. Integer posuere tortor non
          magna feugiat luctus. Morbi in rutrum enim. Morbi rhoncus pretium dui,
          ac lacinia mi luctus at
        </p>
      </div>
      <div>
        <Link to="/new-beer">
          <img
            className={styles.fw_image}
            src="./images/random-beer.png"
            alt="blah"
          />
          <div className={styles.title}>New Beer</div>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a
          pharetra neque. Nunc nec varius dui. Aenean a dolor ex. Curabitur et
          ultricies dolor, sed malesuada lectus. Integer posuere tortor non
          magna feugiat luctus. Morbi in rutrum enim. Morbi rhoncus pretium dui,
          ac lacinia mi luctus at
        </p>
      </div>
    </div>
  );
}

export default App;
