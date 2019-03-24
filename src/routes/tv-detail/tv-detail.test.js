import React from "react";
import { render } from "react-testing-library";

import { TvDetail } from "./tv-detail";
import { mockTv } from "src/test-helpers/mock-tv";

let mockError = false;
let mockLoading = false;
let mockPayload = mockTv;

jest.mock("src/hooks/by-id-loader", () => ({
	useByIdLoader: () => ({
		response: { payload: mockPayload },
		loading: mockLoading,
		error: mockError
	})
}));

describe("TV Detail tests", () => {
	afterEach(() => {
		mockLoading = false;
		mockError = false;
		mockPayload = mockTv;
	});
	it("Renders a TV detail component", async () => {
		const { container } = await render(<TvDetail id={mockTv.id} />);
		expect(container.firstChild).toMatchSnapshot();
	});
	it("Renders a TV Loading component", async () => {
		mockLoading = true;
		const { container } = await render(<TvDetail id={mockTv.id} />);
		expect(container.firstChild).toBeNull();
	});
	it("Renders a TV Loading component", async () => {
		mockError = true;
		const { container } = await render(<TvDetail id={mockTv.id} />);
		expect(container.firstChild).toMatchInlineSnapshot(`
<div>
  Error
</div>
`);
	});
	it("Renders a TV Loading component", async () => {
		mockPayload = undefined;
		const { container } = await render(<TvDetail id={mockTv.id} />);
		expect(container.firstChild).toBeNull();
	});
});
