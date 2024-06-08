import React, { useEffect } from "react";
import { Card } from "flowbite-react";
import { useNavigate, useParams } from "react-router";
import { apiKey, movie_api } from "../api/moviesApi";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovies, selectedMovies } from "../redux/action/movies";
import Loader from "./Loader";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const movie = useSelector((state) => state.movies.selectmovie);
  console.log(movie);

  const detailFetch = async () => {
    const res = await movie_api.get(`/movie/${id}?api_key=${apiKey}`);
    // console.log(res);
    dispatch(selectedMovies(res.data));
  };
  useEffect(() => {
    if (id) {
      detailFetch();
    }
    return () => dispatch(removeSelectedMovies(""));
  }, []);

  return (
    <div className=" MovieDetail container mx-auto mt-5 bg-red-100 rounded p-2  ">
      {JSON.stringify(movie) === "" ? (
        <Loader />
      ) : (
        <Card
          className="max-w-sm mx-auto"
          imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          horizontal
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {movie.overview}
          </p>
        </Card>
      )}
      <span
        onClick={() => navigate("/")}
        className=" bg-blue-400 rounded p-1  px-3 cursor-pointer"
      >
        Back To Home
      </span>
    </div>
  );
};

export default MovieDetail;
