import React, { Component } from 'react';
import { fetchBeers } from '../services/BeerServices';
import './BeerList.css'

class BeerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
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
            : this.state.beers.map(
                ({ _id, name, image_url, tagline, contributed_by }) => {
                  return (
                    <div className='Beer-container'>
                      
                      <div className='Beer-img'>
                        <img src={image_url} alt={name} />
                      </div>
                      
                      <div className='Beer-info'>
                        <li key={_id}>{name} </li>
                        <p className='Beer-tag'>{tagline}</p>
                        <p className='Beer-created'>
                        <strong>Created by:</strong> {' '} 
                        {contributed_by.replace('<samjbmason>', '').replace('<AliSkinner>', '') }
                        </p>
                      </div>

                    </div>
                  );
                }
              )}
        </ul>
      </div>
    );
  }
}

export default BeerList;


