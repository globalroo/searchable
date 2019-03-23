import React, { useEffect, useState } from "react";

import { CategoryLoader } from "src/components/category-loader";
import { AssetScroller } from "src/components/asset-scroller";

import { NavigateBack } from "src/components/navigate-back";
import { getDiscoverMoviesByGenreId } from "src/tmdb-service/tmdb-api";
import { getMovieGenres } from "src/tmdb-service/tmdb-api";

import "./genres.css";

const GenreCategory = ({ id, name }) => {
	return (
		<CategoryLoader fetcher={getDiscoverMoviesByGenreId} title={name} id={id}>
			{results => (
				<div className="spacer">
					<AssetScroller assets={results} />
				</div>
			)}
		</CategoryLoader>
	);
};

export const PopularMoviesByGenre = () => {
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		getMovieGenres().then(({ payload }) => {
			const { genres } = payload;
			setGenres(genres);
		});
	}, []);

	if (genres.length === 0) return <div>Loading...</div>;

	return (
		<div className="genres-wrapper">
			<NavigateBack />
			<h1 className="bold-header-uppercase">Genres</h1>
			<p>Most popular movies in each Genre</p>
			{genres.map(({ name, id }) => (
				<GenreCategory name={name} id={id} />
			))}
		</div>
	);
};
