import React, { useState,useEffect} from "react";
import axios from "../Utils/axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Topnav from "../templates/Topnav";
import Dropdown from "../templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../templates/Card";

const TvShow = () => {
    document.title="Shahji || TvShow ";
  const navigate = useNavigate();

  const [category, setCategory] = useState("airing_today");
  const [tvShow, setTvShow] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);

  const getTvShow = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      // settvShow(data.results);
      if(data.results.length >0){
        setTvShow((prev) => [...prev, ...data.results]);
        setPage(page+1); 
      }else{
        setHasmore(false); 
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshhandler = () => {
    if(tvShow.length === 0){
        getTvShow();
    }else{
          setPage(1);
          setTvShow([]);
          getTvShow(); 
    }
  }
  useEffect(() => {
    refreshhandler();
  },[category]);

  // console.log(tvShow);
  return tvShow.length > 0 ? (
    <div className="w-full px-[3%] h-screen">
      <div className="w-full  flex items-center justify-between ">
        <h1 className="text-zinc-400 text-semibold text-2xl">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-circle-line hover:text-[#6556CD]"
          ></i>
          &nbsp;&nbsp; TvShow <small>({category})</small>
        </h1>
        <div className="flex items-center w-[80%] gap-10">
          <Topnav />
          <Dropdown
            title="Category"
            option={["on_the_air","popular", "top_rated","airing_today"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={tvShow.length}
        loader={<Loader />}
        next={getTvShow}
        hasMore={hasmore}
      >
        <Card data={tvShow} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default TvShow;
