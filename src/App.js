import React, { Component } from 'react';
import { beerList } from './services/BeersService';
import BeersList from './components/BeersList/BeersList';
import './App.scss';

class App extends Component {
  state= {
    beers : []
  }

  componentDidMount() {
    beerList()
      .then((response) => {
        this.setState({
          beers: response
        })
      })
  }


  render() {
    return (
      <div className="App">
        <BeersList />
        {this.state.beers.map(beer => {
          return (
            <p>{beer.name}</p>
          )
        })}
      </div>
    )
  }
}

export default App;
