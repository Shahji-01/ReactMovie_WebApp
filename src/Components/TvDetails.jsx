import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadtv, removetv } from "../store/actions/tvAction";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import HorizontalCards from "../templates/HorizontalCards";

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { info } = useSelector((state) => state.tv);
  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path || data.profile_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[220vh] px-[4%]"
    >
      <nav className="w-full h-[10vh] text-2xl text-zinc-300 gap-10 flex items-center">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-circle-line hover:text-[#6556CD]"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill hover:text-[#6556CD]"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill hover:text-[#6556CD]"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          className="hover:text-[#6556CD]"
        >
          imdb
        </a>
      </nav>

      <div className="w-full flex mx-[1%]">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[60vh] w-[50vh] object-cover rounded-md"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.backdrop_path || info.detail.poster_path
          })`}
        ></img>

        <div className="content ml-[5%] text-5xl font-black text-zinc-100">
          <h1>
            {" "}
            {info.detail.Name ||
              info.detail.title ||
              info.detail.original_title ||
              info.detail.original_name}
            <small className="text-xl font-semibold text-zinc-300">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex text-[2vh] text-white font-[600] items-center gap-3 mt-1">
            <span className="text-xl w-[7vh] h-[7vh] bg-yellow-600 rounded-full font-semibold flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="font-semibold text-[2vh]  w-[3vh] mr-10">
              User Score
            </h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-xl  font-semibold italic mt-4">
            {info.detail.tagline}
          </h1>
          <h1 className="text-2xl font-semibold my-3">Overview</h1>
          <p className="text-[2vh] font-[400] leading-5">
            {info.detail.overview}
          </p>
          <h1 className="text-2xl font-semibold my-3">Language</h1>
          <p className="text-[2vh] font-[400] leading-5">
            {info.translations.join(",")}
          </p>

          <Link
            to={`${pathname}/trailer`}
            className="text-xl bg-[#6556CD] p-2 rounded-md font-normal"
          >
            <i className="ri-play-mini-fill me-2"></i>Play Trailer
          </Link>
        </div>
      </div>

      <div className="w-full mt-10">
        {info.watchProvider && info.watchProvider.flatrate && (
          <div className="flex text-lg text-zinc-300 items-center gap-10">
            <h1>Available on Platform:</h1>
            {info.watchProvider.flatrate.map((w) => (
              <img
                title={w.provider_name}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                className="w-[6vh] h-[6vh] rounded-lg"
              />
            ))}
          </div>
        )}

        {info.watchProvider && info.watchProvider.rent && (
          <div className="flex text-lg text-zinc-300 items-center gap-10 mb-7">
            <h1>Available on rent:</h1>
            {info.watchProvider.rent.map((w) => (
              <img
                title={w.provider_name}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                className="w-[6vh] h-[6vh] rounded-lg"
              />
            ))}
          </div>
        )}

        {info.watchProvider && info.watchProvider.buy && (
          <div className="flex text-lg text-zinc-300 items-center gap-10">
            <h1>Available on buy:</h1>
            {info.watchProvider.buy.map((w) => (
              <img
                title={w.provider_name}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                className="w-[6vh] h-[6vh] rounded-lg"
              />
            ))}
          </div>
        )}
      </div>

      <hr className="my-10 border-none h-[2px] bg-zinc-500"></hr>
      <h1 className="text-3xl my-7 text-white font-bold">Seasons</h1>
      <div className="w-[100%] flex overflow-y-hidden p-5 gap-10">
        {info.detail.seasons.length>0 ? info.detail.seasons.map((s, i) => (
          <div className="w-[15%]" key={i}>
            <img 
              className="h-[40vh] min-w-[14vw] object-cover rounded-md"
              src={`https://image.tmdb.org/t/p/original/${
                s.backdrop_path || s.poster_path
              })`}
            ></img>

            <h1 className="text-zinc-300 text-xl mt-[1vh]">
              {s.name}
            </h1>
          </div>
        )):<h1 className="text-3xl mt-5 text-white font-black text-center">Nothing to Show</h1>}
      </div>

      <hr className="my-10 border-none h-[2px] bg-zinc-500"></hr>
      <h1 className="text-3xl my-7 text-white font-bold">
        Recommendations and Similar Stuff
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};

export default TvDetails;
