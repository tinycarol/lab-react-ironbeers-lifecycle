import { Component} from 'react'
import { listBeers} from "../../Services/TodoService";
import BeerItem from './BeerItem';
import casita from '../../images/casita.png'
import "./BeersList.css";



class BeersList extends Component {
    state = {
        beers: [],
        loading: true,
    };


    componentDidMount() {
        listBeers()
          .then((beers) => {
            this.setState({
              beers: beers,
              loading: false,
            })
          })
          .catch((err) => {
            console.log(err);
          });
    }

    

    
  render () {
    const { beers, loading } = this.state

    return (
      <div className= "beersList">
        <nav class="navbar navbar-dark bg-info">
          <img  className="classCasita "src={casita} alt=""/>
        </nav>
        <div>
        {loading 
        ? (
            <div>Loading</div>
          )
          : (
          
              beers.map(beer => (<BeerItem {...beer} key={beer._id} />))
          
          )}
        </div>
          
      </div>
      
    )
          
  }
    


}


export default BeersList;