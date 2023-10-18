import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import { getTopRated } from "../data/Api";
import Footer from "../components/Footer";

const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    getTopRated().then((result) => {
      setTopRatedMovies(result);
    });
    window.scrollTo(0, 0);
  }, []);

  document.title = "Top Rated Movie - Lumbung Film";

  return topRatedMovies ? (
    <>
      <Navbar />
      <div className="px-4 sm:px-8 md:px-20 lg:px-32 2xl:px-64 py-2">
        <h1 className="text-3xl text-white font-semibold mt-20 mb-4">
          Top Rated Movies
        </h1>
        <Grid data={topRatedMovies} />
      </div>
      <Footer />
    </>
  ) : (
    <>
      <Navbar />
      <div className="px-4 sm:px-8 md:px-20 lg:px-32 2xl:px-64 py-2">
        <div className="h-10 w-56 bg-neutral-700 rounded-md mt-20 mb-4"></div>
        <div className="py-2 flex md:block">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-white w-44 h-80 bg-neutral-700 rounded-md"></div>
            <div className="text-white w-44 h-80 bg-neutral-700 rounded-md"></div>
            <div className="text-white w-44 h-80 bg-neutral-700 rounded-md"></div>
            <div className="text-white w-44 h-80 bg-neutral-700 rounded-md"></div>
            <div className="text-white w-44 h-80 bg-neutral-700 rounded-md"></div>
            <div className="text-white w-44 h-80 bg-neutral-700 rounded-md"></div>
            <div className="text-white w-44 h-80 bg-neutral-700 rounded-md"></div>
            <div className="text-white w-44 h-80 bg-neutral-700 rounded-md"></div>
            <div className="text-white w-44 h-80 bg-neutral-700 rounded-md"></div>
            <div className="text-white w-44 h-80 bg-neutral-700 rounded-md"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TopRated;
