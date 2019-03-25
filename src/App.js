import React from "react";
import "reset-css";
import "./App.css";

import { Router } from "@reach/router";
import { NavBar } from "src/components/navbar";
import { PersonDetail } from "src/routes/person-detail/person-detail";
import { MovieDetail } from "src/routes/movie-detail/movie-detail";
import { TvDetail } from "src/routes/tv-detail/tv-detail";
import { Home } from "src/routes/home/home";
import { PopularMoviesByGenre } from "./routes/genres/genres";

const App = () => {
	return (
		<>
			<NavBar title="TMDB Endpoints and Search" />
			<Router>
				<Home path={`${process.env.PUBLIC_URL}/`} />
				<PersonDetail path={`${process.env.PUBLIC_URL}/person/:id`} />
				<MovieDetail path={`${process.env.PUBLIC_URL}/movie/:id`} />
				<TvDetail path={`${process.env.PUBLIC_URL}/tv/:id`} />
				<PopularMoviesByGenre path={`${process.env.PUBLIC_URL}/genres`} />
			</Router>
		</>
	);
};

export default App;
