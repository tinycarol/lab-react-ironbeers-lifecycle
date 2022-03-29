import React, { Component } from 'react'
import OneBeear from '../OneBeear/OneBeear';
import { getAllbeers, getOneBeer, getRamdonBeer } from './../../services/BeersService'
import './BeersList.css'

class Beerslist extends Component {

  state = {
    beerList: [],
    loading: true,
    showAllBeears: true,
    oneBeear: [],
    ramdomBeear: false
  }

  componentDidMount() {
    getAllbeers()
      .then( response => {
        this.setState({
          beerList: response,
          loading: false,
        })

      }).catch((err) => console.log('err', err));
  }

  logBeerDetail(id, beear) {
    getOneBeer(id)
    .then( response => {
      this.setState({
        ...this.state,
        oneBeear: beear,
        showAllBeears: false
      })
    }).catch((err) => console.log('err', err));
  }





  render() {
    const { loading, beerList, showAllBeears, oneBeear, ramdomBeear } = this.state
  
    return (
      <div>
        { loading 
          ? (
            <div>
              <p>Loading...</p>
            </div>
          )
          : (
            showAllBeears 
              ? (
                <div className='bears-block'>
                  {
                    beerList.map((beer, index) => {
                      const { image_url, name, tagline, contributed_by} = beer
                      return (
                        <div 
                          key={index} 
                          className="bears-block-info d-flex justify-content-center align-items-center mt-5 mb-5"
                          onClick={() => this.logBeerDetail(beer._id, beer)}
                        >
                          <img className='beears-img' src={image_url} alt="name"></img>
                          <div className='beears-info'>
                            <p className='title'>{name}</p>
                            <p>{tagline}</p>
                            <p>{contributed_by}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              )
              : (
                <OneBeear data={oneBeear}/>
              )
          )
        }
      </div>
    )
  }

}

export default Beerslist