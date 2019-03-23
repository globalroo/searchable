import { getKey } from "./tmdb-key";

export const BASE_URL = "https://api.themoviedb.org/3";
export const BASE_IMG_PATH = "http://image.tmdb.org/t/p";

const API_KEY = getKey();

// Obtain image sizes here
// https://api.themoviedb.org/3/configuration?api_key=

export const API = {
	COMBINED_CREDITS: "/combined_credits",
	CREDITS: "/credits",
	DAY: "/day",
	DISCOVER_MOVIE: "/discover/movie",
	GENRES: "/genre/movie/list",
	MOVIE: "/movie",
	PERSON: "/person",
	POPULAR_MOVIES: "/movie/popular",
	RECOMMENDATIONS: "/recommendations",
	SEARCH_MOVIES: "/search/movie",
	SEARCH_MULTI: "/search/multi",
	SMALL_IMG_WIDTH: "/w300",
	LARGE_IMG_WIDTH: "/w1280",
	TRENDING: "/trending",
	TV: "/tv",
	WEEK: "/week"
};

export const getAuthorisedEndpoint = endpoint => `${BASE_URL}${endpoint}?api_key=${API_KEY}`;

export const getSmallPosterImage = imagePath =>
	`${BASE_IMG_PATH}${API.SMALL_IMG_WIDTH}/${imagePath}`;

export const getLargeImage = imagePath => `${BASE_IMG_PATH}${API.LARGE_IMG_WIDTH}/${imagePath}`;

export const getMovieByIdEndpoint = id =>
	getAuthorisedEndpoint(`${API.MOVIE}/${id}`) + "&append_to_response=recommendations,credits";

export const getMovieCastByIdEndpoint = id =>
	getAuthorisedEndpoint(`${API.MOVIE}/${id}${API.CREDITS}`);

export const getPopularMovieEndpoint = () => getAuthorisedEndpoint(API.POPULAR_MOVIES);

export const getRecommendedMoviesByIdEndpoint = id =>
	getAuthorisedEndpoint(`${API.MOVIE}/${id}${API.RECOMMENDATIONS}`);

export const getSearchMovieEndpoint = searchTerm =>
	`${getAuthorisedEndpoint(API.SEARCH_MOVIES)}&query=${searchTerm}`;

export const getSearchMultiEndpoint = searchTerm =>
	`${getAuthorisedEndpoint(API.SEARCH_MULTI)}&query=${searchTerm}`;

export const getTrendingMoviesByDay = () =>
	getAuthorisedEndpoint(`${API.TRENDING}${API.MOVIE}${API.DAY}`);

export const getTrendingMoviesByWeek = () =>
	getAuthorisedEndpoint(`${API.TRENDING}${API.MOVIE}${API.WEEK}`);

export const getTrendingPersonByWeekEndpoint = () =>
	getAuthorisedEndpoint(`${API.TRENDING}${API.PERSON}${API.WEEK}`);

export const getTrendingTvByWeekEndpoint = () =>
	getAuthorisedEndpoint(`${API.TRENDING}${API.TV}${API.WEEK}`);

export const getPersonByIdEndpoint = id =>
	getAuthorisedEndpoint(`${API.PERSON}/${id}`) + "&append_to_response=images";

export const getPersonCreditsByIdEndpoint = id =>
	getAuthorisedEndpoint(`${API.PERSON}/${id}${API.COMBINED_CREDITS}`);

export const getTvByIdEndpoint = id =>
	getAuthorisedEndpoint(`${API.TV}/${id}`) + "&append_to_response=recommendations,credits";

export const getMovieGenresEndpoint = () => getAuthorisedEndpoint(`${API.GENRES}`);
export const getDiscoverMovieEndpoint = () => getAuthorisedEndpoint(`${API.DISCOVER_MOVIE}`);
