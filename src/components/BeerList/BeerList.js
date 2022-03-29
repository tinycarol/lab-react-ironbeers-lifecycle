import React from 'react';
import Beer from '../Beer/Beer';
const BeersList = ({ beers }) => {
  // const [loading, setLoading] = useState(true)


  return (
      <>
        
          {
          beers.map(({id, name, tagline, image_url} )=> {
            return (
              <Beer 
                key={id} 
                name={name} 
                tagline={tagline}
                image={image_url} /> 
              )
          })
        } :
        <h2>Loading...</h2>
        
      </>
  )
}


export default BeersList;

