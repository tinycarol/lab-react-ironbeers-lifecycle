import http from "./BaseService";

export const beerList = () => http.get("/beers")
// export const todoList = () => http.get("/todos")

