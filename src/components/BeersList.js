import React, { Component } from 'react';
import { fetchBeers } from '../services/BeerServices';

class BeerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      title: 'This is my table',
      loading: true,
    };
  }

  getBeers = async () => {
    const result = await fetchBeers();

    this.setState({
      beers: result.data,
      loading: false,
    });
    console.log(result);
  };

  componentDidMount() {
    // se ejecuta cuando el método render se ha ejecutado
    this.getBeers();
    console.log('me monte!');
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.loading
            ? 'Loading...'
            : this.state.beers.map(({_id, name, image_url, tagline, contributed_by}) => {
                return (
                  <div>
                    <li key={_id}>{name} </li>
                    <img src={image_url} alt={name} />
                    <small>{tagline}</small>
                    <p><stong>{contributed_by}</stong></p>
                  </div>
                );
              })}
        </ul>
      </div>
    );
  }
}

export default BeerList;
