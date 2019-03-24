import { MEDIA_TYPE } from "src/tmdb-service/tmdb-api.js";
import { navigateTo } from "./navigate";
import mockConsole from "jest-mock-console";

import { mockTvItem, mockMovieItem, mockPersonItem } from "src/test-helpers/data";

const mockNavigate = jest.fn();
jest.mock("@reach/router", () => ({
	navigate: route => {
		mockNavigate(route);
	}
}));
const restoreConsole = mockConsole();

describe("Navigation tests", () => {
	afterAll(restoreConsole);
	it("Should navigate to the person endpoint when a person asset is received", () => {
		navigateTo(mockPersonItem);
		expect(mockNavigate).toHaveBeenCalledWith(`${MEDIA_TYPE.PERSON}/${mockPersonItem.id}`);
		mockNavigate.mockReset();
	});
	it("Should navigate to the person endpoint when a tv asset is received", () => {
		navigateTo(mockTvItem);
		expect(mockNavigate).toHaveBeenCalledWith(`${MEDIA_TYPE.TV}/${mockTvItem.id}`);
		mockNavigate.mockReset();
	});
	it("Should navigate to the person endpoint when a movie asset is received", () => {
		navigateTo(mockMovieItem);
		expect(mockNavigate).toHaveBeenCalledWith(`${MEDIA_TYPE.MOVIE}/${mockMovieItem.id}`);
		mockNavigate.mockReset();
	});
	it("Should navigate to the person endpoint when a movie asset is received", () => {
		navigateTo({ media_type: "test-unhandled", id: 10 });
		expect(mockNavigate).not.toHaveBeenCalled();
	});
});
