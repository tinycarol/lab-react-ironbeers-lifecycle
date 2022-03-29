import http from "./BaseBeerServices";

export const getBeers = () => http.get("/beers")