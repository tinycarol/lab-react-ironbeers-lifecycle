import React, { Component } from 'react'
import { allBeers } from '../../Service/BeerService';


class BeerList extends Component {
    state = {
        beers: [],
        loading: true
    }

    componentDidMount() {
        allBeers()
            .then(response => {
                this.setState({
                    beers: response,
                    loading: false
                })
            }).catch((err) => console.log('err', err));
    }


    render() {
        const { loading, beers } = this.state
        return (
            <div>
                {loading ? (
                    <div className='d-flex justify-content-center align-items-center' style={{ height: 100}}>
                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

                ) : (
                    <div className='container-fluid mt-2'>
                        <div className='d-flex flex-column justify-content-center'>
                            {
                                beers.map((beer) => {
                                    return (
                                        <div key={beer._id}>
                                            <div className='card'>
                                                <div className="d-flex mt-5 mx-5">
                                                    <div className="pe-5 mb-3">
                                                        <img src={beer.image_url} style={{ height: 160, width: 55 }} className="card-img-top" alt="..." />
                                                    </div>
                                                    <div>
                                                        <h3 className="fs-1 fw-light">{beer.name}</h3>
                                                        <h4 className="fs-2 text-muted" >{beer.tagline}</h4>
                                                        <p className="fs-6"><strong>Created by:</strong> {beer.contributed_by}</p>
                                                    </div>
                                                    <hr />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
export default BeerList

