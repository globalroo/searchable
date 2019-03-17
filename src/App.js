import React from "react";
import "reset-css";
import "./App.css";

import { Router } from "@reach/router";
import { PersonDetail } from "src/routes/person-detail";
import { MovieDetail } from "src/routes/movie-detail";
import { TvDetail } from "src/routes/tv-detail";
import { Search } from "src/routes/search-page";

const App = () => {
	return (
		<Router>
			<Search path="/" />
			<PersonDetail path="person/:id" />
			<MovieDetail path="movie/:id" />
			<TvDetail path="tv/:id" />
		</Router>
	);
};

export default App;
