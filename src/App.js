import React, { Component } from 'react';
import './App.css';
import BeerItem from './components/BeerItem';
import Navbar from './components/Navbar';
import { beerList } from './services/BeerService';

class App extends Component {
  state = {
      beers: []
  }

  componentDidMount() {
    beerList()
      .then(response => {
          this.setState({
              beers: response
          })
      })
  }

  render() {
    return (

      <div className="App ">
          <Navbar />
          {this.state.beers.map(birra => {
              return (
                <BeerItem key={birra.id} {...birra}/>
              )
          })}
      </div>
    );
  }
}

export default App;
{/* <p key={birra.id}>{birra.name}</p> */}
