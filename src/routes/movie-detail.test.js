import React from "react";
import { render } from "react-testing-library";

import { MovieDetail } from "./movie-detail";

const mockMovie = {
	adult: false,
	backdrop_path: "/vmrDTWGTupJQ8KRUNrx4RLGtTVp.jpg",
	belongs_to_collection: null,
	budget: 20000000,
	genres: [{ id: 35, name: "Comedy" }],
	homepage: null,
	id: 226486,
	imdb_id: "tt2103254",
	original_language: "en",
	original_title: "Tammy",
	overview:
		"After losing her job and learning that her husband has been unfaithful, a woman hits the road with her profane, hard-drinking grandmother.",
	popularity: 8.93,
	poster_path: "/cq6wvDqETqJXgpQplkL0FBw2leM.jpg",
	production_companies: [
		{ id: 12, logo_path: "/iaYpEp3LQmb8AfAtmTvpqd4149c.png", name: "New Line Cinema", origin_country: "US" },
		{ id: 4740, logo_path: null, name: "Gary Sanchez Productions", origin_country: "US" }
	],
	production_countries: [{ iso_3166_1: "US", name: "United States of America" }],
	release_date: "2014-07-02",
	revenue: 100525432,
	runtime: 97,
	spoken_languages: [{ iso_639_1: "en", name: "English" }],
	status: "Released",
	tagline: "She hit the road. The road hit back.",
	title: "Tammy",
	video: false,
	vote_average: 5.2,
	vote_count: 699
};

jest.mock("src/hooks/by-id-loader", () => ({
	useByIdLoader: () => [mockMovie]
}));

describe("Movie Detail tests", () => {
	it("Renders a movie detail component", () => {
		const { container } = render(<MovieDetail id={mockMovie.id} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
