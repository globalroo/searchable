import React from "react";
import { render, cleanup } from "react-testing-library";
import { SideBar } from "./side-bar";
import "jest-dom/extend-expect";

describe("SideBar Renders as expected", () => {
	afterEach(cleanup);
	it("Renders a component with a navigate back wrapper", () => {
		const { container } = render(
			<SideBar poster_path="test_image.png" title="image holder">
				<p>Test children render</p>
			</SideBar>
		);
		expect(container).toHaveTextContent("Test children render");
		expect(container).toMatchSnapshot();
	});
});
