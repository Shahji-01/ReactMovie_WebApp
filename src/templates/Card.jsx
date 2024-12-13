import React from "react";
import { Link } from "react-router-dom";
import no_image from "../../public/no_image.jpg"; 

const Card = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full">
      {data.map((d, i) => (
        <Link to={`/${data.media_type || title==="all" ?"movie":title}/details/${d.id}`}
          className="relative shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] w-[15vw] mx-[4%] my-[2%]"
          key={i}
        >
          <img
            className="h-[40vh] w-full object-cover rounded-md"
            src={ d.backdrop_path || d.poster_path || d.profile_path ? `https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path || d.profile_path
            })`: no_image}
          ></img>
          <h1 className="text-zinc-300 text-xl mt-[1vh]">
            {d.Name || d.title || d.original_title || d.original_name}
          </h1>
          {d.vote_average && (
            <div className="absolute bottom-20 right-[-3vh] text-white text-xl w-[7vh] h-[7vh] bg-yellow-600 rounded-full font-semibold flex justify-center items-center">
              {(d.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Card;
