import React from "react";
import "reset-css";
import "./App.css";

import { Router, Link } from "@reach/router";

import { PersonDetail } from "src/routes/person-detail";
import { MovieDetail } from "src/routes/movie-detail";
import { TvDetail } from "src/routes/tv-detail";

const Home = () => {
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
const App = () => {
	return (
		<Router>
			<Home path="/" />
			<PersonDetail path="person/:id" />
			<MovieDetail path="movie/:id" />
			<TvDetail path="tv/:id" />
		</Router>
	);
};

export default App;
