import React from "react";
import { render, cleanup } from "react-testing-library";
import { Divider } from "./divider";
import "jest-dom/extend-expect";

describe("Asset Tile tests", () => {
	afterEach(cleanup);
	it("Renders a Regular Divider", () => {
		const { container } = render(<Divider />);
		expect(container).toMatchInlineSnapshot(`
<div>
  <hr
    class="MuiDivider-root-1"
  />
</div>
`);
	});
	it("Renders a Regular Divider with a break before it", () => {
		const { container } = render(<Divider spaceBefore />);
		expect(container).toMatchInlineSnapshot(`
<div>
  <br />
  <hr
    class="MuiDivider-root-6"
  />
</div>
`);
	});
	it("Renders a Regular Divider with a break before it", () => {
		const { container } = render(<Divider spaceAfter />);
		expect(container).toMatchInlineSnapshot(`
<div>
  <hr
    class="MuiDivider-root-11"
  />
  <br />
</div>
`);
	});
	it("Renders a Regular Divider with a break before it", () => {
		const { container } = render(<Divider spaceBefore spaceAfter />);
		expect(container).toMatchInlineSnapshot(`
<div>
  <br />
  <hr
    class="MuiDivider-root-16"
  />
  <br />
</div>
`);
	});
});
