import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../data/Api";
import Navbar from "../components/Navbar";

const Detail = () => {
  const { id } = useParams();
  const [movieDetail, setDetail] = useState(null);

  useEffect(() => {
    getDetail(id).then((result) => {
      setDetail(result.data);
    });
    window.scrollTo(0, 0);
  }, [id]);

  document.title = `${movieDetail.title} - Lumbung Film`;

  function convertToHoursAndMinutes(minutes) {
    if (minutes < 0) {
      return "Invalid Input";
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
      return `${remainingMinutes}m `;
    } else if (remainingMinutes === 0) {
      return `${hours}h `;
    } else {
      return `${hours}h ${remainingMinutes}m`;
    }
  }

  if (!movieDetail) {
    return (
      <>
        <Navbar />
        <div className="px-4 sm:px-8 md:px-20 lg:px-32 2xl:px-64 py-2 items-center justify-center flex h-screen">
          <div className="text-3xl italic">Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div>
        <img
          src={`${process.env.REACT_APP_IMGURL}/${movieDetail.backdrop_path}`}
          alt={movieDetail.title}
          className="w-full h-[70vh] object-cover"
        />
      </div>
      <div className="px-4 sm:px-8 md:px-20 lg:px-32 2xl:px-64 pt-10 flex items-center gap-10">
        <img
          src={`${process.env.REACT_APP_IMGURL}/${movieDetail.poster_path}`}
          alt={movieDetail.title}
          className="rounded-md w-72 h-auto"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-5xl font-semibold text-white">
              {movieDetail.title}
            </h1>
            <p className="text-sm sm:text-base 2xl:text-lg text-white italic font-light mt-1">
              {movieDetail.tagline}
            </p>
            <p className="text-sm sm:text-base 2xl:text-lg text-white font-semibold mt-6">
              Release
            </p>
            <p className="text-sm sm:text-base 2xl:text-lg text-white">
              {movieDetail.release_date}
            </p>
            <p className="text-sm sm:text-base 2xl:text-lg text-white font-semibold mt-2">
              Genre
            </p>
            <p className="text-sm sm:text-base 2xl:text-lg text-white">
              {movieDetail.genres.map((genre) => (
                <span key={genre.id}>{genre.name}, </span>
              ))}
            </p>
            <p className="text-sm sm:text-base 2xl:text-lg text-white font-semibold mt-2">
              Duration
            </p>
            <p className="text-sm sm:text-base 2xl:text-lg text-white">
              {convertToHoursAndMinutes(movieDetail.runtime)}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div
              className={`w-20 h-20 border-4 rounded-full flex items-center justify-center mt-4  ${
                movieDetail.vote_average > 8.5
                  ? "bg-green-900 border-green-500"
                  : movieDetail.vote_average > 5
                  ? "bg-yellow-900 border-yellow-500"
                  : "bg-red-900 border-red-500"
              }`}
            >
              <p
                className={
                  movieDetail.vote_average > 8.5
                    ? "text-green-500 text-3xl font-semibold"
                    : movieDetail.vote_average > 5
                    ? "text-yellow-500 text-3xl font-semibold"
                    : "text-red-500 text-3xl font-semibold"
                }
              >
                {movieDetail.vote_average.toFixed(1)}
              </p>
            </div>
            <p className="text-base lg:text-xl xl:text-2xl text-white font-semibold mt-2">
              Score
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-20 lg:px-32 2xl:px-64 py-5">
        <div className="flex gap-12">
          <div className="w-2/3">
            <h1 className="text-4xl text-white font-semibold mb-3">Overview</h1>
            <p className="text-white">{movieDetail.overview}</p>
          </div>
          <div>
            <p className="text-sm sm:text-base 2xl:text-lg font-semibold mt-6">
              Status
            </p>
            <p className="text-sm sm:text-base 2xl:text-lg text-white">
              {movieDetail.status}
            </p>
            <p className="text-sm sm:text-base 2xl:text-lg font-semibold mt-6">
              Budget
            </p>
            <p className="text-sm sm:text-base 2xl:text-lg text-white">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(movieDetail.budget)}
            </p>
            <p className="text-sm sm:text-base 2xl:text-lg font-semibold mt-6">
              Revenue
            </p>
            <p className="text-sm sm:text-base 2xl:text-lg text-white">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(movieDetail.revenue)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
