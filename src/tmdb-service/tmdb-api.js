import {
	getMovieByIdEndpoint,
	getMovieCastByIdEndpoint,
	getPersonByIdEndpoint,
	getPopularMovieEndpoint,
	getRecommendedMoviesByIdEndpoint,
	getSearchMovieEndpoint,
	getSearchMultiEndpoint,
	getTrendingMoviesByDay,
	getTrendingMoviesByWeek,
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

//keywords
//search multiples
//adjust_response
