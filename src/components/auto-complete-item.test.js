import React from "react";
import { render, cleanup } from "react-testing-library";
import { MEDIA_TYPE } from "../tmdb-service/tmdb-api";
import { AutoCompleteItem } from "./auto-complete-item";

import "jest-dom/extend-expect";
const mockMovieItem = {
	id: 0,
	title: "movieItem",
	media_type: MEDIA_TYPE.MOVIE
};

const mockTvItem = {
	id: 1,
	title: "tvItem",
	media_type: MEDIA_TYPE.TV
};

const mockPersonItem = {
	id: 2,
	name: "personItem",
	media_type: MEDIA_TYPE.PERSON
};

describe("Auto complete item tests", () => {
	afterEach(cleanup);
	it("Renders an auto complete component with a movie item", () => {
		const mockData = {
			item: mockMovieItem,
			selected: false,
			highlighted: false
		};
		const { container } = render(<AutoCompleteItem {...mockData} />);
		expect(container.firstChild).toMatchSnapshot();
	});
	it("Renders an auto complete component with a tv item", () => {
		const mockData = {
			item: mockTvItem,
			selected: false,
			highlighted: false
		};
		const { container } = render(<AutoCompleteItem {...mockData} />);
		expect(container.firstChild).toMatchSnapshot();
	});
	it("Renders an auto complete component with a person item", () => {
		const mockData = {
			item: mockPersonItem,
			selected: false,
			highlighted: false
		};
		const { container } = render(<AutoCompleteItem {...mockData} />);
		expect(container.firstChild).toMatchSnapshot();
	});
	it("Renders an auto complete component with an unhandled item", () => {
		const restoreConsole = mockConsole();
		expect(() => render(<AutoCompleteItem item={{ media_type: "unknown" }} />)).toThrowError();
		restoreConsole();
	});
	it("Passes through additional props", () => {
		const mockData = {
			item: mockPersonItem,
			selected: false,
			highlighted: false,
			className: "additional-prop"
		};
		const { container } = render(<AutoCompleteItem {...mockData} />);
		expect(container.firstChild).toHaveClass("additional-prop");
	});
});
