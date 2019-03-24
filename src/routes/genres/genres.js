import React, { useEffect, useState } from "react";

import { CategoryLoader } from "src/components/category-loader";
import { AssetScroller } from "src/components/asset-scroller";

import { NavigateBackContainer } from "src/components/navigate-back";
import { getDiscoverMoviesByGenreId } from "src/tmdb-service/tmdb-api";
import { getMovieGenres } from "src/tmdb-service/tmdb-api";

import "./genres.css";

export const GenreCategory = ({ id, name }) => {
	return (
		<CategoryLoader
			fetcher={getDiscoverMoviesByGenreId}
			title={name}
			id={id}
			data-testid={`genre-category-${id}`}
		>
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
			console.log(genres);
			setGenres(genres);
		});
	}, []);

	if (genres.length === 0) return <div>Loading...</div>;

	return (
		<div className="genres-wrapper">
			<NavigateBackContainer>
				<h1 className="bold-header-uppercase">Genres</h1>
			</NavigateBackContainer>
			<p>Most popular movies in each Genre</p>
			{genres.map(({ name, id }) => (
				<GenreCategory key={id} name={name} id={id} />
			))}
		</div>
	);
};
