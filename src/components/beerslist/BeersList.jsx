import './BeersList.css';
import React, { Component } from 'react';
import axios from "axios";

export default class BeersList extends Component {
    state = {
        beers: []
    }

    getBeer() {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((res) => {
            this.setState({beers: res.data});
        })
        .catch(() => {
            console.log("Error");
        });
    }

    componentDidMount() {
        this.getBeer();
    }


    render() {
        return(
            <div className="BeerList">
                <h1 className="Inicio">IronBeers</h1>

                { !this.state.beers ? <h1>Loading...</h1> : (this.state.beers.map((beer) => {
                    return (
                        <div>
                            <div className="BeerCard">
                                <div key={beer._id}>
                                    <img src={beer.image_url} alt="beer" className="BeerImg"/>

                                    <div className="BeerInfo">
                                        <h1>{beer.name}</h1>
                                        <h3>{beer.tagline}</h3>
                                        <p><strong>Created by: </strong>{beer.contributed_by}</p>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                        )
                    }
                ))}
            </div>
        )
    }
}