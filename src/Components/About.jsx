import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="w-screen h-[130vh] bg-[#0A1526] back flex flex-col items-center">
      <h1>Hi there,</h1>
      <img
        className="w-[60%] my-[1%] mx-[27%] z-10"
        src="../public/Deadpool.png"
        alt=""
      />
      <h2 className="  text-[10vh] text-white font-semibold h-[10%]">
        Let's talk about Chill
      </h2>
      <p className="  text-white mx-[20%] my-5">
        Let's Chill is a community built movie and TV database. Every piece of
        data has been added by our amazing community dating back to 2004. Let's
        Chill strong international focus and breadth of data is largely
        unmatched and something we're incredibly proud of. Put simply, we live
        and breathe community and that's precisely what makes us different.
      </p>
      <Link to="/contact" className="text-white bg-[#6556CD] p-3 rounded-md m-5">
        Contact US
      </Link>
    </div>
  );
};

export default About;
