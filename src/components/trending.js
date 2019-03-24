import React from "react";

import {
	getWeeklyTrendingMovies,
	getWeeklyTrendingPeople,
	getWeeklyTrendingTv
} from "src/tmdb-service/tmdb-api";

import { AssetScroller } from "src/components/asset-scroller";
import { CategoryLoader } from "src/components/category-loader";
import { Divider } from "src/components/divider";
import { MEDIA_TYPE } from "src/tmdb-service/tmdb-api";
import { PersonScroller } from "src/components/person-scroller";

export const TrendingPeople = () => (
	<CategoryLoader
		fetcher={getWeeklyTrendingPeople}
		title="Trending People"
		data-testid="trending-people"
	>
		{results => <PersonScroller cast={results} media_type={MEDIA_TYPE.PERSON} />}
	</CategoryLoader>
);

export const TrendingMovies = () => (
	<CategoryLoader
		fetcher={getWeeklyTrendingMovies}
		title="Trending Movies"
		data-testid="trending-movies"
	>
		{results => <AssetScroller assets={results} media_type={MEDIA_TYPE.MOVIE} />}
	</CategoryLoader>
);

export const TrendingTv = () => (
	<CategoryLoader fetcher={getWeeklyTrendingTv} title="Trending TV" data-testid="trending-tv">
		{results => <AssetScroller assets={results} media_type={MEDIA_TYPE.TV} />}
	</CategoryLoader>
);

export const TrendingSearches = () => (
	<>
		<TrendingPeople />
		<Divider spaceAfter />
		<TrendingMovies />
		<Divider spaceBefore spaceAfter />
		<TrendingTv />
		<Divider spaceBefore spaceAfter />
	</>
);
