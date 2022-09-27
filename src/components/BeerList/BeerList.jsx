import React, { Component } from 'react'
import { fetchBeers } from '../../services/beers-service';
import BeerCard from '../BeerCard/BeerCard'

class BeerList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            beers: [],
            loading: true
        }
    }

getBeers = async () => {
    const result = await fetchBeers()

    console.log(result);

    this.setState({
        beers: result,
        loading: false
    })
   
}

componentDidMount() {
    this.getBeers()
    console.log('cervezassssss vienen!');
}

render (){
    return (
        <div>
            {this.state.loading ? 'Loading....' 
            : this.state.beers.map( beer => {
                return (
                    <div>
                        <BeerCard key={beer._id}{...beer}></BeerCard>
                    </div>
                )
            }) } 
        </div>
    )
}
}

export default BeerList