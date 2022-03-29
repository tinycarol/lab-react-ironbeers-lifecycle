import React, { Component } from 'react';
import './App.css';
import Beerslist from './components/BeersList/BeersList';
import Nav from './components/Nav/Nav';
import OneBeear from './components/OneBeear/OneBeear';
import { getRamdonBeer } from './services/BeersService'


class App extends Component {

  state = {
    allbears: true,
    ramdomBeer: []
  }

  showAllbeears() {
    this.setState({ allbears: true })
  }
  
  ramdomBeer() {
    getRamdonBeer()
    .then( response => {
      this.setState({
        allbears: false,
        ramdomBeer: response
      })
    }).catch((err) => console.log('err', err));
  }


  render() {
    return (
      <>
        {/* <Nav/> */}
        <div className="App container">
          <h1 className='mt-5'>BeersList</h1>

          <div className="home-links m-4">
         
            <button className="nav-link btn btn-primary" onClick={() => this.showAllbeears()}>Beers <span className="sr-only"></span></button>
            <button className="nav-link btn btn-primary" onClick={() => this.ramdomBeer()}>Random Beer</button>
            <button className="nav-link btn btn-primary" href="/new-beer">New beer</button>

          </div>

          {
            this.state.allbears
            ? (
              <Beerslist />
            )
            : (
              <OneBeear data={this.state.ramdomBeer}/>
            )
          }

        </div>
      </>
    );
  }

}

export default App;
