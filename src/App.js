import React, { Component } from 'react';
import './App.css';
import { beers } from './services/BeerListService';
import Beer from './components/beer/Beer';
import Navbar from './components/misc/Navbar'

class App extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    beers().then((response) => {
      this.setState({
        beers: response,
      });
    });
  }

  render() {
   
    return this.state.beers ? (
      <div className="App">

      <Navbar />
        {this.state.beers.map((beer) => {
          return (
       <Beer key={beer.id} {...beer}/>
          );
        })}
      </div>
    ) : (
      <h2>Loading...</h2>
    );
  }
}

export default App;
