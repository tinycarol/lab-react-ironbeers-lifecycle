import React from "react";
import './Beer.css'

function Beer({ name, tagline, image_url }) {

    return (
        <div className="container">
            <div className="beer-image">
                <img src={image_url} alt={name} height={200}/>
            </div>
            <div className="beer-description">
                <h2>{name}</h2>
                <p className="tagname">{tagline}</p>
                <p><b>Created by:</b> {name}</p>    
            </div>
        </div>
    )

}
export default Beer;
