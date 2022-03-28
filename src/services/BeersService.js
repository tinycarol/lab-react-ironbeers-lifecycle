import http from "./BaseService";

export const getAllbeers = () => http.get('/beers')
