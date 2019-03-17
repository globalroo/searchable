import React from "react";
import { render } from "react-testing-library";

import { useByIdLoader } from "./by-id-loader";

const mockLoadedData = {
	id: 1,
	data: "This is a mock component to exercise the hook"
};

// Exercise the hook by ensuring a Fake component is populated as expected
export const HookTestingComponent = ({ id, fetcher }) => {
	const [detail] = useByIdLoader({ id, fetcher });
	return <div>{JSON.stringify(detail)}</div>;
};

describe("byIdLoader hook", () => {
	// TODO: Early adopter issue here - Suppressing misleading async error with jest timers and the new hook functionality.
	// Fix to be published "Real soon now" per https://twitter.com/dan_abramov
	// https://github.com/facebook/react/issues/14769
	const originalError = console.error;

	beforeAll(() => {
		console.error = jest.fn();
	});

	afterAll(() => {
		console.error = originalError;
	});

	it("Uses the loading hook correctly", async () => {
		const fetcher = jest.fn(() => Promise.resolve(mockLoadedData));
		const { container } = await render(<HookTestingComponent id={1} fetcher={fetcher} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
