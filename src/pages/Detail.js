import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getCredit,
  getDetail,
  getImage,
  getKeyword,
  getRecommendation,
  getVideo,
} from "../data/Api";
import Navbar from "../components/Navbar";
import { FaPlay } from "react-icons/fa6";
import Footer from "../components/Footer";

const Detail = () => {
  const { id } = useParams();
  const [movieDetail, setDetail] = useState(null);
  const [movieCredit, setCredit] = useState(null);
  const [movieImage, setImage] = useState(null);
  const [movieKeyword, setKeyword] = useState(null);
  const [movieRecommendation, setRecommendation] = useState(null);
  const [movieVideo, setVideo] = useState(null);

  useEffect(() => {
    getDetail(id).then((result) => {
      setDetail(result);
    });
    getCredit(id).then((result) => {
      setCredit(result.data);
    });
    getImage(id).then((result) => {
      setImage(result);
    });
    getKeyword(id).then((result) => {
      setKeyword(result);
    });
    getRecommendation(id).then((result) => {
      setRecommendation(result);
    });
    getVideo(id).then((result) => {
      setVideo(result);
    });
  }, [id]);

  window.scrollTo(0, 0);

  if (!movieDetail) {
    document.title = "Lumbung Film";
  } else {
    document.title = `${movieDetail.title} - Lumbung Film`;
  }

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

  return movieDetail &&
    movieCredit.crew &&
    movieCredit.cast &&
    movieVideo &&
    movieImage &&
    movieKeyword &&
    movieRecommendation ? (
    <>
      <Navbar />

      {/* Header */}
      <div
        className={`h-72 -z-10 relative bg-cover bg-top bg-fixed before:absolute before:left-0 before:-bottom-0.5 before:w-full before:h-full before:pointer-events-none before:bg-gradient-to-t from-background to-transparent`}
        style={{
          backgroundImage: `url(${process.env.REACT_APP_IMGURL}/${movieDetail.backdrop_path})`,
        }}
      >
        <img
          src={`${process.env.REACT_APP_IMGURL}/${movieDetail.poster_path}`}
          alt={movieDetail.title}
          className="h-1/2 object-cover absolute left-5 top-1/2 -translate-y-2/3 rounded-sm md:hidden"
        />
      </div>

      {/* Content */}
      <div className="bg-background md:p-10 lg:px-20 max-lg:max-w-5xl xl:m-auto">
        <div className="flex gap-10 p-5 md:p-0">
          <img
            src={`${process.env.REACT_APP_IMGURL}/${movieDetail.poster_path}`}
            alt={movieDetail.title}
            className="hidden md:block min-w-[300px] h-[450px] rounded-lg"
          />

          <div className="md:flex flex-col flex-nowrap justify-center items-start">
            <div
              className={`flex flex-wrap flex-row justify-center gap-1 text-white text-center ${
                movieDetail.title.length > 30
                  ? "text-base md:text-xl lg:text-3xl"
                  : "text-lg md:text-3xl lg:text-5xl"
              }`}
            >
              <h1 className="font-semibold">{movieDetail.title}</h1>
              <h1 className="font-light">
                ({new Date(movieDetail.release_date).getFullYear()})
              </h1>
            </div>

            <h1 className="text-xs text-white text-center font-light mt-3 lg:text-base">
              {movieDetail.release_date} •{" "}
              {convertToHoursAndMinutes(movieDetail.runtime)}
            </h1>

            <div className="flex flex-row flex-wrap gap-2 justify-center mt-1">
              <p className="text-xs sm:text-sm lg:text-lg text-white">
                {movieDetail.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}, </span>
                ))}
              </p>
            </div>

            <div className="flex flex-row justify-center items-center gap-2 mt-3">
              <div className="flex gap-2 items-center">
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 border-2 rounded-full flex items-center justify-center ${
                    movieDetail.vote_average > 7.5
                      ? "bg-green-900 border-green-500"
                      : movieDetail.vote_average > 5
                      ? "bg-yellow-900 border-yellow-500"
                      : "bg-red-900 border-red-500"
                  }`}
                >
                  <p
                    className={
                      movieDetail.vote_average > 7.5
                        ? "text-green-500 text-xs md:text-lg font-semibold"
                        : movieDetail.vote_average > 5
                        ? "text-yellow-500 text-xs md:text-lg font-semibold"
                        : "text-red-500 text-xs md:text-lg font-semibold"
                    }
                  >
                    {movieDetail.vote_average.toFixed(1)}
                  </p>
                </div>
                <p className="text-sm lg:text-lg text-white">Score</p>
              </div>
              <div className="h-4 border-l-2 border-gray-400 border-solid"></div>
              <a href="#trailer">
                <div className="flex flex-row gap-1 items-center text-white hover:text-primary">
                  <FaPlay />
                  <p className="text-sm">Play Trailer</p>
                </div>
              </a>
            </div>

            <div className="mt-4">
              <p className="text-xs lg:text-base text-gray-400 font-light italic">
                {movieDetail.tagline}
              </p>
              <h1 className="text-lg lg:text-xl text-white font-medium mt-1">
                Overview
              </h1>
              <p className="text-xs lg:text-base text-white mt-1">
                {movieDetail.overview}
              </p>
            </div>

            <div className="flex mt-4 w-full">
              <div className="flex-1">
                <h1 className="text-sm lg:text-base text-white font-medium">
                  {movieCredit.crew.find((member) => member.job === "Director")
                    ?.name || "-"}
                </h1>
                <p className="text-xs lg:text-sm text-white">Director</p>
              </div>
              <div className="flex-1">
                <h1 className="text-sm lg:text-base text-white font-medium">
                  {movieCredit.crew.find((member) => member.job === "Writer")
                    ?.name || "-"}
                </h1>
                <p className="text-xs lg:text-sm text-white">Writer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cast */}
        <div className="block mt-6 md:flex md:flex-row md:gap-5">
          <div className="p-5 md:w-2/3 md:p-0">
            <div className="mt-6">
              <h1 className="text-base text-white font-medium md:text-lg lg:text-xl">
                Top Cast
              </h1>
              <div className="relative left-0 top-0 mt-3">
                <ol className="overflow-y-hidden overflow-x-scroll flex gap-2 whitespace-nowrap pb-3">
                  {movieCredit.cast.slice(0, 9).map((people) => (
                    <div
                      className="min-w-[120px] bg-neutral-800 rounded-lg overflow-hidden inline-block"
                      key={people.id}
                    >
                      <div className="h-32 overflow-hidden">
                        <img
                          src={`${process.env.REACT_APP_IMGURL}/${people.profile_path}`}
                          alt={people.name}
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="px-2 pt-2 pb-6 text-white">
                        <p className="font-medium text-base">{people.name}</p>
                        <p className="font-light text-xs lg:text-sm">
                          {people.character}
                        </p>
                      </div>
                    </div>
                  ))}
                </ol>
              </div>
            </div>

            {/* Video */}
            <div className="mt-6" id="trailer">
              <h1 className="text-base text-white font-medium md:text-lg lg:text-xl">
                Videos
              </h1>
              <div className="relative left-0 top-0  mt-3">
                <div className="flex flex-row gap-2 overflow-y-hidden overflow-x-scroll pb-3">
                  {movieVideo.length > 0 ? (
                    movieVideo.map((video) => (
                      <iframe
                        key={video.id}
                        src={`https://www.youtube.com/embed/${video.key}`}
                        frameborder="0"
                        title={video.name}
                        className="min-w-full h-52 rounded-md md:h-72 lg:h-[30rem]"
                      ></iframe>
                    ))
                  ) : (
                    <h1 className="text-white">No video to play!</h1>
                  )}
                </div>
              </div>
            </div>

            {/* Backdrop */}
            <div className="mt-6">
              <h1 className="text-base text-white font-medium md:text-lg lg:text-xl">
                Backdrops
              </h1>
              <div className="relative left-0 top-0  mt-3">
                <div className="flex flex-row gap-2 overflow-y-hidden overflow-x-scroll pb-3">
                  {movieImage.backdrops.length > 0 ? (
                    movieImage.backdrops.map((backdrop, i) => (
                      <img
                        key={i}
                        src={`${process.env.REACT_APP_IMGURL}/${backdrop.file_path}`}
                        alt={movieDetail.title}
                        className="min-w-full rounded-md object-cover
                         object-center"
                      ></img>
                    ))
                  ) : (
                    <h1 className="text-white">No backdrops to show!</h1>
                  )}
                </div>
              </div>
            </div>

            {/* Poster */}
            <div className="mt-6">
              <h1 className="text-base text-white font-medium md:text-lg lg:text-xl">
                Posters
              </h1>
              <div className="relative left-0 top-0  mt-3">
                <div className="flex flex-row gap-2 overflow-y-hidden overflow-x-scroll pb-3">
                  {movieImage ? (
                    movieImage.posters.map((poster, i) => (
                      <img
                        key={i}
                        src={`${process.env.REACT_APP_IMGURL}/${poster.file_path}`}
                        alt={movieDetail.title}
                        className="h-52 rounded-md object-cover object-center"
                      ></img>
                    ))
                  ) : (
                    <h1 className="text-white">No posters to show!</h1>
                  )}
                </div>
              </div>
            </div>

            {/* Recommendation */}
            <div className="mt-6">
              <h1 className="text-base text-white font-medium md:text-lg lg:text-xl">
                Recommendation
              </h1>
              <div className="relative left-0 top-0 mt-3">
                <div className="flex flex-row gap-2 overflow-y-hidden overflow-x-scroll pb-2">
                  {movieRecommendation.length > 0 ? (
                    movieRecommendation
                      .slice(0, 10)
                      .map((recommendation, i) => (
                        <div key={i} className="min-w-[50%]">
                          <img
                            src={`${process.env.REACT_APP_IMGURL}/${recommendation.backdrop_path}`}
                            alt={recommendation.title}
                            className="h-48 min-w-full rounded-md object-cover object-center"
                          ></img>{" "}
                          <div className="flex flex-row justify-between text-xs text-white lg:text-base">
                            <h1 className="max-w-[70%]">
                              {recommendation.title}
                            </h1>
                            <p>
                              {recommendation.vote_average.toFixed(1) * 10}%
                            </p>
                          </div>
                        </div>
                      ))
                  ) : (
                    <h1 className="text-white">No recommended movies!</h1>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full my-5 border-neutral-800 border-[1px] border-solid md:hidden"></div>

          {/* Details */}
          <div className="p-5 md:mt-10 md:w-1/3">
            <h1 className="text-sm text-white font-medium lg:text-lg">
              Status
            </h1>
            <p className="text-xs text-white font-light lg:text-base">
              {movieDetail.status}
            </p>
            <h1 className="text-sm text-white font-medium mt-3 lg:text-lg">
              Budget
            </h1>
            <p className="text-xs text-white font-light lg:text-base">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(movieDetail.budget)}
            </p>
            <h1 className="text-sm text-white font-medium mt-3 lg:text-lg">
              Revenue
            </h1>
            <p className="text-xs text-white font-light lg:text-base">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(movieDetail.revenue)}
            </p>
            <h1 className="text-sm text-white font-medium mt-3 lg:text-lg">
              Keywords
            </h1>
            <ul className="flex flex-wrap justify-start gap-2 mt-1">
              {movieKeyword.map((keyword, i) => (
                <div
                  className="bg-neutral-800 rounded-md text-white text-xs font-light px-2 py-1 lg:text-base"
                  key={i}
                >
                  <h1>{keyword.name}</h1>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <>
      <Navbar />
      <div className="h-80 bg-neutral-700 animate-pulse"></div>
      <div className="p-5 md:p-10 lg:px-20">
        <div className="md:flex md:flex-row gap-10">
          <div className="hidden md:block h-[450px] w-72 bg-neutral-700 rounded-md animate-pulse"></div>
          <div className="flex flex-col md:justify-center gap-4">
            <div className="hidden md:block h-16 w-96 bg-neutral-700 rounded-md animate-pulse"></div>
            <div className="hidden md:block h-6 w-64 bg-neutral-700 rounded-md animate-pulse"></div>
            <div className="hidden md:block h-6 w-72 bg-neutral-700 rounded-md animate-pulse"></div>
            <div className="h-5 w-1/3 md:h-10 md:w-36 bg-neutral-700 rounded-md animate-pulse"></div>
            <div className="h-36 w-full md:w-96 lg:w-[800px] bg-neutral-700 rounded-md animate-pulse"></div>
            <div className="flex flex-row justify-between w-2/3">
              <div className="h-7 w-12 md:h-12 md:w-36 bg-neutral-700 rounded-md animate-pulse"></div>
              <div className="h-7 w-12 md:h-12 md:w-36 bg-neutral-700 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-6 md:flex md:flex-row gap-5">
          <div className="md:w-2/3">
            <div className="h-5 md:h-8 w-1/3 bg-neutral-700 rounded-md animate-pulse"></div>
            <div className="h-48 md:w-full bg-neutral-700 rounded-md animate-pulse mt-2"></div>
            <div className="h-5 md:h-8 w-1/3 bg-neutral-700 rounded-md animate-pulse mt-3"></div>
            <div className="h-48 md:w-full bg-neutral-700 rounded-md animate-pulse mt-2"></div>
            <div className="h-5 md:h-8 w-1/3 bg-neutral-700 rounded-md animate-pulse mt-3"></div>
            <div className="h-48 md:w-full bg-neutral-700 rounded-md animate-pulse mt-2"></div>
            <div className="h-5 md:h-8 w-1/3 bg-neutral-700 rounded-md animate-pulse mt-3"></div>
            <div className="h-48 md:w-full bg-neutral-700 rounded-md animate-pulse mt-2"></div>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/3 gap-3">
            <div className="h-8 md:h-10 bg-neutral-700 rounded-md animate-pulse mt-4"></div>
            <div className="h-8 md:h-10 bg-neutral-700 rounded-md animate-pulse mt-4"></div>
            <div className="h-8 md:h-10 bg-neutral-700 rounded-md animate-pulse mt-4"></div>
            <div className="h-8 md:h-10 bg-neutral-700 rounded-md animate-pulse mt-4"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
