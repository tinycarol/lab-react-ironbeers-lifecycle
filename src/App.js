import React, {Component} from 'react';
import './App.css';
import Beerslist from './components/BeersList/BeersList';
import {getAllbeers} from './services/BeersService'



class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1 className='mt-4'>BeersList</h1>
        <Beerslist />
      </div>
    );
  }

}

export default App;
