import React from "react";
import { render, getByText } from "react-testing-library";
import { Age } from "./age";

describe("Movie Detail tests", () => {
	it("Renders an Age component", () => {
		const { container } = render(<Age birthday={"1984/7/22"} />);
		expect(container.firstChild).toMatchSnapshot();
	});

	it("Should show the correct age till 'now' if still alive", () => {
		const { container } = render(<Age birthday={"1984/7/22"} />);
		const found = getByText(container, /34 years old/);
		expect(found).toBeTruthy();
	});

	it("Should show the correct age till 'death day if deceased", () => {
		const { container } = render(<Age birthday={"1984/7/22"} deathday={"2004/7/22"} />);
		const found = getByText(container, /20 years old/);
		expect(found).toBeTruthy();
	});
});
