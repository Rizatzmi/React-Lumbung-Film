import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="p-5 md:px-28 bg-neutral-800 block md:flex flex-row justify-between mt-10">
        <NavLink to="/">
          <img src="/Assets/Logo.png" alt="" className="w-44" />
        </NavLink>
        <div className="flex flex-col md:flex-row items-start gap-4 mt-5 md:mt-0">
          <NavLink
            className="text-base lg:text-base font-semibold text-slate-200 hover:text-primary"
            to="/movie"
          >
            Popular
          </NavLink>
          <NavLink
            className="text-base lg:text-base font-semibold text-slate-200 hover:text-primary"
            to="/movie/now-playing"
          >
            Now Playing
          </NavLink>
          <NavLink
            className="text-base lg:text-base font-semibold text-slate-200 hover:text-primary"
            to="/movie/upcoming"
          >
            Upcoming
          </NavLink>
          <NavLink
            className="text-base lg:text-base font-semibold text-slate-200 hover:text-primary"
            to="/movie/top-rated"
          >
            Top Rated
          </NavLink>
        </div>
      </div>
      <div className="w-full bg-primary text-white text-center text-xs py-1">
        <p>{`Copyright © ${new Date().getFullYear()}`}</p>
      </div>
    </>
  );
};

export default Footer;
