import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import List from "../components/List";
import { getLatests } from "../data/Api";

const Latest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Latest - Lumbung Film";
  });

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-8 md:px-20 lg:px-32 2xl:px-64 py-2">
        <h1 className="text-3xl text-teal-50 font-semibold mt-8">Latest</h1>
        <List dataFetcher={getLatests} />
      </div>
    </>
  );
};

export default Latest;
