import React, { useState } from "react";
import { AutoComplete } from "./auto-complete";
import { Footer } from "src/components/footer";
import { getSmallPosterImage } from "src/tmdb-service/tmdb-config";
import { navigateTo } from "../../helpers/navigate";
import { CategoryLoader } from "src/components/category-loader";
import { Divider } from "@material-ui/core";
import {
	getWeeklyTrendingTv,
	getWeeklyTrendingMovies,
	getWeeklyTrendingPeople
} from "src/tmdb-service/tmdb-api";
import "./home.css";
import { AssetScroller } from "src/components/asset-scroller";

// export const getDailyTrendingMovies = async () =>
// 	await safeFetchJson({
// 		url: getTrendingMoviesByDay()
// 	});

// export const getWeeklyTrendingMovies = async () =>
// 	await safeFetchJson({
// 		url: getTrendingMoviesByWeek()
// 	});
import { MEDIA_TYPE } from "src/tmdb-service/tmdb-api";
import { PersonScroller } from "../../components/person-scroller";
// const TrendingPeopleWeekly = () => {
// 	return null;
// 	return (
// 		<CategoryLoader fetcher={getTrendingPersonByWeek} title="Most searched people this week" />
// 	);
// };
const TrendingPeople = () => {
	return (
		<CategoryLoader fetcher={getWeeklyTrendingPeople} title="Trending People">
			{results => {
				return <PersonScroller cast={results} media_type={MEDIA_TYPE.PERSON} />;
			}}
		</CategoryLoader>
	);
};

const TrendingMovies = () => {
	return (
		<CategoryLoader fetcher={getWeeklyTrendingMovies} title="Trending Movies">
			{results => {
				return <AssetScroller assets={results} media_type={MEDIA_TYPE.MOVIE} />;
			}}
		</CategoryLoader>
	);
};

const TrendingTv = () => {
	return (
		<CategoryLoader fetcher={getWeeklyTrendingTv} title="Trending TV">
			{results => {
				return <AssetScroller assets={results} media_type={MEDIA_TYPE.TV} />;
			}}
		</CategoryLoader>
	);
};

const TrendingSearches = () => (
	<>
		<Divider />
		<br />
		<TrendingPeople />
		<Divider />
		<br />
		<TrendingMovies />
		<br />
		<Divider />
		<br />
		<TrendingTv />
		<br />
	</>
);

export const Home = () => {
	const [results, setResults] = useState([]);

	const populate = data => {
		setResults(data);
	};

	return (
		<>
			<header className="home-header">
				<AutoComplete populate={populate} />
			</header>
			<div className="home-wrapper">
				{results.map(tile => {
					const value = tile.name || tile.title;
					return (
						<div key={tile.id} className="home-panel image-tile">
							<img
								style={{ width: "100%" }}
								src={getSmallPosterImage(tile.poster_path)}
								alt={value}
								onClick={() => navigateTo(tile)}
							/>
						</div>
					);
				})}
			</div>
			<footer className="home-footer">
				<TrendingSearches />
				<Footer />
			</footer>
		</>
	);
};
