import {
	defaultFailResponse,
	getDailyTrendingMovies,
	getMovieById,
	getMovieCastById,
	getPersonById,
	getPopularMovies,
	getRecommendedMoviesById,
	getSearchMovieTitleResults,
	getTvById,
	getWeeklyTrendingMovies,
	safeFetchJson
} from "./tmdb-api";

jest.mock("./tmdb-key", () => ({
	getKey: () => "test-key"
}));

const testURL = "Wibbly.woo";
const testMovie = "Robocop";
const testJsonResponse = { results: ["Wibbly", "Woo"] };

describe("Test TMDB API callouts via safeFetch", () => {
	const mockFetch = require("jest-fetch-mock");
	const originalFetch = global.fetch;

	beforeAll(() => {
		global.fetch = mockFetch;
	});
	afterEach(() => {
		mockFetch.resetMocks();
	});
	describe("safeFetch tests", () => {
		it("safeFetchJson Requests the URL and passes the fetch options correctly", () => {
			const testOptions = { header: "my-header" };
			mockFetch.mockResponseOnce(JSON.stringify({}));

			safeFetchJson({ url: testURL, options: testOptions });

			const [request] = mockFetch.mock.calls;
			const [url, headers] = request;
			expect(url).toBe(testURL);
			expect(headers).toEqual(testOptions);
		});

		it("safeFetchJson retrieves and formats a successful response", async () => {
			mockFetch.mockResponseOnce(JSON.stringify(testJsonResponse));
			const { payload, response } = await safeFetchJson({ url: testURL });
			expect(response.ok).toBe(true);
			expect(payload).toEqual(testJsonResponse);
		});

		it("safeFetchJson retrieves and formats an UNsuccessful response that throws on fetch", async () => {
			mockFetch.mockReject();
			const { payload, response } = await safeFetchJson({ url: testURL });
			expect(response.ok).toBe(false);
			expect(payload).toEqual(defaultFailResponse);
		});
		it("safeFetchJson retrieves and formats a successful response that throws on JSON parse error", async () => {
			mockFetch.mockResponseOnce(undefined, { status: 200 });
			const { payload, response } = await safeFetchJson({ url: testURL });
			expect(response.ok).toBe(false);
			expect(response.statusText).toContain("Unexpected end of JSON input");
			expect(payload).toEqual(defaultFailResponse);
		});
		it("safeFetchJson retrieves and formats an UNsuccessful response to the server", async () => {
			mockFetch.mockResponseOnce(undefined, { status: 404, statusText: "Not found", ok: false });
			const { payload, response } = await safeFetchJson({ url: testURL });
			expect(response.ok).toBe(false);
			expect(payload).toEqual(defaultFailResponse);
		});
	});

	describe("API helper tests", () => {
		it("getPopularMovies calls out to the correct endpoint", async () => {
			await getPopularMovies();
			const [request] = mockFetch.mock.calls;
			const [url] = request;
			expect(url).toMatchInlineSnapshot(`"https://api.themoviedb.org/3/movie/popular?api_key=test-key"`);
		});
		it("getSearchMovieTitleResults calls out to the correct endpoint", async () => {
			await getSearchMovieTitleResults(testMovie);
			const [request] = mockFetch.mock.calls;
			const [url] = request;
			expect(url).toMatchInlineSnapshot(
				`"https://api.themoviedb.org/3/search/movie?api_key=test-key&query=Robocop"`
			);
		});
		it("getMovieById calls out to the correct endpoint", async () => {
			await getMovieById(1);
			const [request] = mockFetch.mock.calls;
			const [url] = request;
			expect(url).toMatchInlineSnapshot(`"https://api.themoviedb.org/3/movie/1?api_key=test-key"`);
		});
		it("getPopularMovies calls out to the correct endpoint", async () => {
			mockFetch.mockResponseOnce(JSON.stringify(testJsonResponse));
			await getPopularMovies();
			const [request] = mockFetch.mock.calls;
			const [url] = request;
			expect(url).toMatchInlineSnapshot(`"https://api.themoviedb.org/3/movie/popular?api_key=test-key"`);
		});
		it("getRecommendedMoviesById, calls out to the correct endpoint", async () => {
			mockFetch.mockResponseOnce(JSON.stringify(testJsonResponse));
			await getRecommendedMoviesById(1);
			const [request] = mockFetch.mock.calls;
			const [url] = request;
			expect(url).toMatchInlineSnapshot(
				`"https://api.themoviedb.org/3/movie/1/recommendations?api_key=test-key"`
			);
		});
		it("getMovieCastById, calls out to the correct endpoint", async () => {
			mockFetch.mockResponseOnce(JSON.stringify(testJsonResponse));
			await getMovieCastById(1);
			const [request] = mockFetch.mock.calls;
			const [url] = request;
			expect(url).toMatchInlineSnapshot(`"https://api.themoviedb.org/3/movie/1/credits?api_key=test-key"`);
		});
		it("getPersonById, calls out to the correct endpoint", async () => {
			mockFetch.mockResponseOnce(JSON.stringify(testJsonResponse));
			await getPersonById(1);
			const [request] = mockFetch.mock.calls;
			const [url] = request;
			expect(url).toMatchInlineSnapshot(`"https://api.themoviedb.org/3/person/1?api_key=test-key"`);
		});
		it("getDailyTrendingMovies, calls out to the correct endpoint", async () => {
			mockFetch.mockResponseOnce(JSON.stringify(testJsonResponse));
			await getDailyTrendingMovies();
			const [request] = mockFetch.mock.calls;
			const [url] = request;
			expect(url).toMatchInlineSnapshot(`"https://api.themoviedb.org/3/trending/movie/day?api_key=test-key"`);
		});
		it("getWeeklyTrendingMovies calls out to the correct endpoint", async () => {
			mockFetch.mockResponseOnce(JSON.stringify(testJsonResponse));
			await getWeeklyTrendingMovies();
			const [request] = mockFetch.mock.calls;
			const [url] = request;
			expect(url).toMatchInlineSnapshot(`"https://api.themoviedb.org/3/trending/movie/week?api_key=test-key"`);
		});
		it("getTvById, calls out to the correct endpoint", async () => {
			mockFetch.mockResponseOnce(JSON.stringify(testJsonResponse));
			await getTvById(1);
			const [request] = mockFetch.mock.calls;
			const [url] = request;
			expect(url).toMatchInlineSnapshot(`"https://api.themoviedb.org/3/tv/1?api_key=test-key"`);
		});
	});

	afterAll(() => {
		global.fetch = originalFetch;
	});
});
