import React, { useEffect } from 'react'
import MoviesCard from './MoviesCard'
import { apiKey, movie_api } from '../api/moviesApi'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../redux/action/movies'

const Home = () => {
  const dispatch = useDispatch();

  const movieFetching = async ()=>{
    const response = await movie_api.get(`/movie/now_playing?api_key=${apiKey}`)
    // console.log(response.data.results);
    dispatch(fetchMovies(response.data.results))
  }

  useEffect(()=>{
    movieFetching()
  },[])
  return (
    <div>
      <MoviesCard/>
    </div>
  )
}

export default Home
