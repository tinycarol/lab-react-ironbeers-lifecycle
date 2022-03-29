import http from "./BaseBeerServices";

export const beerList = () => http.get("/beers")