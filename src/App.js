import React from "react";
import "reset-css";
import "./App.css";

import { Router } from "@reach/router";
import { NavBar } from "src/components/navbar";
import { PersonDetail } from "src/routes/person-detail/person-detail";
import { MovieDetail } from "src/routes/movie-detail/movie-detail";
import { TvDetail } from "src/routes/tv-detail/tv-detail";
import { Home } from "src/routes/home/home";

const App = () => {
	return (
		<>
			<NavBar title="TMDB Endpoints and search" />
			<Router>
				<Home path="/" />
				<PersonDetail path="person/:id" />
				<MovieDetail path="movie/:id" />
				<TvDetail path="tv/:id" />
			</Router>
		</>
	);
};

export default App;
