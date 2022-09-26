import React, { Component } from "react";
import { fetchBeers } from '../../services/services'
import BeerCard from "../BeerCard/BeerCard";

class BeerList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      loading: true,
    }
  }

  getBeers = async () => {
    const result = await fetchBeers();
    this.setState({
      beers: result.data,
      loading: false
    })
    console.log(result)
  }

  componentDidMount() { // se ejecuta cuando el método render se ha ejecutado
    this.getBeers()
    console.log('componentDidMount')
  }

  componentDidUpdate() { // se ejecuta cuando el componente se modifica, por ejemplo al modificar un state, o una prop
    console.log('componentDidUpdate')
  }

  componentWillUnmount() { // destruyo el componente y se ejecuta justo antes este método.
    console.log('componentWillUnmount')
  }

  render() {

    const { beers, loading } = this.state

    return (
      <div>
        {
        loading ? <span className="fw-bold fs-1">Loading...</span> :
        <div>
          { beers.map((beer) => {
            return (
              <BeerCard {...beer} />
            )
          })}
        </div>
        }
      </div>
      
        
  
    )
  }

}

export default BeerList