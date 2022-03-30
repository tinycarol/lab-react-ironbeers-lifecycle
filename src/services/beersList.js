import http from './baseService'

export const beersList = () => http.get('/beers')