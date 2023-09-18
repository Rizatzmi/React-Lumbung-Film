import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getPopular, getGenres } from "../data/Api";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getPopular().then((result) => {
      setPopularMovies(result);
    });
    getGenres().then((result) => {
      setGenres(result.data.genres);
    });
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {popularMovies.map((movie, i) => (
          <Link key={i} to={`/movie/${movie.id}`}>
            <div className="slider-item h-1/2 md:h-[60vh] mt-3  bg-black rounded-sm sm:rounded-lg lg:rounded-2xl 2xl:rounded-2xl relative overflow-hidden flex items-center">
              <img
                src={`${process.env.REACT_APP_IMGURL}/${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center">
                <div className="flex items-end">
                  <img
                    src={`${process.env.REACT_APP_IMGURL}/${movie.poster_path}`}
                    alt={movie.title}
                    className="w-1 md:w-48 lg:w-56 2xl:w-64 h-auto ml-6 rounded-md"
                  />
                  <div className="ml-1 md:ml-3">
                    <h1 className="text-sm sm:text-base lg:text-base 2xl:text-lg text-white">
                      {movie.release_date}
                    </h1>
                    <h1 className="text-xl my-1 sm:text-2xl lg:text-4xl 2xl:text-5xl font-semibold text-white">
                      {movie.title}
                    </h1>
                    <p className="text-sm sm:text-base 2xl:text-lg text-white">
                      {movie.genre_ids
                        .map((genreId) => {
                          const genre = genres.find(
                            (genre) => genre.id === genreId
                          );
                          return genre ? genre.name : "";
                        })
                        .join(", ")}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-2 right-3 md:bottom-6 md:right-8">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500 text-base md:text-2xl" />
                    <span className="text-yellow-500 text-base md:text-2xl font-semibold ml-1">
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
