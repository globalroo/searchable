import React from "react";
import { render, cleanup, fireEvent, waitForElement } from "react-testing-library";
import "jest-dom/extend-expect";

import { AutoComplete } from "./auto-complete";
import { mockResultsArray } from "src/test-helpers/data";

import mockConsole from "jest-mock-console";

jest.mock("src/tmdb-service/tmdb-api", () => {
	const tmdbAPI = jest.requireActual("src/tmdb-service/tmdb-api");
	return {
		...tmdbAPI,
		getSearchMultiResults: () => Promise.resolve({ payload: { results: mockResultsArray } })
	};
});

const restoreConsole = mockConsole();

describe("Auto complete tests", () => {
	afterAll(restoreConsole);
	afterEach(cleanup);
	it("Renders an auto complete component with [mockMovieItem, mockTvItem, mockPersonItem]", () => {
		const { container } = render(<AutoComplete />);
		expect(container.firstChild).toMatchSnapshot();
	});
	it("Opens the menu when a string is entered", async () => {
		const { getByTestId } = render(<AutoComplete />);
		const [inputNode] = getByTestId("basicsearchinput-input").children;
		await fireEvent.change(inputNode, { target: { value: "Avengers" } });
		expect(inputNode.value).toBe("Avengers");
		const menu = await waitForElement(() => getByTestId("autocomplete-menu"));
		expect(menu).toBeInTheDocument();
	});
	it("Closes the menu when the string is cleared", async () => {
		const { container, getByTestId } = render(<AutoComplete />);
		const [inputNode] = getByTestId("basicsearchinput-input").children;
		fireEvent.change(inputNode, { target: { value: "Avengers" } });
		expect(inputNode.value).toBe("Avengers");
		const menu = await waitForElement(() => getByTestId("autocomplete-menu"));
		expect(menu).toBeInTheDocument();
		jest.useFakeTimers();
		await fireEvent.change(inputNode, { target: { value: "" } });
		jest.advanceTimersByTime(600);
		expect(
			container.querySelector('[data-testid="autocomplete-menu"]')
		).not.toBeInTheDocument();
		jest.useRealTimers();
	});
	it("Does nothing if the search term length is less than 3", async () => {
		const { container, getByTestId } = render(<AutoComplete />);
		const [inputNode] = getByTestId("basicsearchinput-input").children;
		await fireEvent.change(inputNode, { target: { value: "Av" } });
		expect(inputNode.value).toBe("Av");
		expect(container.querySelector('[data-testid="autocomplete"]')).not.toBeInTheDocument();
	});
	it("Searches when the search button is pressed", async () => {
		const spy = jest.fn();
		const { getByTestId } = render(<AutoComplete populate={spy} />);
		const [inputNode] = getByTestId("basicsearchinput-input").children;
		await fireEvent.change(inputNode, { target: { value: "Avengers" } });
		await fireEvent.click(getByTestId("basicsearchinput-search-button"));
		expect(spy).toHaveBeenCalledWith(mockResultsArray);
	});
	it("Doesn't Search when the search button is pressed and the search term is less than 3", async () => {
		const spy = jest.fn();
		const { getByTestId } = render(<AutoComplete populate={spy} />);
		const [inputNode] = getByTestId("basicsearchinput-input").children;
		await fireEvent.change(inputNode, { target: { value: "Av" } });
		await fireEvent.click(getByTestId("basicsearchinput-search-button"));
		expect(spy).not.toHaveBeenCalled();
	});
	it("Searches when the enter button is pressed", async () => {
		const spy = jest.fn();
		const { getByTestId } = render(<AutoComplete populate={spy} />);
		const [inputNode] = getByTestId("basicsearchinput-input").children;
		await fireEvent.change(inputNode, { target: { value: "Avengers" } });
		await fireEvent.keyDown(inputNode, { key: "Enter", code: 13, charCode: 13 });
		expect(spy).toHaveBeenCalledWith(mockResultsArray);
	});
	it("Does not Search when the enter button is pressed and the search term is less than 3", async () => {
		const spy = jest.fn();
		const { getByTestId } = render(<AutoComplete populate={spy} />);
		const [inputNode] = getByTestId("basicsearchinput-input").children;
		await fireEvent.change(inputNode, { target: { value: "Av" } });
		await fireEvent.keyDown(inputNode, { key: "Enter", code: 13, charCode: 13 });
		expect(spy).not.toHaveBeenCalled();
	});
	it("Does not do a duplicate search when a key other than Enter is pressed", async () => {
		const spy = jest.fn();
		const { getByTestId } = render(<AutoComplete populate={spy} />);
		const [inputNode] = getByTestId("basicsearchinput-input").children;
		await fireEvent.keyDown(inputNode, { key: "NotEnter" });
		expect(spy).not.toHaveBeenCalled();
	});
	it("Clears the search term when the clear button is pressed", async () => {
		const spy = jest.fn();
		const { getByTestId } = render(<AutoComplete populate={spy} />);
		const [inputNode] = getByTestId("basicsearchinput-input").children;
		await fireEvent.change(inputNode, { target: { value: "Avengers" } });
		expect(inputNode.value).toBe("Avengers");
		await fireEvent.click(getByTestId("basicsearchinput-clear-button"));
		expect(inputNode.value).toBe("");
	});
	it("Clears the search term and the grid when the clear button is pressed and a method is passed in", async () => {
		const spy = jest.fn();
		const { getByTestId } = render(<AutoComplete populate={spy} />);
		const [inputNode] = getByTestId("basicsearchinput-input").children;
		await fireEvent.change(inputNode, { target: { value: "Avengers" } });
		expect(inputNode.value).toBe("Avengers");
		await fireEvent.click(getByTestId("basicsearchinput-clear-button"));
		expect(inputNode.value).toBe("");
	});
});
