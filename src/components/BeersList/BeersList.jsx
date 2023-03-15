import './BeersList.css';
import { list } from '../../services/BeersService';
import React, { Component }  from 'react';
import loader from '../../images/loading.gif';

class BeersList extends Component {
    state = {
        beersList:[],
        error: ''
    }

    componentDidMount() {
        list()
        .then((beers) => {
            console.log(beers[0])
            this.setState({ beersList: beers })
        })
        .catch(err => {
            this.setState({ error: err })
        })
    };

    render() { 
        return (
            <div className='BeerList'>
                {
                    this.state.beersList.length > 0 ?
                    this.state.beersList.map(beer => (
                        <div className='each-beer-container' key={ beer._id }>
                            <img src={ beer.image_url } alt={ beer.name } width='100px'/>
                            <div>
                                <h1>{ beer.name }</h1>
                                <h4>{ beer.tagline }</h4>
                                <p><b>Created by: </b>{ beer.name }</p>
                            </div>
                        </div>
                    ))
                    :
                    // <img src={ loader } alt='Loading' width='50px'/>
                    <div className="loader"></div>
                }
            </div>
        );
    }
}
 
export default BeersList;