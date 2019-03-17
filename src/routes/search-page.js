import React from "react";
import { Link } from "@reach/router";

export const Search = () => {
	return (
		<ul>
			<li>
				<Link to="movie/226486">Deep link Movie</Link>
			</li>
			<li>
				<Link to="person/60073">Deep link Person</Link>
			</li>
			<li>
				<Link to="tv/1399">Deep link TV</Link>
			</li>
		</ul>
	);
};
