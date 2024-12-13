import React from "react";
import { Link } from "react-router-dom";
const Sidenav = () => {
  return (
    <div className="w-[25%] h-full border-r-2 border-zinc-400 p-5">
      <h1 className=" text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="text-2xl">React MovieApp</span>
      </h1>
      <nav className="text-zinc-400 flex flex-col duration-300 text-xl gap-3">
        <h2 className="text-white font-semibold mt-7">News Feeds</h2>
        <Link
          to="/trending"
          className="text-lg text-zinc-400 hover:bg-[#6556CD]  hover:text-white  rounded-lg mx-3 p-3 duration-500 "
          href="/$"
        >
          <i className="ri-fire-line  mr-2 text-xl text-[#6556CD]"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="text-lg text-zinc-400 hover:bg-[#6556CD]  hover:text-white rounded-lg mx-3 p-3 duration-500 "
          href="/$"
        >
          <i className="ri-bard-line mr-2 text-xl text-[#6556CD] "></i>
          Popular
        </Link>
        <Link
          to="/movie"
          className="text-lg text-zinc-400 hover:bg-[#6556CD]  hover:text-white rounded-lg mx-3 p-3 duration-500 "
          href="/$"
        >
          <i className="ri-movie-2-line mr-2 text-xl text-[#6556CD] "></i>
          Moives
        </Link>
        <Link
          to="/tvShow"
          className="text-lg text-zinc-400 hover:bg-[#6556CD]  hover:text-white rounded-lg mx-3 p-3 duration-500 "
          href="/$"
        >
          <i className="ri-tv-2-line mr-2 text-xl text-[#6556CD] "></i>
          Tv Shows
        </Link>
        <Link
          to="/people"
          className="text-lg text-zinc-400 hover:bg-[#6556CD]  hover:text-white rounded-lg mx-3 p-3 duration-500 "
          href="/$"
        >
          <i className="ri-team-line mr-2 text-xl text-[#6556CD] "></i>
          Peoples
        </Link>
      </nav>

      <hr className="border-none h-[1px] mt-4 bg-zinc-100"></hr>

      <nav className="text-zinc-400 flex flex-col text-xl gap-3">
        <h2 className="text-white font-semibold my-5">Website Info</h2>
        <Link
          to="/about"
          className="text-lg text-zinc-400 hover:bg-[#6556CD]  hover:text-white  rounded-lg mx-3 p-3 duration-500 "
          href="/$"
        >
          <i className="ri-information-line mr-2 text-xl text-[#6556CD] "></i>
          About
        </Link>
        <Link
          to="/contact"
          className="text-lg text-zinc-400 hover:bg-[#6556CD]  hover:text-white rounded-lg mx-3 p-3 duration-500 "
          href="/$"
        >
          <i className="ri-phone-line  mr-2 text-xl text-[#6556CD]"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
