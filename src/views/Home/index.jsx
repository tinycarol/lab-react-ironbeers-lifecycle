import React from 'react';
import './index.css';
import BeersImage from '../../assets/images/beers.png';
import RamdonImage from '../../assets/images/random-beer.png';
import NewImage from '../../assets/images/new-beer.png';
import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <div className="Home">
      <div className="home-div">
        <div className='home-card'>
         <Link to="/beers" style={{ color: "black", textDecoration: 'none' }}>
         <img src={BeersImage} alt="beers" />
         <h3>All Beers</h3>
         <p>
           Lorem fistrum aute te va a hasé pupitaa condemor enim voluptate
           tiene musho peligro exercitation hasta luego Lucas. A wan me cago en
           tus muelas ut te va a hasé pupitaa irure aliquip voluptate officia
           condemor
         </p>
         </Link>
        </div>
        <div className='home-card'>
        <Link to="/beers/random-beer" style={{ color: "black", textDecoration: 'none' }}>
        <img src={RamdonImage} alt="ramdon" />
        <h3>Ramdon Beer</h3>
        
        <p>
        Lorem fistrum aute te va a hasé pupitaa condemor enim voluptate tiene
        musho peligro exercitation hasta luego Lucas. A wan me cago en tus
        muelas ut te va a hasé pupitaa irure aliquip voluptate officia
        condemor
        </p>
        </Link>
        </div>
        <div className='home-card'>
        <Link to="/new-beer" style={{ color: "black", textDecoration: 'none' }}>
        <img src={NewImage} alt="New" />
        <h3>New Beer</h3>
        
        <p>
        Lorem fistrum aute te va a hasé pupitaa condemor enim voluptate tiene
        musho peligro exercitation hasta luego Lucas. A wan me cago en tus
        muelas ut te va a hasé pupitaa irure aliquip voluptate officia
        condemor
        </p>
        </Link>
        </div>
      </div>
    </div>
  );
};
