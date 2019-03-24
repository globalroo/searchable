import React from "react";
import { render } from "react-testing-library";

import { MovieDetail } from "./movie-detail";

import mockMovie from "src/test-helpers/mock-movie";

let mockError = false;
let mockLoading = false;
let mockPayload = mockMovie;

jest.mock("src/hooks/by-id-loader", () => ({
	useByIdLoader: () => ({
		response: { payload: mockPayload },
		loading: mockLoading,
		error: mockError
	})
}));

describe("Movie Detail tests", () => {
	afterEach(() => {
		mockLoading = false;
		mockError = false;
		mockPayload = mockMovie;
	});
	it("Renders a movie detail component", () => {
		const { container } = render(<MovieDetail id={mockMovie.id} />);
		expect(container).toMatchSnapshot();
	});
	it("Renders a movie detail loadiing component", () => {
		mockLoading = true;
		const { container } = render(<MovieDetail id={mockMovie.id} />);
		expect(container).toMatchSnapshot();
	});
	it("Renders a movie detail component", () => {
		mockError = true;
		const { container } = render(<MovieDetail id={mockMovie.id} />);
		expect(container).toMatchSnapshot();
	});
	it("Renders a movie detail component", () => {
		mockPayload = null;
		const { container } = render(<MovieDetail id={mockMovie.id} />);
		expect(container).toMatchSnapshot();
	});
});
