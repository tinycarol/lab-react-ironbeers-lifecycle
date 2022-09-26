import React, { Component } from "react";
import BeerCard from "../BeerCard/BeerCard";
import { fetchBeer} from '../services/beer-services'
import './BeerList.css'

class BeerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      loading: true,
    }
  }

  getBeer = async () => {
    const result = await fetchBeer()
    console.log(result);
    this.setState({
      beers: result.data,
      loading:false
    })
  }
  componentDidMount() { // se ejecuta cuando el método render se ha ejecutado
    this.getBeer()
    console.log('me monte!')
  }

  componentDidUpdate() { // se ejecuta cuando el componente se modifica, por ejemplo al modificar un state, o una prop
    console.log('me actualicé!')
  }

  componentWillUnmount() { // destruyo el componente y se ejecuta justo antes este método.
    console.log('me destruí')
  }

  render(){
    const { beers } = this.state
    console.log(beers)
    return (
      <div>
        <h1 style={{textAlign: "center"}}>List of beers: </h1>
        <div className="BeerLis">
          {this.state.loading ? "Loading..." 
            : beers.map(beer => {
              return (
                <div >         
                  <BeerCard {...beer} key={beer._id}/>
                </div>
                )
            })
          }
        </div>
      </div>
    )
  }
}

export default BeerList

