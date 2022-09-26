import React from 'react';
import { Component } from 'react';
import './App.css';
import BeersList from './components/BeersList/BeersList';
import { fetchBeers } from './services/beer-service';

class App extends Component {
  state = {
    beers: []
  }

  getBeers = async () => {
    const { data } = await fetchBeers()
    this.setState({
      beers: data
    })
  }

  componentDidMount = () => {
    this.getBeers()
  }

  render() {
    const { beers } = this.state
    return (
      <div className="App">
        <div className='app-beers-list'>
        { beers.length > 0 ? 
          beers.map((beer) => {
            return <BeersList key={beer._id} {...beer} />
          })
        :
        'LOADING...'}
        </div>
      </div>
    )
  }
}

export default App;
