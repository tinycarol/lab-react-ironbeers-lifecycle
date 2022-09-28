import React, { Component } from "react";
import { fetchBeers } from "../services/users-service";
import './Table.css'


class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            tagline: '',
            description: ''
        }
    }

getBeers = async () => {
    const result = await fetchBeers()
    console.log(result.data)
    this.setState({
        users: result.data
    })

}

componentDidMount(){
    this.getBeers()
}



render (){

    // const {name, image, tagline, description} = this.state

    return (
        <div placeholder= ''>
            <div>
                <h1>IRONBEERS</h1>
            </div>
            <ul>
                {this.state.users?.map(user =>{
                    return (
                        <div key={user._id} className="card mb-3">
                            <img src={user.image_url} className="card-img-top imagesize" alt={user.name}></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
        
    )
}
}   

export default Table