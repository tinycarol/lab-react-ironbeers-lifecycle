import React from "react"
import "./Beer.css"


export default function Beer({ name, tagline, image_url }) {
    // const { name, tagline, image_url }=this.props
     
        return (
     
            <div className="Beer">
                <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={image_url} class="img-fluid rounded-start" alt="beer bottle"/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{name}</h5>
                                <p class="card-text">{tagline}</p>
                                <p class="card-text"><small class="text-muted">Created by: {name}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
      
    
}   
