import React, { Component } from 'react';
import BeerList from './Components/BeerList/BeerList';
import 'bulma/css/bulma.css';
import Navbar from './Components/Misc/Navbar/Navbar';
import { allBeers } from './Service/BeerService';

class App extends Component {
  render() {
    return (
      <div className='col'>
        <Navbar />
        <BeerList />
      </div>
    );
  }
}

export default App;