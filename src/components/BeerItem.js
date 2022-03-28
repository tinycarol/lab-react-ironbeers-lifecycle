import React from 'react'

export default function BeerItem({name,image_url,tagline,first_brewed}) {
  return (
    <div className='wholeItem container'>
        
        <div className='divImage '>
             <img className='imgBeer' src={image_url }alt={name} />
        </div>
        
        <div className='divDescription'>
            <h2>{name}</h2>
            <p className='text-muted'>{tagline}</p>
            <p><strong>First brewed: </strong>{first_brewed}</p>
        </div>
    </div>
  )
}
