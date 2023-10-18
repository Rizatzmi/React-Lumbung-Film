import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";

const Hero = ({ item }) => {
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
        {item.map((movie, i) => (
          <div key={i}>
            <div
              className="slider-item h-[70vh] md:h-screen w-full bg-cover bg-top relative"
              style={{
                backgroundImage: `url(${process.env.REACT_APP_IMGURL}/${movie.backdrop_path})`,
              }}
            >
              <div className="w-full h-full top-0 left-0 bg-black/50"></div>
              <div className="flex flex-col my-auto justify-center gap-3 text-white p-5 md:p-0 absolute top-1/2 -translate-y-1/2 md:left-32 md:w-2/5">
                <h1
                  className={`font-semibold ${
                    movie.title.length > 30
                      ? "text-xl md:text-4xl"
                      : "text-2xl md:text-6xl"
                  } `}
                >
                  {movie.title}
                </h1>
                <p className="font-normal line-clamp-3 md:text-lg">
                  {movie.overview}
                </p>
                <Link className="w-32 md:w-52" to={`/movie/${movie.id}`}>
                  <button className="bg-primary px-3 py-2 md:py-3 md:px-6 rounded-sm md:rounded-md mt-2 md:mt-5 text-xs md:text-base font-semibold flex items-center gap-2 hover:bg-red-700">
                    <FaPlay />
                    WATCH NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
