import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import List from "../components/List";
import { searchMovie } from "../data/Api";
import { useParams } from "react-router-dom";

const Search = () => {
  const { query } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Movie - Lumbung Film";
  });

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-8 md:px-20 lg:px-32 2xl:px-64 py-2">
        <h1 className="text-3xl text-teal-50 font-semibold mt-8">
          You search "{query}"
        </h1>
        <List dataFetcher={() => searchMovie(query)} />
      </div>
    </>
  );
};

export default Search;
