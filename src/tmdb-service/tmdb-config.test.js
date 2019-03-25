import {
	API,
	BASE_IMG_PATH,
	BASE_URL,
	getAuthorisedEndpoint,
	getLargeImage,
	getMovieByIdEndpoint,
	getMovieCastByIdEndpoint,
	getPersonByIdEndpoint,
	getPopularMovieEndpoint,
	getRecommendedMoviesByIdEndpoint,
	getSearchMovieEndpoint,
	getSmallPosterImage,
	getTrendingMoviesByDay,
	getTrendingMoviesByWeek,
	getTrendingTvByWeekEndpoint,
	getTrendingPersonByWeekEndpoint,
	getTvByIdEndpoint
} from "./tmdb-config";

jest.mock("./tmdb-key", () => ({
	getKey: () => "test-key"
}));

describe("Verify endpoints", () => {
	it("Verify getAuthorisedEndpoint returns expected URL", () => {
		const testEndpoint = "/test";
		expect(getAuthorisedEndpoint(testEndpoint)).toContain(`${BASE_URL}${testEndpoint}`);
	});
	it("Verify getMovieByIdEndpoint returns expected URL", () => {
		const testId = "1";
		expect(getMovieByIdEndpoint(1)).toContain(`${BASE_URL}${API.MOVIE}/${testId}`);
	});
	it("Verify getMovieCastByIdEndpoint returns expected URL", () => {
		const testId = "1";
		expect(getMovieCastByIdEndpoint(1)).toContain(
			`${BASE_URL}${API.MOVIE}/${testId}${API.CREDITS}`
		);
	});
	it("Verify getPersonByIdEndpoint returns expected URL", () => {
		const testId = "1";
		expect(getPersonByIdEndpoint(1)).toContain(`${BASE_URL}${API.PERSON}/${testId}`);
	});
	it("Verify getPersonByIdEndpoint returns expected URL", () => {
		const testId = "1";
		expect(getTvByIdEndpoint(1)).toContain(`${BASE_URL}${API.TV}/${testId}`);
	});
	it("Verify getPopularMovieEndpoint returns expected URL", () => {
		expect(getPopularMovieEndpoint()).toContain(`${BASE_URL}${API.POPULAR_MOVIES}`);
	});
	it("Verify getRelatedMoviesByIdEndpoint returns expected URL", () => {
		const testId = "1";
		expect(getRecommendedMoviesByIdEndpoint(testId)).toContain(
			`${BASE_URL}${API.MOVIE}/${testId}${API.RECOMMENDATIONS}`
		);
	});
	it("Verify getSearchMovieEndpoint returns expected URL", () => {
		const testSearch = "Robocop";
		const endpoint = getSearchMovieEndpoint(testSearch);
		expect(endpoint).toContain(`${BASE_URL}${API.SEARCH_MOVIES}`);
		expect(endpoint).toContain(`${testSearch}`);
	});
	it("Verify getSmallPosterImage returns expected URL", () => {
		const testImage = "Robocop.png";
		const endpoint = getSmallPosterImage(testImage);
		expect(endpoint).toContain(`${BASE_IMG_PATH}${API.SMALL_IMG_WIDTH}/${testImage}`);
	});
	it("Verify getTrendingMoviesByDay returns expected URL", () => {
		const endpoint = getTrendingMoviesByDay();
		expect(endpoint).toMatchSnapshot();
	});
	it("Verify getTrendingMoviesByWeek returns expected URL", () => {
		const endpoint = getTrendingMoviesByWeek();
		expect(endpoint).toMatchSnapshot();
	});
	it("Verify getTrendingPersonByWeekEndpoint returns expected URL", () => {
		const endpoint = getTrendingPersonByWeekEndpoint();
		expect(endpoint).toMatchSnapshot();
	});
	it("Verify getTrendingTvByWeekEndpoint returns expected URL", () => {
		const endpoint = getTrendingTvByWeekEndpoint();
		expect(endpoint).toMatchSnapshot();
	});
	it("Formats the large image url correctly", () => {
		const endpoint = getLargeImage("test.png");
		expect(endpoint).toMatchSnapshot();
	});
});
