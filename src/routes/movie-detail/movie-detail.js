import React from "react";

import "./movie-detail.css";
import { AssetScroller } from "src/components/asset-scroller";
import { getMovieById } from "src/tmdb-service/tmdb-api";
import { MEDIA_TYPE } from "../../tmdb-service/tmdb-api";
import { MetaInfo } from "./movie-meta-info";
import { SideBar } from "src/components/side-bar";
import { useByIdLoader } from "src/hooks/by-id-loader";

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
					<AssetScroller
						assets={payload.recommendations.results}
						link_type={MEDIA_TYPE.MOVIE}
					/>
				</footer>
			)}
		</div>
	);
};
