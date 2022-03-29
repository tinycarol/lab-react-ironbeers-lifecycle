import React from 'react';
import { Component } from 'react';
import './App.css';
import { beerList } from './services/BeerServices'
import Navbar from './Navbar/Navbar';


class App extends Component {

  state = {
    beers: [],
    loading: true
  }

  componentDidMount() {
    beerList()
      .then(response => {
        this.setState({
          beers: response,
          loading: false
        })

      })

  }

  render() {
    return (
      <div className="App text-start">
        <Navbar />
        {this.state.loading ?
        (
          <p>Loading...</p>
        ): 
          (this.state.beers.map(beer => {
            return (
              <div>
              <div className='card'>
                <div className="d-flex mt-5 mx-5" key={beer._id}>
                  <div className="pe-5 mb-3">
                    <img src={beer.image_url} style={{ height: 160, width: 55 }} className="card-img-top" alt="..." />
                  </div>
                  <div>
                    <h3 className="fs-1 fw-light">{beer.name}</h3>
                    <h4 className="fs-2 " style={{ color: 'grey' }}>{beer.tagline}</h4>
                    <p className="fs-6"><strong>Created by:</strong> {beer.contributed_by}</p>
                  </div>
                  <hr />
                </div>
              </div>
              </div>
            )
          }))
        }

      </div>
    );
  }
}

export default App;
