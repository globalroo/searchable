import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import { AssetTile } from "./asset-tile";
import mockMovie from "src/test-helpers/mock-movie";
import { MEDIA_TYPE } from "src/tmdb-service/tmdb-api";

const mockNavigateSpy = jest.fn();

jest.mock("src/helpers/navigate", () => ({
	navigateTo: val => {
		mockNavigateSpy(val);
	}
}));

describe("Asset Tile tests", () => {
	afterEach(cleanup);
	it("Renders an AssetTile component", () => {
		const asset = { ...mockMovie, media_type: "Defined" };
		const { getByTestId } = render(<AssetTile asset={asset} />);
		const assetTile = getByTestId(`${asset.id}_${asset.title}`);
		expect(assetTile).toMatchSnapshot();
	});
	it("Renders an AssetScroller component with a non-default media type", () => {
		const asset = {
			...mockMovie,
			title: undefined,
			name: "person_name",
			poster_path: undefined,
			profile_path: "Person type tile"
		};
		const { getByTestId } = render(<AssetTile asset={asset} media_type={"TEST"} />);
		const assetTile = getByTestId(`${asset.id}_${asset.name}`);
		expect(assetTile).toMatchSnapshot();
	});
	it("Expect component to navigate when clicked", () => {
		const asset = { ...mockMovie, media_type: MEDIA_TYPE.MOVIE };
		const { getByTestId } = render(<AssetTile asset={asset} />);
		const assetTile = getByTestId(`${asset.id}_${asset.title}`);
		fireEvent.click(assetTile, { button: 1 });
		expect(mockNavigateSpy).toHaveBeenCalledWith(asset);
	});
});
