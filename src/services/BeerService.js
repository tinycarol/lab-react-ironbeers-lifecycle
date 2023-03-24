import http from './BaseService';

export const list = () => http.get('/beers');

export const getBeerById = (id) => {
  return http.get(`/beers/${id}`, {});
};

export const getRandomBeer = () => {
  return http.get('beers/random');
};

export const createBeer = (beer) => {
  const respose = http.post('/beers/new', { ...beer });

  return respose;
};
