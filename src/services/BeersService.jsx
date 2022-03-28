import http from "./BaseService";

const list = http.get("/")

export const  beersList = () => http.get("/")

export const beerDetail = (id) => http.get(`beers/${id}`)