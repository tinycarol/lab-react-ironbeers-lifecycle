import axios from "axios";

export const list = () => axios.get('https://ih-beers-api2.herokuapp.com/beers')