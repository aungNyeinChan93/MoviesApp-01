import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
  console.log(movie);
  return (
    <div className="Cards-container mx-auto overflow-hidden hover:shadow-2xl hover:p-1 transform ease-in duration-200">
      <Link to={`/movie/detail/${movie.id}`}>
        <Card
          className="max-w-sm relative  "
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        >
          <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="text-xs font-bold block text-start"> {movie.title}</span>
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-sm ">
            {movie.overview.slice(0, 100)}
          </p>
          <span className="hover:bg-green-300 transform hover:scale-75 duration-1000 active:bg-green-400 text-xs text-gray-400 bg-green-200 px-2 py-1 rounded-full absolute top-0 right-0 mt-3 mr-3">
            <span><i className="fa-regular fa-star text-lg me-2 text-red-600"></i></span>
            {Math.round(movie.vote_average)}
          </span>
        </Card>
      </Link>
    </div>
  );
};

export default Cards;
