import React from 'react';
import axios from 'axios';

import Beer from '../Beer/Beer';

import './BeersList.css';
import { BsHouseDoorFill } from 'react-icons/bs';

export default class BeerList extends React.Component {
  state = {
    beers: undefined,
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    return (
      <div className="BeerList container">
        <div className="Home">
          <BsHouseDoorFill className="Icon" />
        </div>
        {this.state.beers ? (
          this.state.beers.map((beer) => <Beer key={beer._id} {...beer} />)
        ) : (
          <div className="Loading">
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    );
  }
}
