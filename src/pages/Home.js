import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import List from "../components/List";
import { getLatests } from "../data/Api";
import { NavLink } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home - Lumbung Film";
  });

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-8 md:px-20 lg:px-32 2xl:px-64 py-2">
        <Hero />
        <h1 className="text-3xl text-teal-50 font-semibold mt-8">Latest</h1>
        <List dataFetcher={getLatests} />
        <div className="flex items-center justify-center py-6 mb-6">
          <NavLink to={"/latest"}>
            <button
              type="button"
              className="bg-slate-700 text-white text-sm font-semibold px-6 rounded-lg h-12 hover:bg-slate-600"
            >
              Show more...
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
