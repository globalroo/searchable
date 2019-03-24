import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import { PopularMoviesByGenre } from "./genres";
import "jest-dom/extend-expect";
import mockConsole from "jest-mock-console";

import { mockMovieItem } from "src/test-helpers/data";

jest.mock("src/tmdb-service/tmdb-api", () => {
	const tmdbAPI = jest.requireActual("src/tmdb-service/tmdb-api");
	return {
		MEDIA_TYPE: tmdbAPI.MEDIA_TYPE,
		getMovieGenres: () =>
			Promise.resolve({
				payload: {
					genres: [{ name: "test-genre1", id: 1 }, { name: "test-genre2", id: 2 }]
				}
			}),
		getDiscoverMoviesByGenreId: () =>
			Promise.resolve({ response: { ok: true }, payload: { results: [mockMovieItem] } })
	};
});

const restoreConsole = mockConsole();

describe("Trending component Renders as expected", () => {
	afterAll(restoreConsole);
	afterEach(cleanup);
	it("Renders a component with a navigate back wrapper", async () => {
		const { container, getByTestId } = render(<PopularMoviesByGenre />);
		await waitForElement(() => getByTestId("genre-category-1"));
		expect(container).toMatchSnapshot();
		expect(container).toHaveTextContent("test-genre2");
		expect(container).toHaveTextContent("test-genre1");
	});
});
