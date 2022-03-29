import React from "react";
import { Component } from "react";
import { getBeers } from "../../services/BeerServices";


class BeerList extends Component {

    state = {
        beers: [],
        loading: true
    }

    componentDidMount() {
        getBeers()
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
                {this.state.loading ?
                    (
                        <h1 className='mx-3'>Loading...</h1>
                    ) :
                    (this.state.beers.map(beer => {
                        return (
                            <div className="Beer"key={beer._id}>
                                <div className='card'>
                                    <div className="d-flex mt-5 mx-5">
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

export default BeerList;