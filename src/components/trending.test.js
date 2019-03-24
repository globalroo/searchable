import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import { TrendingSearches } from "./trending";
import "jest-dom/extend-expect";
import mockConsole from "jest-mock-console";

import { mockMovieItem, mockPersonItem, mockTvItem } from "src/test-helpers/data";

jest.mock("src/tmdb-service/tmdb-api", () => {
	const tmdbAPI = jest.requireActual("src/tmdb-service/tmdb-api");
	return {
		MEDIA_TYPE: tmdbAPI.MEDIA_TYPE,
		getWeeklyTrendingMovies: () =>
			Promise.resolve({ response: { ok: true }, payload: { results: [mockMovieItem] } }),
		getWeeklyTrendingPeople: () =>
			Promise.resolve({ response: { ok: true }, payload: { results: [mockPersonItem] } }),
		getWeeklyTrendingTv: () =>
			Promise.resolve({ response: { ok: true }, payload: { results: [mockTvItem] } })
	};
});

const restoreConsole = mockConsole();

describe("Trending component Renders as expected", () => {
	afterAll(restoreConsole);
	afterEach(cleanup);
	it("Renders a component with a navigate back wrapper", async () => {
		const { container, getByTestId } = render(<TrendingSearches />);
		const movies = await waitForElement(() => getByTestId("trending-movies"));
		expect(movies).toMatchSnapshot();
		const tv = await waitForElement(() => getByTestId("trending-tv"));
		expect(tv).toMatchSnapshot();
		const people = await waitForElement(() => getByTestId("trending-people"));
		expect(people).toMatchSnapshot();
		expect(container).toHaveTextContent("movieItem");
		expect(container).toHaveTextContent("tvItem");
		expect(container).toHaveTextContent("personItem");
	});
});
