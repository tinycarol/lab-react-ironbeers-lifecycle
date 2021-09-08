import React, { Component } from "react"
import axios from "axios"
import "./BeerList.css"

class BeerList extends Component {
    constructor (props) {
        super(props)

        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((beersArr) => {
            this.setState (
                {beers: beersArr.data}
            )
        })
    }

    render() {
        
        if(this.state.beers.length === 0) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            )
        }

        const createdBy = (author) => {
            let authorArr = author.split("<")
            return authorArr[0]
        }

        return (
            <div class="BeerList">
                {this.state.beers.map ((beer) => {
                    return (
                        <div>
                            <div key={beer._id} className="beerItem">
                                <img src={beer.image_url} />
                                <div class="beerInfo">
                                    <h1>{beer.name}</h1>
                                    <h3>{beer.tagline}</h3>
                                    <p>Created by: {createdBy(beer.contributed_by)}</p>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BeerList