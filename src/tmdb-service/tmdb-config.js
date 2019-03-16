import { getKey } from "./tmdb-key";

export const BASE_URL = "https://api.themoviedb.org/3";
export const BASE_IMG_PATH = "http://image.tmdb.org/t/p";

const API_KEY = getKey();

export const API = {
	CREDITS: "/credits",
	DAY: "/day",
	MOVIE: "/movie",
	PERSON: "/person",
	POPULAR_MOVIES: "/movie/popular",
	RECOMMENDATIONS: "/recommendations",
	SEARCH_MOVIES: "/search/movie",
	SMALL_IMG_WIDTH: "/w300",
	TRENDING: "/trending",
	WEEK: "/week"
};

export const getAuthorisedEndpoint = endpoint => `${BASE_URL}${endpoint}?api_key=${API_KEY}`;
export const getSmallPosterImage = imagePath => `${BASE_IMG_PATH}${API.SMALL_IMG_WIDTH}/${imagePath}`;

//MOVIE
export const getMovieByIdEndpoint = id => getAuthorisedEndpoint(`${API.MOVIE}/${id}`);
export const getMovieCastByIdEndpoint = id => getAuthorisedEndpoint(`${API.MOVIE}/${id}${API.CREDITS}`);
export const getPopularMovieEndpoint = () => getAuthorisedEndpoint(API.POPULAR_MOVIES);
export const getRelatedMoviesByIdEndpoint = id => getAuthorisedEndpoint(`${API.MOVIE}/${id}${API.RECOMMENDATIONS}`);
export const getSearchMovieEndpoint = searchTerm => `${getAuthorisedEndpoint(API.SEARCH_MOVIES)}&query=${searchTerm}`;
export const getTrendingMoviesByDay = () => getAuthorisedEndpoint(`${API.TRENDING}${API.MOVIE}${API.DAY}`);
export const getTrendingMoviesByWeek = () => getAuthorisedEndpoint(`${API.TRENDING}${API.MOVIE}${API.WEEK}`);

//PERSON
export const getPersonByIdEndpoint = id => getAuthorisedEndpoint(`${API.PERSON}/${id}`);

// Trending today / week
//"https://api.themoviedb.org/3/trending/all/day?api_key=785929e86aa524cbb4256e03c42c731f"
//"https://api.themoviedb.org/3/trending/all/week?api_key=785929e86aa524cbb4256e03c42c731f"
