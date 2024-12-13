import React, { useState, useEffect } from "react";
import axios from "../Utils/axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Topnav from "../templates/Topnav";
import Dropdown from "../templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../templates/Card";
const Movie = () => {
  document.title = "Shahji || Movie ";
  const navigate = useNavigate();

  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);

  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      // setmovie(data.results);
      if (data.results.length > 0) {
        setMovie((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshhandler = () => {
    if (movie.length === 0) {
      getMovie();
    } else {
      setPage(1);
      setMovie([]);
      getMovie();
    }
  };
  useEffect(() => {
    refreshhandler();
  }, [category]);

  // console.log(movie);
  return movie.length > 0 ? (
    <div className="w-full px-[3%] h-screen">
      <div className="w-full  flex items-center justify-between ">
        <h1 className="text-zinc-400 text-semibold text-2xl">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-circle-line hover:text-[#6556CD]"
          ></i>
          &nbsp;&nbsp; Movie <small>({category})</small>
        </h1>
        <div className="flex items-center w-[80%] gap-10">
          <Topnav />
          <Dropdown
            title="Category"
            option={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={movie.length}
        loader={<Loader />}
        next={getMovie}
        hasMore={hasmore}
      >
        <Card data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Movie;
