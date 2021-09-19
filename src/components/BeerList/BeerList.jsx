import React from "react"
import Beer from "../Beer/Beer"
import axios from "axios"

export default class BeerList extends React.Component {
    state = {
        beers: undefined
    }
    getBeer() {
        //HACEMOS LA PETICION A LA API
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((res) => {
                //En axios el body de la peticion esta en el campo data
                //Hacemos console.log para sacar el boy por la console del navegador
                console.log(res.data)
                this.setState({ beers: res.data })
            })
            .catch(() => {
                console.log("Error")
            })
    }

    componentDidMount() {
        this.getBeer();
    }
    render(){
    //Si el state sigue siendo null será falsy, por lo tanto no será truthy y mostrará el Loading..
        if (!this.state.beers) {
            return "Loading..."
        }
        return (
            <div className="BeerList">
                
                {
                    this.state.beers.map(beer =>
                        (<Beer {...beer} key={beer._id} />)
                    )}
               
            </div>
        )
    }

  
}
   
    