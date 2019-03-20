import React from "react";

import { AssetScroller } from "src/components/asset-scroller";
import { getMovieById } from "src/tmdb-service/tmdb-api";
import { SideBar } from "src/components/side-bar";
import { MetaInfo } from "./meta-info";

import { useByIdLoader } from "src/hooks/by-id-loader";

import "./movie-detail.css";

export const MovieDetail = ({ id }) => {
	const { loading, error, response } = useByIdLoader({
		id,
		fetcher: getMovieById
	});

	const { payload } = response;

	if (loading) return null;
	if (error) return <div>Error</div>;
	if (!payload) return null;

	return (
		<div className="wrapper">
			<SideBar poster_path={payload.poster_path} title={payload.title} />
			<MetaInfo
				title={payload.title}
				release_date={payload.release_date}
				tagline={payload.tagline}
				overview={payload.overview}
				cast={payload.credits.cast}
			/>
			{payload.recommendations.total_results > 0 && (
				<footer className="footer">
					<h1>Recommendations</h1>
					<AssetScroller assets={payload.recommendations.results} />
				</footer>
			)}
		</div>
	);
};
