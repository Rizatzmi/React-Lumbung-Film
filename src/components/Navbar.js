import React, { useEffect, useState } from "react";
import { FaMagnifyingGlass, FaXmark, FaBars } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isSearch, setSearch] = useState(false);
  const [isScroll, setScroll] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY === 0 ? setScroll(false) : setScroll(true);
    });
  });

  const toggleSearch = () => {
    setSearch(!isSearch);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/movie/search/${searchQuery}`);
    }
  };

  // (isSearch === false)
  const renderNormalNav = () => (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-4 items-center">
        <NavLink
          className="text-base sm:text-lg lg:text-base 2xl:text-lg leading-6 font-semibold"
          to="/"
        >
          <img src="/Assets/Logo.png" alt="" className="w-44" />
        </NavLink>
      </div>
      <div className="flex items-center gap-4">
        <NavLink
          className="text-base hidden sm:block sm:text-lg lg:text-base 2xl:text-lg leading-6 font-semibold text-slate-200 hover:text-primary"
          to="/movie"
        >
          Popular
        </NavLink>
        <NavLink
          className="text-base hidden sm:block sm:text-lg lg:text-base 2xl:text-lg leading-6 font-semibold text-slate-200 hover:text-primary"
          to="/movie/now-playing"
        >
          Now Playing
        </NavLink>
        <NavLink
          className="text-base hidden sm:block sm:text-lg lg:text-base 2xl:text-lg leading-6 font-semibold text-slate-200 hover:text-primary"
          to="/movie/upcoming"
        >
          Upcoming
        </NavLink>
        <NavLink
          className="text-base hidden sm:block sm:text-lg lg:text-base 2xl:text-lg leading-6 font-semibold text-slate-200 hover:text-primary"
          to="/movie/top-rated"
        >
          Top Rated
        </NavLink>
        <FaMagnifyingGlass
          className="text-slate-200 cursor-pointer"
          onClick={toggleSearch}
        />
        <FaBars
          className="text-slate-200 cursor-pointer sm:hidden"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );

  // (isSearch === true)
  const renderSearchBar = () => (
    <div className="flex items-center w-full">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
        className="px-2 py-2 w-full bg-slate-400/10 rounded-full focus:outline-none text-white"
      />
      <FaXmark
        className="text-slate-200 ml-2 cursor-pointer"
        onClick={toggleSearch}
      />
    </div>
  );

  return (
    <nav
      className={`sticky top-0 px-4 sm:px-8 md:px-20 lg:px-32 2xl:px-64 py-2 h-16 z-40 flex justify-between items-center -mb-16 ${
        isScroll
          ? "backdrop-blur border-b border-slate-50/[0.06] bg-neutral-800/75 "
          : "bg-transparent"
      } ${isSearch ? "flex-col items-center" : "flex"}`}
    >
      {isSearch ? renderSearchBar() : renderNormalNav()}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-primary p-4 flex flex-col items-center justify-center">
          <div className="absolute top-0 right-0 m-4">
            <FaXmark
              className="text-slate-200 cursor-pointer text-2xl"
              onClick={toggleMenu}
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <NavLink
              className="block text-white text-2xl font-semibold"
              to="/movie"
              onClick={toggleMenu}
            >
              Popular
            </NavLink>
            <NavLink
              className="block text-white text-2xl font-semibold"
              to="/latest"
              onClick={toggleMenu}
            >
              Now Playing
            </NavLink>
            <NavLink
              className="block text-white text-2xl font-semibold"
              to="/latest"
              onClick={toggleMenu}
            >
              Upcoming
            </NavLink>
            <NavLink
              className="block text-white text-2xl font-semibold"
              to="/latest"
              onClick={toggleMenu}
            >
              Top Rated
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
