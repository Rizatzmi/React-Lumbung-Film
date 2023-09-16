import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Popular from "./pages/Popular";
import Latest from "./pages/Latest";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Popular />} />
      <Route path="/latest" element={<Latest />} />
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/movie/search/:query" element={<Search />} />
    </Routes>
  );
}

export default App;
