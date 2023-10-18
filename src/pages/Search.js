import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getSearch } from "../data/Api";
import { useParams } from "react-router-dom";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

const Search = () => {
  const { query } = useParams();
  const [searchMovie, setSearchMovie] = useState([]);

  useEffect(() => {
    getSearch(query).then((result) => {
      setSearchMovie(result);
    });
    window.scrollTo(0, 0);
  }, [query]);

  document.title = "Movie - Lumbung Film";

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-8 md:px-20 lg:px-32 2xl:px-64 py-2">
        <h1 className="text-xl md:text-3xl text-white font-semibold mt-20 mb-6">
          You search "{query}"
        </h1>
        <Grid data={searchMovie} />
      </div>
      <Footer />
    </>
  );
};

export default Search;
