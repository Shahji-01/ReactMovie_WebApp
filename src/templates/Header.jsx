import React from "react";
import { Link } from "react-router-dom";
const Header = ({ data }) => {
  // console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[60vh] flex flex-col justify-end"
    >
      <div className="w-[90%] h-[60%]  text-white m-20 mb-10">
        <h1 className=" font-black text-4xl ">
          {data.Name || data.title || data.original_title || data.original_name}
        </h1>
        <p className="text-lg mt-4 ms-2">
          {data.overview.slice(0, 300)} ...
          <Link
            to={`/${data.media_type}/details/${data.id}`}
            className="text-blue-500"
          >
            more
          </Link>
        </p>
        <p className="text-lg my-4 mb-10 ms-2">
          <i className="ri-megaphone-line text-yellow-400">
            &nbsp;&nbsp;&nbsp;
          </i>
          {data.release_date ? data.release_date : "no information"}
          <i className="ri-film-line ms-10 text-yellow-400">
            &nbsp;&nbsp;&nbsp;
          </i>
          {data.media_type}
        </p>
        <Link
          to={`/${data.media_type}/details/${data.id}/trailer`}
          className="bg-[#6556CD] mx-3 p-2 rounded-md "
        >
          Watch Trailer
        </Link>
      </div>
    </div>
  );
};

export default Header;
