import React from "react";
import loader from "/loader.gif";

const Loader = () => {
  return <div className="w-full h-[120vh] bg-black flex justify-center items-center">
    <img className="h-[70%]" src={`${loader}`} alt="loader.gif" />
  </div>;
};

export default Loader;
