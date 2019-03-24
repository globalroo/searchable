import React from "react";
import { render, cleanup } from "react-testing-library";
import { NavBar } from "./navbar";
import "jest-dom/extend-expect";

describe("Asset Tile tests", () => {
	afterEach(cleanup);
	it("Renders a component with a navigate back wrapper", () => {
		const { container } = render(<NavBar title="Test Title" />);
		expect(container).toHaveTextContent("Test Title");
		expect(container).toMatchSnapshot();
	});
});
