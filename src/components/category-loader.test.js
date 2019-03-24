import React from "react";
import { render, cleanup } from "react-testing-library";
import { mockResultsArray } from "src/test-helpers/data";
import { CategoryLoader } from "./category-loader";
import "jest-dom/extend-expect";
const TestComponent = props => <div data-testid="result-data">{JSON.stringify(props)}</div>;

let mockIdLoaderResponse;
jest.mock("src/hooks/by-id-loader", () => ({
	useByIdLoader: () => {
		return mockIdLoaderResponse;
	}
}));

describe("Asset Tile tests", () => {
	afterEach(cleanup);
	it("Renders a Category loader component in a loading state", () => {
		mockIdLoaderResponse = { loading: true, error: false, response: {} };
		const { container } = render(
			<CategoryLoader>{results => <TestComponent results={results} />}</CategoryLoader>
		);
		expect(container.firstChild).toMatchSnapshot();
	});
	it("Renders a Category loader component in an error state", () => {
		mockIdLoaderResponse = { loading: false, error: true, response: {} };
		const { container, getByText } = render(
			<CategoryLoader title="Error test">
				{results => <TestComponent results={results} />}
			</CategoryLoader>
		);
		expect(getByText(/Can't load Category/)).toBeTruthy();
		expect(container.firstChild).toMatchSnapshot();
	});
	it("Renders a Category loader component and passes the data through to it's children", () => {
		mockIdLoaderResponse = {
			loading: false,
			error: false,
			response: { payload: { results: mockResultsArray } }
		};
		const { container, getByTestId } = render(
			<CategoryLoader title="Data test">
				{results => <TestComponent results={results} />}
			</CategoryLoader>
		);
		expect(getByTestId("result-data")).toHaveTextContent("results");
		expect(container.firstChild).toMatchSnapshot();
	});
	it("Renders a Category loader component and safely renders if no data in the response", () => {
		mockIdLoaderResponse = {
			loading: false,
			error: false,
			response: {}
		};
		const { container, getByTestId } = render(
			<CategoryLoader title="Data test">
				{results => <TestComponent results={results} />}
			</CategoryLoader>
		);
		expect(getByTestId("result-data")).toHaveTextContent("results");
		expect(container.firstChild).toMatchSnapshot();
	});
});
