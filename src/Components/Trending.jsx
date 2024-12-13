import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../templates/Topnav";
import Dropdown from "../templates/Dropdown";
import axios from "../Utils/axios";
import Card from "../templates/Card";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  document.title="Shahji || Trending";
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page} `);
      // setTrending(data.results);
      if(data.results.length >0){
        setTrending((prev) => [...prev, ...data.results]);
        setPage(page+1); 
      }else{
        setHasmore(false); 
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshhandler = () => {
    if(trending.length === 0){
        getTrending();
    }else{
          setPage(1);
          setTrending([]);
          getTrending(); 
    }
  }
  useEffect(() => {
    refreshhandler();
  }, [category, duration]);

  // console.log(trending);

  return trending.length > 0 ? (
    <div className="w-full px-[3%] h-screen ">
      <div className="w-full  flex items-center justify-between ">
        <h1 className="text-zinc-400 text-semibold text-2xl">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-circle-line hover:text-[#6556CD]"
          ></i>
          &nbsp;&nbsp; Trending <small>({category})</small>
        </h1>
        <div className="flex items-center w-[80%] gap-10">
          <Topnav />
          <Dropdown
            title="Category"
            option={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <Dropdown
            title="Duration"
            option={["day", "week"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        loader={<Loader />}
        next={getTrending}
        hasMore={hasmore}
      >
        <Card data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
