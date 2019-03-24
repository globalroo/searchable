import React from "react";
import { render, fireEvent, waitForElement } from "react-testing-library";

import { Home } from "./home";

jest.mock("src/components/auto-complete", () => {
	return {
		AutoComplete: ({ populate }) => (
			<button
				onClick={() => {
					populate([{ id: 0 }, { id: 1 }]);
				}}
				data-testid="clicker"
			/>
		)
	};
});

jest.mock("src/components/footer", () => ({
	Footer: () => <div>Footer</div>
}));
jest.mock("src/components/trending", () => ({
	TrendingSearches: () => <div>Trending Searches</div>
}));
jest.mock("src/components/asset-tile", () => ({
	AssetTile: ({ asset }) => <div data-testid="test">{JSON.stringify(asset)}</div>
}));

describe("Home Component tests", () => {
	it("Renders a home with data component", async () => {
		const { container, getByTestId } = render(<Home />);
		const button = getByTestId("clicker");
		await fireEvent.click(button);
		await waitForElement(() => getByTestId("test"));
		expect(container).toMatchSnapshot();
	});
});
