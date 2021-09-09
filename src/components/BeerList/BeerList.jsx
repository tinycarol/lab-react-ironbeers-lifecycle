import "./BeerList.css"
import React from "react"
import axios from "axios";

export default class BeerList extends React.Component{
    state = {
        beerList: []
    }

    getBeers() {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
                .then((res) => {
                    this.setState({ beerList: [...res.data]});
                })
          .catch(() => {
            console.log("Error");
          });
    }

    componentDidMount() {
        this.getBeers()
    }

    render(){
        return(
            <div className="BeerList">
                {this.state.beerList.map((beer)=>{
                    console.log(beer)
                    return(
                        <div>
                            <div className="BeerList__Beercard">
                                <div>
                                    <img src={beer.image_url} className="BeerList__Beercard__image"></img>
                                </div>
                                <div className="BeerList__Beercard__content">
                                    <h2>{beer.name}</h2>
                                    <p>{beer.tagline}</p>
                                    <p>{beer.contributed_by}</p>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    )
                })}
            </div>
        )
    }
}