import React, { Component } from 'react';
import { beerList } from './services/BeersService';
import BeersList from './components/BeersList/BeersList';
import Beer from './components/Beer/Beer';
import './App.scss';

class App extends Component {
  state= {
    beers : [],
    loading: true
  }

  componentDidMount() {
    beerList()
      .then((response) => {
        this.setState({
          loading: false,
          beers: response
        })
      })
  }


  render() {
    const { beers, loading } = this.state

    return (
      <div className="wrapper">
        {loading ?
          <BeersList />
          :
          (beers.map(beer => {
            return (
              <Beer key={beer._id} name={beer.name} image={beer.image_url} tagline={beer.tagline} />
              )
            })
          )
        }
      </div>
    )
  }
}

export default App;
