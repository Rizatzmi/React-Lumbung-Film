import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_APP_TOKEN}`;
axios.defaults.headers.common["Accept"] = "application/json";

export const getPopular = async (page = "1", time = "day") => {
  const popular = await axios.get(`trending/movie/${time}?page=${page}`);
  return popular.data.results;
};

export const getGenres = async () => {
  const genres = await axios.get("/genre/movie/list");
  return genres;
};

export const getLatests = async () => {
  const dateLast = new Date();
  const dateFirst = new Date(dateLast);
  dateFirst.setDate(dateLast.getDate() - 30);
  const date_lte = dateLast.toLocaleDateString("en-Ca");
  const date_gte = dateFirst.toLocaleDateString("en-Ca");

  const Latest = await axios.get(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&release_date.gte=${date_gte}&release_date.lte=${date_lte}`
  );
  return Latest.data.results;
};

export const getDetail = async (movie_id) => {
  const detail = await axios.get(`movie/${movie_id}`);
  return detail;
};

export const searchMovie = async (keyword) => {
  const search = await axios.get(`/search/movie?page=1&query=${keyword}`);
  return search.data.results;
};
