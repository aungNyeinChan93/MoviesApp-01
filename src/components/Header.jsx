import React, { useState } from "react";
import { Button, Navbar } from "flowbite-react";
import { useDispatch } from "react-redux";
import { apiKey, movie_api } from "../api/moviesApi";
import { fetchMovies } from "../redux/action/movies";

const Header = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();

  const searchFunction = async () => {
    // console.log(searchMovie);
    if (searchMovie !== "") {
      const res = await movie_api.get(
        `/search/movie?query=${searchMovie}&api_key=${apiKey}`
      );
      // console.log(res.data.results);
      dispatch(fetchMovies(res.data.results));
    }else {
      const res = await movie_api.get(`/movie/now_playing?api_key=${apiKey}`);
      dispatch(fetchMovies(res.data.results));
    }
    
  };

  return (
    <div className="Header container mx-auto">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Chan Movies Channel
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <form className="flex">
            <input
              type="text"
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              className="mx-2 opacity-60 hover:opacity-90 "
              placeholder=" search . . . "
            />
            <Button onClick={() => searchFunction()} type="button">
              Search
            </Button>
          </form>
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="/popular">Popular</Navbar.Link>
          <Navbar.Link href="#">Coming soon</Navbar.Link>
          <Navbar.Link href="#">Coming soon</Navbar.Link>
          <Navbar.Link href="*">Error Page</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
