import React, { Component } from 'react';
import './App.css';
import BeersList from './components/BeersList/BeersList';
import { fetchBeers } from './services/beers-services';

class App extends Component {

  state = {
    beers: []
  }

  getBeers = async () => {
    const { data } = await fetchBeers()
    this.setState({ beers: data });   
    console.log(data)
  }

  componentDidMount = () => {
    this.getBeers();    
  }

  render () {
    const { beers } = this.state;

    return (
      <div className="App">
        <div className="BeerList-container">
          {beers.length > 0
            ? beers.map((beer) => {
                return <BeersList {...beer} key={beer._id} />;
              })
            : 'Loading...'}
        </div>
      </div>
    );
  }  
}

export default App;
