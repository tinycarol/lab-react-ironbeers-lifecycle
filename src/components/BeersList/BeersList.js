import React, { Component } from 'react'
import { getAllbeers } from './../../services/BeersService'


class Beerslist extends Component {

  state = {
    beerList: [],
    loading: true
  }

  componentDidMount() {
    getAllbeers()
      .then( response => {
        this.setState({
          beerList: response,
          loading: false
        })

      }).catch((err) => console.log('err', err));
  }

  render() {
    const { loading, beerList } = this.state
    console.log(beerList)
  
    return (
      <div>
        { loading 
          ? (
            <div>
              <p>Loading...</p>
            </div>
          )
          : (
            <div className='bears-block'>
              <h3>Bears Loaded</h3>
              {
                beerList.map((beer, index) => {
                  return (
                    <div key={index} className="bears-block-info">
                      {beer.name}
                    </div>
                  )
                })
              }
            </div>
          )
        }
      </div>
    )
  }

}

export default Beerslist