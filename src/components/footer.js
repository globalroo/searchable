import React from "react";
import { Link } from "@reach/router";

export const Footer = () => (
	<footer className="small-text">
		<h5>Examples:</h5>
		<hr />
		<Link to="movie/299536">Deep link Movie</Link> |{" "}
		<Link to="person/60073">Deep link Alive Actor</Link> |{" "}
		<Link to="person/194">Deep link Deceased Actor</Link> |{" "}
		<Link to="tv/1399">Deep link TV</Link> |{" "}
		<Link to="/genres">Most popular movies by Genre</Link>
	</footer>
);
