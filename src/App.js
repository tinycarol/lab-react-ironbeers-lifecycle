import React, { Component } from 'react';
import BeerList from './components/BeersList/BeerList';
import './App.scss';
import { beersList } from './services/beersList';

class App extends Component {
  state = {
    beers: []
  }

  componentDidMount() {
    beersList()
      .then(response => {
        this.setState({
          beers: response
        })
      })

  }

  render(){
    const beers =this.state.beers
    return (
      <div className="App">
        <navbar>
          <i class="fa-solid fa-house"></i>
        </navbar>
        <BeerList beers= {beers}/>
      </div>
    );
  }
}

export default App;
