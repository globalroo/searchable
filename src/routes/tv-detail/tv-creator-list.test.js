import React from "react";
import { render, fireEvent } from "react-testing-library";
import { TvCreatorList } from "./tv-creator-list";
import { MEDIA_TYPE } from "src/tmdb-service/tmdb-api";

const mockNavigateSpy = jest.fn();

jest.mock("src/helpers/navigate", () => ({
	navigateTo: val => {
		mockNavigateSpy(val);
	}
}));

const mockCreator = { id: 1, name: `test`, profile_path: `testprofile` };

describe("Selecting a creator avatar routes to their profile", () => {
	it("Renders a tv-creator-list component", () => {
		const { container } = render(<TvCreatorList {...mockCreator} />);
		expect(container.firstChild).toMatchSnapshot();
	});
	it("Renders routes to the correct creator", async () => {
		const { getByTestId } = render(<TvCreatorList {...mockCreator} />);
		const button = getByTestId(`tv-creator-${1}`);
		await fireEvent.click(button);
		expect(mockNavigateSpy).toHaveBeenCalledWith({
			id: mockCreator.id,
			media_type: MEDIA_TYPE.PERSON
		});
	});
});
