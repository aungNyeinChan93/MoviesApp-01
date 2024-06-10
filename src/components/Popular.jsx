import React, { useEffect } from "react";
import { apiKey, movie_api } from "../api/moviesApi";
import { useDispatch } from "react-redux";
import { popularMoviesFetch } from "../redux/action/movies";
import PorpularMoviesCard from "./PorpularMoviesCard";
import { useSelector } from "react-redux";



const Popular = () => {
  const dispatch = useDispatch();

  const popularMovies = async () => {
    const res = await movie_api.get(`/movie/popular?api_key=${apiKey}`);
    console.log(res.data.results);
    dispatch(popularMoviesFetch(res.data.results))

  };
  useEffect(() => {
    popularMovies();
  }, []);

  const movies = useSelector((state)=>state.movies.popularMovies);
  // console.log(movies);

  return (
    <div className="container mx-auto ">
      <PorpularMoviesCard movies={movies}/>
    </div>
  );
};

export default Popular;
