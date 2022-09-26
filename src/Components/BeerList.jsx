import React, { Component } from "react";
import { fetchBeers } from '../Services/beer-service'
import Beer from "./Beer";


class BeerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            loading: true
        }
    }

    getBeers = async () => {
        const result = await fetchBeers()

        this.setState({
            beers: result.data,
            loading: false
        })
        console.log(result)
    }

    componentDidMount() { // se ejecuta cuando el método render se ha ejecutado
        this.getBeers()
        console.log('Paso en didMount')
      }

      render() {
        return (
            <div>
                {this.state.loading ? 'Loading...' : this.state.beers.map(beer => {
                    return (
                        <Beer key={beer.id} name={beer.name} tagline={beer.tagline} image_url={beer.image_url} />
                    )
                })}
                </div>
        )
    }

}

export default BeerList;