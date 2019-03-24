import React from "react";
import { render } from "react-testing-library";
import mockConsole from "jest-mock-console";
import { PersonPictureScroller } from "./person-picture-scroller";

const restoreConsole = mockConsole();

describe("Person credits test", () => {
	afterAll(restoreConsole);
	it("Will not render with no images", async () => {
		const { container } = await render(<PersonPictureScroller />);
		expect(container.firstChild).toBeNull();
	});
});
