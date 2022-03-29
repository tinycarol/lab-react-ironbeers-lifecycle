import http from "./BaseService";

export const allBeers = () => http.get("/beers")
