import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

const Trailer = () => {
  const navigate = useNavigate();
 const {pathname}= useLocation();
 const category=pathname.includes("movie")? "movie":"tv";
 const ytvideo= useSelector((state)=>state[category].info.videos);

  return(
    <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-[rgba(0,0,0,0.9)]">
       <Link
          onClick={() => navigate(-1)}
          className="absolute ri-close-fill hover:text-[#6556CD] top-[5%] right-[5%] text-white text-3xl"
        ></Link>

    {
       ytvideo ?
       <ReactPlayer controls height={600} width={1300} url={`https://www.youtube.com/watch?v=${ytvideo.key}`}>

       </ReactPlayer>:<NotFound/>
    }
     
    </div>
  )
};

export default Trailer;
