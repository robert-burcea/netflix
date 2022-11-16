import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#141414] flex items-center justify-between p-4 z-[100] w-full absolute">
      <img
        className="cursor-pointer h-10"
        src={
          "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        }
        alt="NETFLIX"
      />
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
