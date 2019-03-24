import React from "react";
import { render, cleanup } from "react-testing-library";
import { Footer } from "./footer";
import "jest-dom/extend-expect";

describe("Asset Tile tests", () => {
	afterEach(cleanup);
	it("Renders the example Footer with some test links", () => {
		const { container } = render(<Footer />);
		expect(container).toMatchSnapshot();
	});
});
