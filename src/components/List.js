import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = ({ dataFetcher }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    dataFetcher().then((result) => {
      setMovies(result);
    });
  }, [dataFetcher]);

  return (
    <div className="container mx-auto py-2 md:py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {movies.map((movie, i) => (
          <Link key={i} to={`/movie/${movie.id}`}>
            <div className="bg-slate-800 shadow-[inset_0_1px_0_0_#ffffff0d] drop-shadow-md rounded-md p-4 text-white">
              <img
                src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-96 md:h-5/6 rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-1">{movie.title}</h2>
                <p className="text-slate-500">{movie.release_date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
