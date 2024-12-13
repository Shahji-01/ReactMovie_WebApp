import React, { useState,useEffect} from "react";
import axios from "../Utils/axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Topnav from "../templates/Topnav";
import Dropdown from "../templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../templates/Card";
const Popular = () => {
    document.title="Shahji || Popular ";
  const navigate = useNavigate();

  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`/${category}/popular?page=${page}`);
      // setPopular(data.results);
      if(data.results.length >0){
        setPopular((prev) => [...prev, ...data.results]);
        setPage(page+1); 
      }else{
        setHasmore(false); 
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshhandler = () => {
    if(popular.length === 0){
        getPopular();
    }else{
          setPage(1);
          setPopular([]);
          getPopular(); 
    }
  }
  useEffect(() => {
    refreshhandler();
  },[category]);

  // console.log(popular);
  return popular.length > 0 ? (
    <div className="w-full px-[3%] h-screen">
      <div className="w-full  flex items-center justify-between ">
        <h1 className="text-zinc-400 text-semibold text-2xl">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-circle-line hover:text-[#6556CD]"
          ></i>
          &nbsp;&nbsp; Popular <small>({category})</small>
        </h1>
        <div className="flex items-center w-[80%] gap-10">
          <Topnav />
          <Dropdown
            title="Category"
            option={["tv", "movie"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        loader={<Loader />}
        next={getPopular}
        hasMore={hasmore}
      >
        <Card data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Popular;
