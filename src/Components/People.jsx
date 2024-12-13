import React, { useState,useEffect} from "react";
import axios from "../Utils/axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Topnav from "../templates/Topnav";
import Dropdown from "../templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../templates/Card";

const people = () => {
    document.title="Shahji || Person Shows ";
  const navigate = useNavigate();

  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);

  const getpeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      // setpeople(data.results);
      if(data.results.length >0){
        setPeople((prev) => [...prev, ...data.results]);
        setPage(page+1); 
      }else{
        setHasmore(false); 
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshhandler = () => {
    if(people.length === 0){
        getpeople();
    }else{
          setPage(1);
          setPeople([]);
          getpeople(); 
    }
  }
  useEffect(() => {
    refreshhandler();
  },[category]);

  // console.log(people);
  return people.length > 0 ? (
    <div className="w-full px-[3%] h-screen">
      <div className="w-full  flex items-center justify-between ">
        <h1 className="text-zinc-400 text-semibold text-2xl">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-circle-line hover:text-[#6556CD]"
          ></i>
          &nbsp;&nbsp; People
        </h1>
        <div className="flex items-center w-[80%] gap-10">
          <Topnav />
        </div>
      </div>
      <InfiniteScroll
        dataLength={people.length}
        loader={<Loader />}
        next={getpeople}
        hasMore={hasmore}
      >
        <Card data={people} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default people;
