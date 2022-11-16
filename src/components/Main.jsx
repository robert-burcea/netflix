import React, { useEffect, useState } from "react";
import axios from "axios";
import Play from "./buttons/Play";
import { BiPlay } from "react-icons/bi";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else return str;
  };

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="w-full h-[750px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[750px] bg-gradient-to-r from-black"></div>
        <div className="absolute top-[30%] p-4 md:p-8">
          <div className="mb-4">
            <p className="text-bold text-3xl md:text-5xl text-white">
              {movie?.title}
            </p>
            <br></br>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {truncateString(movie?.overview, 150)}
            </p>
            <br></br>
          </div>
          <div className="flex my-4">
            <button className="flex items-center bg-white text-2xl text-black font-bold px-5 rounded hover:bg-gray-300">
              <BiPlay size={50} /> Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
        </div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
    </div>
  );
};

export default Main;
