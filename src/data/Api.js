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

export const getTopRated = async (page = "1") => {
  const topRated = await axios.get(`/movie/top_rated?page=${page}`);
  return topRated.data.results;
};

export const getUpcoming = async (page = "1") => {
  const upcoming = await axios.get(`/movie/upcoming?page=${page}`);
  return upcoming.data.results;
};

export const getPlaying = async (page = "1") => {
  const playing = await axios.get(`/movie/now_playing?page=${page}`);
  return playing.data.results;
};

export const getGenres = async () => {
  const genres = await axios.get("/genre/movie/list");
  return genres.data.genres;
};

export const getDetail = async (movie_id) => {
  const detail = await axios.get(`movie/${movie_id}`);
  return detail.data;
};

export const getCredit = async (movie_id) => {
  const credit = await axios.get(`movie/${movie_id}/credits`);
  return credit;
};

export const getImage = async (movie_id) => {
  const images = await axios.get(`movie/${movie_id}/images`);
  return images.data;
};

export const getRecommendation = async (movie_id) => {
  const recommendations = await axios.get(`movie/${movie_id}/recommendations`);
  return recommendations.data.results;
};

export const getVideo = async (movie_id) => {
  const videos = await axios.get(`movie/${movie_id}/videos`);
  return videos.data.results;
};

export const getKeyword = async (movie_id) => {
  const keywords = await axios.get(`movie/${movie_id}/keywords`);
  return keywords.data.keywords;
};

export const getSearch = async (keyword) => {
  const search = await axios.get(`/search/movie?page=1&query=${keyword}`);
  return search.data.results;
};
