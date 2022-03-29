import React, { Component } from 'react';
import BeersList from './components/BeerList/BeerList';
import Loading from './components/Loading/Loading'
import { beersList } from './services/BeerService';
import './App.css';

class App extends Component {
  state = {
    beers: [],
    loading: true
  }

  componentDidMount = () => {
    beersList()
      .then(response => {
        this.setState({
          beers: response,
          loading: false
        })
      })
  }

  render() {
    return (
      <div className="App">
      {this.state.beers &&
        <Loading /> }
        <BeersList beers={this.state.beers} />
      </div>
    );
  }
}

export default App;
