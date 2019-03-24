import React from "react";
import { render } from "react-testing-library";

import { PersonDetail } from "./person-detail";

import { mockPerson, mockCast } from "src/test-helpers/mock-person";

let mockError = false;
let mockLoading = false;
let mockPayload = { ...mockPerson, ...mockCast };

jest.mock("src/hooks/by-id-loader", () => ({
	useByIdLoader: () => ({
		response: { payload: mockPayload },
		loading: mockLoading,
		error: mockError
	})
}));

describe("Person Detail tests", () => {
	afterEach(() => {
		mockLoading = false;
		mockError = false;
		mockPayload = { ...mockPerson, ...mockCast };
	});
	it("Renders a Person detail component", async () => {
		const { container } = await render(<PersonDetail id={mockPerson.id} />);
		expect(container).toMatchSnapshot();
	});
	it("Renders a Person detail component with no biography", async () => {
		mockPayload = { ...mockPayload, biography: undefined };
		const { container } = await render(<PersonDetail id={mockPerson.id} />);
		expect(container).toMatchSnapshot();
	});
	it("Renders a Person detail loading component", async () => {
		mockLoading = true;
		const { container } = await render(<PersonDetail id={mockPerson.id} />);
		expect(container).toMatchSnapshot();
	});
	it("Renders a Person detail error component", async () => {
		mockError = true;
		const { container } = await render(<PersonDetail id={mockPerson.id} />);
		expect(container).toMatchSnapshot();
	});
	it("Renders a Person detail error component", async () => {
		mockPayload = null;
		const { container } = await render(<PersonDetail id={mockPerson.id} />);
		expect(container).toMatchSnapshot();
	});
});
