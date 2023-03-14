import "./ListBeer.css"
import React, { Component } from 'react';
import { list } from "../../services/BeersService";
import Beer from "../Beer/Beer";





class ListBeer extends Component {

    state = {
        beers: [],
        loading: true,
        
    }

    componentDidMount() {
        list()
        
        .then((beers)=>{
            this.setState({
                beers: beers.data,
                loading: false,
             
            })
        })

        .catch((err)=>{console.error(err)})
    }





    
    render() {
        return (
            <div>
               <div>
                {this.state.loading ? 
                ( <div>Loading...</div>) 
                : (
                    <div className="row row-cols-1 row-cols-md-3 g-3"> 
                       {this.state.beers.map((beer)=> {
                        return <div key={beer._id} className="col mb-3"> 
                        <Beer {...beer}
                         />
                        </div>
                       })}
                    </div>
                )}
               </div> 
               <div>
               
               </div>
            </div>
        );
    }
}

export default ListBeer;