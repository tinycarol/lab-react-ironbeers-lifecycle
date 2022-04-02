import http from './BaseServices';

export const beersList = () => http.get("/beers")