import React from "react"
import "./Beer.css"


export default function Beer({ name, tagline, image_url }) {
    // const { name, tagline, image_url }=this.props
     
        return (
     
            <div className="Beer">
                <img src={image_url} alt="beer bottle"/>
                <strong>{name}</strong>
                <p>{tagline}</p>
                <h6>Created by: {name}</h6>

            </div>
        )
      
    
}   
