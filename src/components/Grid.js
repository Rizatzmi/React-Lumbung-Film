import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Grid = ({ data }) => {
  return (
    <div className="py-2 flex md:block">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {data.map((movie, i) => (
          <Link key={i} to={`/movie/${movie.id}`}>
            <div className="text-white w-44 border-neutral-800 border-[1px] border-solid rounded-md group">
              <div className="relative">
                <img
                  src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 md:h-72 rounded-md group-hover:brightness-50"
                />
                <div className="absolute bottom-2 right-2">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500 text-xs md:text-lg" />
                    <span className="text-yellow-500 text-xs md:text-lg font-semibold ml-1">
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-1 h-24 py-2 px-3">
                <h2
                  className={`text-base ${
                    movie.title.length > 30 ? "md:text-base" : "md:text-lg"
                  } font-semibold line-clamp-2 group-hover:text-primary`}
                >
                  {movie.title}
                </h2>
                <p className="text-xs md:text-sm text-slate-500">
                  {movie.release_date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Grid;
