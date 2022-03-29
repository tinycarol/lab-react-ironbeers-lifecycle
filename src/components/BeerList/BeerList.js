import React from 'react';

const BeersList = ({ beers, id}) => {

  return (
      <>
        {
          beers.map(beer => {
            return <p key={id}>{beer.name}</p>
          })
        }
        
      </>
  )
}


export default BeersList;

