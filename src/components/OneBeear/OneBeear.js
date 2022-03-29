import React from 'react'
import '../BeersList/BeersList.css'


function OneBeear(props) {
  console.log(props)
  const {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = props.data

  return (
    <>
        <h3>Una birra</h3>
        <div 
          className="bears-block-info d-flex justify-content-center align-items-center mt-3 mb-5"
        >
          <img className='beears-img' src={image_url} alt="name"></img>
          <div className='beears-info'>
            <p className='title'>{name}</p>
            <p>{tagline}</p>
            <p>{contributed_by}</p>
            <p>{first_brewed}</p>
            <p>{attenuation_level}</p>
            <p>{description}</p>
          </div>
        </div>
    </>
  )
}

export default OneBeear