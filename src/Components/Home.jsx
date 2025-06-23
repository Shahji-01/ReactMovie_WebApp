import Sidenav from "../templates/Sidenav";
import Topnav from "../templates/Topnav";
import Headers from "../templates/Header";
import axios from "../Utils/axios";
import { useState, useEffect } from "react";
import HorizontalCards from "../templates/HorizontalCards";
import Dropdown from "../templates/Dropdown";
import Loader from "./Loader";

function Home() {
  document.title = "React MoiveApp";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");
  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomdata);
    } catch (err) {
      console.log(err);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(wallpaper);
  // console.log(trending);
  useEffect(() => {
    getTrending();
    !wallpaper && getWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[75%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Headers data={wallpaper} />
        <div className="mx-7 my-5 flex justify-between">
          <h1 className="text-3xl text-zinc-400 font-semibold">Treading</h1>
          <Dropdown title="Filter" option={["tv", "movie", "all"]} func={(e)=>setCategory(e.target.value)} />
        </div>
        <HorizontalCards data={trending}/>
      </div>
    </>
  ) : (
    <Loader/>
  );
}

export default Home;
