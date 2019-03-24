import {
	getDiscoverMovieEndpoint,
	getMovieByIdEndpoint,
	getMovieCastByIdEndpoint,
	getMovieGenresEndpoint,
	getPersonByIdEndpoint,
	getPersonCreditsByIdEndpoint,
	getPopularMovieEndpoint,
	getRecommendedMoviesByIdEndpoint,
	getSearchMovieEndpoint,
	getSearchMultiEndpoint,
	getTrendingPersonByWeekEndpoint,
	getTrendingMoviesByDay,
	getTrendingMoviesByWeek,
	getTrendingTvByWeekEndpoint,
	getTvByIdEndpoint
} from "./tmdb-config";

export const MEDIA_TYPE = {
	TV: "tv",
	MOVIE: "movie",
	PERSON: "person"
};

export const defaultFailResponse = {
	page: 0,
	results: [],
	total_pages: 0,
	total_results: 0
};

const handleResponse = ({ response, payload }) => ({
	response,
	payload
});

/**
 * Naive safe response with capability to handle basic error state.
 * @async
 * @function safeFetchJson
 * @param {string} url - the endpoint to fetch
 * @param {object} options - fetch request options object default = {},
 * @param {object} failResponse - an expected empty response from tmdb default = defaultFailResponse
 * @return {object} { payload, response } - "payload" - holds JSON from the response or failResponse. "response" - holds the actual response from the server to handle error conditions
 */

export const safeFetchJson = async ({ url, options = {}, failResponse = defaultFailResponse }) => {
	let response, payload;
	try {
		response = await window.fetch(url, options);
		payload = await response.json();
	} catch (error) {
		response = { ok: false, statusText: `${error}` };
		payload = failResponse;
	}
	return handleResponse({ response, payload });
};

// API helpers

export const getPopularMovies = async () =>
	await safeFetchJson({
		url: getPopularMovieEndpoint()
	});

export const getSearchMovieTitleResults = async term =>
	await safeFetchJson({
		url: getSearchMovieEndpoint(term)
	});

export const getSearchMultiResults = async term =>
	await safeFetchJson({
		url: getSearchMultiEndpoint(term)
	});

export const getMovieById = async id =>
	await safeFetchJson({
		url: getMovieByIdEndpoint(id),
		failResponse: {}
	});

export const getRecommendedMoviesById = async id =>
	await safeFetchJson({
		url: getRecommendedMoviesByIdEndpoint(id)
	});

export const getMovieCastById = async id =>
	await safeFetchJson({
		url: getMovieCastByIdEndpoint(id)
	});

export const getPersonById = async id =>
	await safeFetchJson({
		url: getPersonByIdEndpoint(id),
		failResponse: {}
	});

export const getTvById = async id =>
	await safeFetchJson({
		url: getTvByIdEndpoint(id),
		failResponse: {}
	});

export const getDailyTrendingMovies = async () =>
	await safeFetchJson({
		url: getTrendingMoviesByDay()
	});

export const getWeeklyTrendingMovies = async () =>
	await safeFetchJson({
		url: getTrendingMoviesByWeek()
	});

export const getWeeklyTrendingPeople = async () =>
	await safeFetchJson({
		url: getTrendingPersonByWeekEndpoint()
	});

export const getWeeklyTrendingTv = async () =>
	await safeFetchJson({
		url: getTrendingTvByWeekEndpoint()
	});

export const getPersonCreditsById = async id =>
	await safeFetchJson({
		url: getPersonCreditsByIdEndpoint(id)
	});

export const getMovieGenres = async () =>
	await safeFetchJson({
		url: getMovieGenresEndpoint()
	});

export const getDiscoverMoviesByGenreId = async (id, query) => {
	const applyFilter = query
		? query
		: "&sort_by=popularity.desc&include_adult=false&vote_average.gte=6";
	return await safeFetchJson({
		url: `${getDiscoverMovieEndpoint()}${applyFilter}&with_genres=${id}`
	});
};
