import React, { Component } from 'react';
import axios from 'axios';
import Beer from '../Beer/Beer';
import { HomeIcon } from '@heroicons/react/outline'
import './BeerList.css'

export default class BeerList extends Component {
  state = {
    beer: null
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) =>{
        this.setState({ beer: res.data })
      })
      .catch((e) => console.log(e))
  }

  render() {
    return(
      <div className='BeerList container'>
        <div className='Home-Icon'>
          <HomeIcon width='50px' height='50px'/>
        </div>
        <div className="card-group">
          {this.state.beer ? 
          (this.state.beer.map((beer) => <Beer key={beer._id} {...beer} /> )) : 
          (<div className='Loading'>
            <h1>Loading...</h1>
          </div>)}
        </div>
      </div>
    )
  }
}