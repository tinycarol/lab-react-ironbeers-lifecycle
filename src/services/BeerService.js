import http from "./BaseService";

export const list = () => http.get('/beers')

export const getBeerById = (id) => {
  return http.get(`/beers/${id}`, {
   
  })
}