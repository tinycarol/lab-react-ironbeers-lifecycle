import axios from 'axios';

export const fetchBeers = () => {
    return(
    axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((beers) => beers.data)
    )
}