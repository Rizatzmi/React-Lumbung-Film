import React from "react";
import { Link } from "react-router-dom";

const List = ({ data, type }) => {
  return (
    <div className="mt-8">
      <div className="flex flex-row items-end justify-between text-white">
        <h1 className="font-semibold text-2xl md:text-4xl">
          {type === "now-playing"
            ? "Now Playing"
            : type === "upcoming"
            ? "Upcoming"
            : "Top Rated"}
        </h1>
        <Link to={`movie/${type}`}>
          <button className="border-2 border-solid border-white rounded-full px-2 py-1 text-xs hover:border-primary hover:text-primary">
            View more
          </button>
        </Link>
      </div>
      <div className="relative mt-5">
        <div className="flex flex-row gap-3 overflow-y-hidden overflow-x-scroll pb-2">
          {data.map((movie, i) => (
            <Link key={i} to={`/movie/${movie.id}`}>
              <div className="text-white w-36 md:w-48 group">
                <img
                  src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`}
                  alt={movie.title}
                  className="h-64 md:h-72 rounded-md group-hover:brightness-50"
                />
                <div className="mt-1">
                  <h2 className="text-base md:text-lg font-semibold line-clamp-2 group-hover:text-primary">
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
    </div>
  );
};

export default List;
