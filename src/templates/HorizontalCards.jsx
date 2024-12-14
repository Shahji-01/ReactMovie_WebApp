import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import no_image from "../../public/no_image.jpg";
import pagenotfound from "../../public/404.gif";
const HorizontalCards = ({ data, fun }) => {
  return (
    <div className="w-full  flex overflow-hidden overflow-x-auto ms-4 rounded-md">
      {data.map((d, i) =>
        d.media_type ? (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[20%] max-w-[20%] bg-zinc-900 rounded-md  max-h-[51vh] mr-5 mb-7 text-white "
          >
            <img
              className="w-full h-[50%] rounded-md"
              src={
                d.backdrop_path || d.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.backdrop_path || d.profile_path || d.poster_path
                    })`
                  : no_image
              }
              alt="image"
            />
            <h1 className="w-full text-xl font-semibold m-1">
              {d.Name ||
                d.name ||
                d.title ||
                d.original_title ||
                d.original_name}
            </h1>
            <div className="w-full ms-1 my-3 text-md ">
              {d.overview.slice(0, 100)} ...
              <Link className="text-blue-500">more</Link>
            </div>
          </Link>
        ) : (
          pagenotfound
        )
      )}
    </div>
  );
};

export default HorizontalCards;
