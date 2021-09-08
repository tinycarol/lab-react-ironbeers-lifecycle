import React from "react"
import "./Beer.css"

export default function Beer ({image_url, name, tagline, contributed_by}) {
    return (
        <div className="Beer">
            <img src={image_url} alt={name} />
            <div className="beerDiv">
                <div className="beerInfo">
                    <h1>{name}</h1>
                    <h2>{tagline}</h2>
                    <p><strong>Created by: </strong>{contributed_by}</p>
                </div>
            </div>
        </div>
    )
}