import React, {Component} from 'react';
import './App.css';
import BeerList from './components/Misc/BeerList/BeerList';
import Navbar from './components/Misc/Navbar/Navbar';
import { beersList } from './services/BeersService';


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
  render() {

    const {beers} = this.state
    console.log(beers)

    return (


      <div className='App'>
        <Navbar style={{backgroundColor:'red'}}></Navbar>
        {
        beers.map(beer => {
          return (
            <BeerList {...beer} />
          )
        })}
      </div>
    );
  }
}

export default App;

