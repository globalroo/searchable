import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import { NavigateBackContainer } from "./navigate-back";
import "jest-dom/extend-expect";

describe("Asset Tile tests", () => {
	afterEach(cleanup);
	it("Renders a component with a navigate back wrapper", () => {
		const { container } = render(
			<NavigateBackContainer>
				<p>Test</p>
			</NavigateBackContainer>
		);
		expect(container).toHaveTextContent("Test");
		expect(container).toMatchSnapshot();
	});
	it("Renders the example Footer with some test links", async () => {
		const { getByTestId } = render(
			<NavigateBackContainer>
				<p data-testid="clickme">Test</p>
			</NavigateBackContainer>
		);
		const spy = jest.fn();
		const safeGo = global.history.go;
		global.history.go = spy;
		await fireEvent.click(getByTestId("clickme"));
		expect(spy).toHaveBeenCalledWith(-1);
		global.history.go = safeGo;
	});
});
