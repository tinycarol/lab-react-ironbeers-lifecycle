import React, { Component } from 'react';
import { BeersList} from './components/BeerList/BeerList';
import Loanding from './components/Loanding/Loanding';
import { beersList } from './services/BeerService';
import './App.css';

class App extends Component {
  state = {
    beers: [],
    Loanding: true
  }

  componentDidMount = () => {
    beersList()
      .then(response => {
        this.setState({
          beers: response
        })
      }) 
  }

  render() {
    return (
      <div className="App">
        <Loanding />
        <BeersList />
      </div>
    );
  }
}

export default App;
