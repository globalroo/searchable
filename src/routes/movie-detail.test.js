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
		{ id: 12, logo_path: "/iaYpEp3LQmb8AfAtmTvpqd4149c.png", name: "New Line Cinema", origin_country: "US" }
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
	vote_count: 700,
	recommendations: {
		page: 1,
		results: [
			{
				adult: false,
				backdrop_path: "/2wKw8M6g7wj0RNz9zAeqU9s1BKl.jpg",
				genre_ids: [28, 35, 80],
				id: 136795,
				original_language: "en",
				original_title: "The Heat",
				overview:
					'Uptight and straight-laced, FBI Special Agent Sarah Ashburn is a methodical investigator with a reputation for excellence--and hyper-arrogance. Shannon Mullins, one of Boston P.D.\'s "finest," is foul-mouthed and has a very short fuse, and uses her gut instinct and street smarts to catch the most elusive criminals. Neither has ever had a partner, or a friend for that matter. When these two wildly incompatible law officers join forces to bring down a ruthless drug lord, they become the last thing anyone expected: Buddies.',
				poster_path: "/tM3hDt8JcU8Y8i6vzTcbnocM2bx.jpg",
				release_date: "2013-06-27",
				title: "The Heat",
				video: false,
				vote_average: 6.6,
				vote_count: 2340,
				popularity: 12.497
			}
		],
		total_pages: 1,
		total_results: 1
	},
	credits: {
		cast: [
			{
				cast_id: 4,
				character: "Tammy",
				credit_id: "52fe4e7f9251416c75158661",
				gender: 1,
				id: 55536,
				name: "Melissa McCarthy",
				order: 0,
				profile_path: "/nRNMJlqR33j84cGdB0RxstV3NYm.jpg"
			}
		],
		crew: [
			{
				credit_id: "52fe4e7f9251416c75158651",
				department: "Directing",
				gender: 2,
				id: 170820,
				job: "Director",
				name: "Ben Falcone",
				profile_path: "/abhsMUOZKyAGPK3uZPdf3UQ5MuZ.jpg"
			}
		]
	}
};

jest.mock("src/hooks/by-id-loader", () => ({
	useByIdLoader: () => ({ response: { payload: mockMovie }, loading: false, error: false })
}));

describe("Movie Detail tests", () => {
	it("Renders a movie detail component", () => {
		const { container } = render(<MovieDetail id={mockMovie.id} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
