import React from "react";
import { render, cleanup } from "react-testing-library";
import { AssetScroller } from "./asset-scroller";

import mockMovie from "src/test-helpers/mock-movie";

describe("Asset Scroller tests", () => {
	afterEach(cleanup);
	it("Renders an AssetScroller component", () => {
		const testData = { ...mockMovie, media_type: "Defined" };
		const { getByTestId } = render(<AssetScroller assets={[testData]} />);
		const assetGrid = getByTestId("asset-grid");
		expect(assetGrid).toMatchSnapshot();
	});
	it("Renders an AssetScroller and overrides the media type if specified", () => {
		const testData = { ...mockMovie };
		const { getByTestId } = render(<AssetScroller assets={[testData]} media_type="person" />);
		const assetGrid = getByTestId("asset-grid");
		expect(assetGrid).toMatchSnapshot();
	});
});
