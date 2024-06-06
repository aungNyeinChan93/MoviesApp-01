import React from "react";
import Cards from "./Cards"
import { useSelector } from "react-redux";

const MoviesCard = () => {
  
  const movies = useSelector((state)=>state.movies.fetchingMovies);
  // console.log(movies);
  return (
    <div className="MoviesCard container mx-auto  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-3 ">
     
      {movies.length> 0 ? movies.map(movie=> <Cards key={movie.id} movie={movie}/>):<h1>Nothing to show Movie</h1>}
    </div>
  );
};

export default MoviesCard;
