import React from "react";
import { render, cleanup } from "react-testing-library";
import { PersonScroller } from "./person-scroller";
import "jest-dom/extend-expect";
import { fakePeopleResponse } from "src/test-helpers/data";

describe("Asset Tile tests", () => {
	afterEach(cleanup);
	it("Renders a component with a navigate back wrapper", () => {
		const { container } = render(<PersonScroller cast={fakePeopleResponse.results} />);
		expect(container).toMatchSnapshot();
	});
});
