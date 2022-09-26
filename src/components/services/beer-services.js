import axios from 'axios';

export const fetchBeer = () =>
  axios
  .get("https://ih-beers-api2.herokuapp.com/beers")
  .then(beers => beers)