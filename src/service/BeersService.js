import http from "./BaseService";

export const getBeers = () => http.get('/beers');