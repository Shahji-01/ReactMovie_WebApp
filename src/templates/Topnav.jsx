import axios from "../Utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import no_image from "/no_image.jpg";

const Topnav = () => {
  let [query, setQuery] = useState("");
  let [searches, setSearches] = useState([]);
  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/movie?query=${query}`);
      // console.log(data);
      setSearches(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);
  return (
    <div className="w-[90%] h-[5vh] mx-auto relative flex ps-[20%] items-center mt-1 py-[3%]">
      <i className="ri-search-line text-zinc-400 text-3xl"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="search anything..."
        className="w-[70%] rounded-lg px-7 bg-transparent outline-none border-none text-zinc-200"
      />
      {query.length > 0 ? (
        <i
          onClick={() => setQuery("")}
          className="ri-close-line text-zinc-400 text-3xl"
        ></i>
      ) : (
        ""
      )}

      <div className="z-10 absolute w-[50%] max-h-[50vh] mx-10 bg-zinc-300 top-[100%] rounded-md overflow-auto">
        {searches.map((s, i) => (
          
          <Link
          to={`/${s.media_type || "movie"}/details/${s.id}`}
            key={i}
            className="w-[100%] p-7 flex items-center hover:bg-zinc-400 hover:font-semibold justify-start border-b-2 border-zinc-100"
          >
            <img
            className="w-24 h-24 mr-5 object-cover"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : no_image
              }
              alt="imageNotfound"
            />
            <span>
              {s.Name || s.title || s.original_title || s.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
