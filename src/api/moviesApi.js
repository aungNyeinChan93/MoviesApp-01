import axios from "axios"

export const apiKey = "8fe4eceefa73b8aba054f3e4105b289e"

export const movie_api = axios.create({
    baseURL :"https://api.themoviedb.org/3"
});