import { getStandardDateFormat, getEpisodeLength } from "./date";

describe("Verify helpers", () => {
	it("should return a standardised date format for all dates", () => {
		const testDate = "1984/7/22";
		expect(getStandardDateFormat(testDate)).toMatchInlineSnapshot(`"Sunday 22nd July 1984"`);
	});
	it("should return a well formated episode length string from minute duration", () => {
		const minutes = "240";
		expect(getEpisodeLength(minutes)).toMatchInlineSnapshot(`"about 4 hours"`);
	});
	it("should return a unknown length if no minutes sent in", () => {
		expect(getEpisodeLength()).toMatchInlineSnapshot(`"Unknown"`);
	});
	it("should return a list of episode lengths if it receives an array", () => {
		expect(getEpisodeLength([240, 120, 10])).toMatchInlineSnapshot(
			`"about 4 hours, about 2 hours, 10 minutes"`
		);
	});
});
