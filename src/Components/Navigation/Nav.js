import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link to="/beer">All Beers</Link>
      <Link to="/random">Random Beer</Link>
      <Link to="/new-beer">New Beer</Link>
    </div>
  );
};
export default Nav;
