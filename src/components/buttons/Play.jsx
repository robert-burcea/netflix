import React from "react";
import { BiPlay } from "react-icons/bi";

const Play = () => {
  return (
    <button className="flex items-center bg-white text-2xl text-black font-bold px-5 rounded hover:bg-gray-300">
      <BiPlay size={50} /> Play
    </button>
  );
};

export default Play;
