import http from "./BaseService";

export const getAllbeers = () => http.get('/beers')

export const getOneBeer = (id) => http.get(`/beers/${id}`)

export const getRamdonBeer = () => http.get(`/beers/random`)
