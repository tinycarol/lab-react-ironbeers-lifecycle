import http from './BaseService';

export const beers = () => http.get('/beers');