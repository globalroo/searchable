import React from "react";
import { Link } from "@reach/router";
export const Footer = () => (
	<footer>
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
			<li>TODO: Image Loader / 404 handling, Person and TV routes, icons in search menu and this page</li>
			<li>TODO: Add Grid list search</li>
		</ul>
	</footer>
);
