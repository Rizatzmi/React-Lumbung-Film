import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import Playing from "./pages/Playing";
import Upcoming from "./pages/Upcoming";
import TopRated from "./pages/TopRated";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Popular />} />
      <Route path="/movie/now-playing" element={<Playing />} />
      <Route path="/movie/upcoming" element={<Upcoming />} />
      <Route path="/movie/top-rated" element={<TopRated />} />
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/movie/search/:query" element={<Search />} />
    </Routes>
  );
}

export default App;
