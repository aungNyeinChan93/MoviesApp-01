import React from "react";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router";

const MovieDetail = () => {
  const navigate = useNavigate();
  return (
    <div className=" MovieDetail container mx-auto mt-5 bg-red-100 rounded p-2 ">
      <Card
        className="max-w-sm mx-auto"
        imgSrc="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/credit-card/best-credit-cards-to-save-on-movie-tickets-717X404.jpg"
        horizontal
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
      <span
        onClick={() => navigate("/")}
        className=" bg-blue-400 rounded p-1 px-3  "
      >
        Back To Home
      </span>
    </div>
  );
};

export default MovieDetail;
