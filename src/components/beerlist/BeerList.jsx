import React from 'react';
import './BeerList.css';
import axios from 'axios';
import Beer from '../beer/Beer';

export default class BeerList extends React.Component {
    state = {
		beer: null
	};

    componentDidMount ()  {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
              .then((res) => {
                  this.setState({ beer: res.data });
              })
        .catch(() => {
          console.log("Error");
        });
	}

    render() {
        if (!this.state.beer) {
			return "Loading...";
        }
        return(
            <div className='BeerList'>
                <div>
                {this.state.beer.map(beer => (
                    <Beer
                    key={beer._id}
                    {...beer}
                    />
                    ))}
                </div>
            </div>
        )
    }
}