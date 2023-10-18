import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import List from "../components/List";
import { getPlaying, getPopular, getTopRated, getUpcoming } from "../data/Api";
import Footer from "../components/Footer";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [UpcomingrMovies, setUpcomingMovies] = useState([]);
  const [playingMovies, setPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    getPopular().then((result) => {
      setPopularMovies(result);
    });
    getUpcoming().then((result) => {
      setUpcomingMovies(result);
    });
    getPlaying().then((result) => {
      setPlayingMovies(result);
    });
    getTopRated().then((result) => {
      setTopRatedMovies(result);
    });
    window.scrollTo(0, 0);
  }, []);

  document.title = "Home - Lumbung Film";

  return popularMovies && UpcomingrMovies && playingMovies && topRatedMovies ? (
    <>
      <Navbar />
      <Hero item={popularMovies} />
      <div className="p-5 md:px-32">
        <List data={playingMovies} type={"now-playing"} />
        <List data={UpcomingrMovies} type={"upcoming"} />
        <List data={topRatedMovies} type={"top-rated"} />
      </div>
      <Footer />
    </>
  ) : (
    <>
      <div className="h-screen w-full bg-neutral-700 animate-pulse"></div>
      <div className="p-5 md:px-32">
        <div className="h-5 md:h-10 w-40 bg-neutral-700 rounded-md animate-pulse"></div>
        <div className="h-48 w-full bg-neutral-700 rounded-md animate-pulse mt-2"></div>
        <div className="h-5 md:h-10 w-40 bg-neutral-700 rounded-md animate-pulse mt-5"></div>
        <div className="h-48 w-full bg-neutral-700 rounded-md animate-pulse mt-2"></div>
        <div className="h-5 md:h-10 w-40 bg-neutral-700 rounded-md animate-pulse mt-5"></div>
        <div className="h-48 w-full bg-neutral-700 rounded-md animate-pulse mt-2"></div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
