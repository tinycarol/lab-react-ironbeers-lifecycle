import "./index.css"
import React from "react"
export const Beer = ({image_url, name, tagline, contributed_by }) => {
  return (
    <div className='beer'>
    <div className="image">
    <img src={image_url} alt={image_url}/>
    </div>
    <div className="content"> 
    <h3>{name}</h3>
    <h5>{tagline}</h5>
    <p><b>Created by:</b> {contributed_by}</p>
    </div>
   

    </div>
  )
}
