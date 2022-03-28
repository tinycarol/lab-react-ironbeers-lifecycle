import axios from "axios";

const http = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
    withCredentials: false
})


//Convierte la respuesta en response.data antes de entrar a cualquier try o catch
http.interceptors.response.use( 
    response => response.data, 
    error => {
       return Promise.reject(error)
    } 
)

export  default http