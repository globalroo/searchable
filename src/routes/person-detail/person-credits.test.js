import React from "react";
import { mockPerson, mockCast } from "src/test-helpers/mock-person";
import { render, waitForElement } from "react-testing-library";
import { PersonCredits } from "./person-credits";
import mockConsole from "jest-mock-console";

jest.mock("src/components/asset-scroller", () => {
	return {
		AssetScroller: ({ assets }) => <div data-testid="response">{JSON.stringify(assets)}</div>
	};
});

let mockFailResponse = false;

jest.mock("src/tmdb-service/tmdb-api", () => {
	const tmdbAPI = jest.requireActual("src/tmdb-service/tmdb-api");
	return {
		MEDIA_TYPE: tmdbAPI.MEDIA_TYPE,
		getPersonCreditsById: () => {
			if (mockFailResponse) {
				return Promise.resolve({
					response: { ok: true }
				});
			} else {
				return Promise.resolve({
					response: { ok: true },
					payload: { cast: [mockCast] }
				});
			}
		}
	};
});

const restoreConsole = mockConsole();

describe("Person credits test", () => {
	afterAll(restoreConsole);
	it("Renders a Person credits component", async () => {
		const { container, getByTestId } = await render(<PersonCredits id={mockPerson.id} />);
		await waitForElement(() => getByTestId("response"));
		expect(container).toMatchSnapshot();
	});
	it("Renders nothing if there is no additional credits", async () => {
		mockFailResponse = true;
		const { container } = await render(<PersonCredits id={mockPerson.id} />);
		expect(container.firstChild).toBeNull();
	});
});
