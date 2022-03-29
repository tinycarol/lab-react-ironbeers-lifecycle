import React, { Component } from 'react';
import './App.css';
import { beers } from './services/BeerListService';
/* import Beers from './components/beerList'; */

class App extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    beers()
    .then((response) => {
      this.setState({
        beers: response,
      });
    });
  }

  render() {
    return (
      this.state.beers ? 
      <div className="App">
        {this.state.beers.map(beer => {
          return (<p key={beer.id}>{beer.name}</p>
          
          )
        })}
      </div>
      : <h2>Loading...</h2>
    );
  }
}

export default App;
