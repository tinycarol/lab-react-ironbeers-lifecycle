import React from 'react';

const BeersList = () => {

  const { beers } = this.state

  return (
      <>
        {
          beers.map(beer => {
            return <p>{beer.name}</p>
          })
        }
        
      </>
  )
}


export default BeersList;

