import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadpeople, removepeople } from "../store/actions/peopleAction";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import HorizontalCards from "../templates/HorizontalCards";
import Dropdown from "../templates/Dropdown";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const [category, setCategory] = useState("movie");
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { info } = useSelector((state) => state.person);
  // console.log(info);
  useEffect(() => {
    dispatch(asyncloadpeople(id));
    return () => {
      dispatch(removepeople());
    };
  }, [id]);
  return info ? (
    <div className="w-screen h-screen flex">
      <div className="w-[60vh] h-[200vh] text-zinc-400">
        <nav className="w-full mx-7 my-2 h-[10vh] text-2xl text-zinc-300 gap-10 flex items-center">
          <Link
            onClick={() => navigate(-1)}
            className="ri-arrow-left-circle-line hover:text-[#6556CD]"
          ></Link>
        </nav>
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] mx-20  h-[60vh] w-[40vh] object-cover rounded-md"
          src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path})`}
        ></img>
        <hr className="m-10"></hr>
        <div className="mx-20 flex gap-10">
          <a
            target="_blank"
            className=" text-3xl"
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          >
            <i className="ri-earth-line hover:text-[#6556CD]"></i>
          </a>
          <a
            target="_blank"
            className="mx-2 text-3xl"
            href={`https://www.facebook.com/${info.externalid.facebook_id}/`}
          >
            <i className="ri-facebook-circle-fill hover:text-[#6556CD]"></i>
          </a>
          <a
            target="_blank"
            href={`https://www.instagram.com/${info.externalid.instagram_id}/`}
            className=" text-3xl hover:text-[#6556CD]"
          >
            <i className="ri-instagram-fill"></i>
          </a>
          <a
            target="_blank"
            href={`https://x.com/${info.externalid.twitter_id}?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor`}
            className=" text-3xl hover:text-[#6556CD]"
          >
            <i className="ri-twitter-x-fill"></i>
          </a>
        </div>
        <div className="mx-20 font-semibold">
          <h1 className="text-3xl my-5">Personal Info</h1>
          <h1 className="text-2xl mt-5">Known For</h1>
          <h1 className="text-lg">{info.detail.known_for_department}</h1>
          <h1 className="text-2xl mt-5">Gender</h1>
          <h1 className="text-lg">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>
          <h1 className="text-2xl mt-5">Birthday</h1>
          <h1 className="text-lg">{info.detail.birthday}</h1>
          <h1 className="text-2xl mt-5">Deathdate</h1>
          {info.detail.deathday ? (
            <h1 className="text-lg">{info.detail.deathday}</h1>
          ) : (
            <h1 className="text-lg">Still Alive</h1>
          )}
          <h1 className="text-2xl mt-5">Place Of Birth</h1>
          <h1 className="text-lg ">{info.detail.place_of_birth}</h1>
          <h1 className="text-2xl mt-5">Also Known As</h1>
          <h1>{info.detail.also_known_as.join(",")}</h1>
        </div>
      </div>
      <div className="w-[70%] h-[200vh] my-[6%] font-semibold text-zinc-400">
        <h1 className="text-6xl">{info.detail.name}</h1>
        <h1 className="text-2xl my-3">Biography</h1>
        <h1 className="text-xl">{info.detail.biography.slice(0, 900)} .</h1>
        <h1 className="text-2xl my-10">Known For</h1>
        <HorizontalCards data={info.combinedCredits.cast} />
        <div className=" w-full p-2 text-zinc-400 my-10 flex justify-between">
      
            <h1 className="text-3xl">Acting</h1>
         
          <Dropdown
            title={"Category"}
            option={["tv", "movie"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="list-disc w-full overflow-x-hidden overflow-y-auto max-h-[50vh] mt-5 rounded-md text-zinc-400 shadow-lg  shadow-[rgba(255,255,255,.7)] border-2 border-zinc-700 p-7]">
          {info[category + "Credits"].cast.map((c, i) => (
            <li key={i} className="hover:text-white duration:200 cursor-pointer p-5">
              <Link to={`/${category}/details/${c.id}`}>
                <span>
                  {" "}
                  {c.Name || c.title || c.original_title || c.original_name}
                </span>
                {c.character &&<span className="block mx-5">Character Name : {c.character}</span> }
                
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default PersonDetails;
