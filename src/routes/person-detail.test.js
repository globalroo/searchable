import React from "react";
import { render } from "react-testing-library";

import { PersonDetail } from "./person-detail";

const mockPerson = {
	birthday: "1989-10-01",
	known_for_department: "Acting",
	deathday: null,
	id: 60073,
	name: "Brie Larson",
	also_known_as: [
		"Brianne Sidonie Desaulniers",
		"بري لارسون",
		"브리 라슨",
		"ブリー・ラーソン",
		"Бри Ларсон",
		"บรี ลาร์สัน",
		"布丽·拉尔森",
		"Брі Ларсон"
	],
	gender: 1,
	biography:
		"Brianne Sidonie Desaulniers (born October 1, 1989), known professionally as Brie Larson, is an American actress, director, and singer. Born in Sacramento, California, Larson was home-schooled before she studied acting at the American Conservatory Theater. She began her acting career in television, appearing as a regular on the 2001 sitcom Raising Dad, for which she was nominated for a Young Artist Award.\n\nAs a teenager, Larson had brief roles in the 2004 films 13 Going on 30 and Sleepover. Her performance in the comedy film Hoot (2006) was praised, and she subsequently played supporting roles in the films Greenberg (2010), Scott Pilgrim vs. the World (2010), 21 Jump Street (2012), and Don Jon (2013). From 2009 to 2011, Larson featured as a rebellious teenager in the television series United States of Tara.\n\nLarson's breakthrough role came with the independent drama Short Term 12 (2013), for which she received critical acclaim. Further success came in 2015 when she starred in Room, an acclaimed drama based on Emma Donoghue's novel of the same name. She won several awards for her portrayal of a troubled mother kidnap victim in the film, including the Academy Award, BAFTA Award, Critic's Choice Award, Golden Globe Award, Screen Actors Guild Award and Canadian Screen Award for Best Actress. In 2017, she starred as a war photographer in the adventure film Kong: Skull Island, her highest-grossing release.",
	popularity: 41.58,
	place_of_birth: "Sacramento, California, USA",
	profile_path: "/buGq7fC5iiLV5VvkdW4ui42k1yT.jpg",
	adult: false,
	imdb_id: "nm0488953",
	homepage: null
};

jest.mock("src/hooks/by-id-loader", () => ({
	useByIdLoader: () => ({ response: mockPerson })
}));

describe("Person Detail tests", () => {
	it("Renders a Person detail component", async () => {
		const { container } = await render(<PersonDetail id={mockPerson.id} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
