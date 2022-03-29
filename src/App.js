import React, { Component } from 'react';
import BeersList from './components/BeerList/BeerList';
import { beersList } from './services/BeerService';
import './App.css';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  state = {
    beers: [],
    loading: true
  }

  componentDidMount = () => {
    beersList()
      .then(response => {
        this.setState({
          loading: false,
          beers: response
        })
      })
  }

  render() {
    return (
      <>
        <Navbar />
      <div className="App">
      {
        this.state.beers &&
        <BeersList beers={this.state.beers} />
      }
      </div>
      </>
    )
  }
}

export default App;
