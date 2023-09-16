import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import List from "../components/List";
import { getPopular } from "../data/Api";

const Popular = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Movie - Lumbung Film";
  }, []);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleNextPage = () => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-8 md:px-20 lg:px-32 2xl:px-64 py-2">
        <h1 className="text-3xl text-teal-50 font-semibold mt-8">Popular</h1>
        <List dataFetcher={() => getPopular(currentPage)} />
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePrevPage}
            className="bg-slate-700 text-white text-sm font-semibold px-4 py-2 rounded-lg h-12 hover:bg-slate-600  mr-2 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="bg-slate-700 text-white text-sm font-semibold px-4 py-2 rounded-lg h-12 hover:bg-slate-600 disabled:opacity-50"
            disabled={currentPage === 10}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Popular;
