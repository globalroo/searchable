import React from "react";
import { Divider, Typography } from "@material-ui/core";

import { AssetScroller } from "src/components/asset-scroller";
import { CastMembers } from "src/components/cast-members";
import { getMovieById } from "src/tmdb-service/tmdb-api";
import { getSmallPosterImage } from "src/tmdb-service/tmdb-config";
import { useByIdLoader } from "../hooks/by-id-loader";

import "./movie-detail-style.css";

export const MovieDetail = ({ id }) => {
	const { loading, error, response } = useByIdLoader({ id, fetcher: getMovieById });
	const { payload } = response;

	//TODO: Make Loading and Error components...
	if (loading) return <div>Loading</div>;
	if (error) return <div>error</div>;

	//TODO: Break out into smaller components
	return (
		<div>
			{payload ? (
				<div className="wrapper">
					<aside className="sidebar">
						<img src={getSmallPosterImage(payload.poster_path)} alt={payload.title} />
					</aside>
					<article className="content">
						<h1 className="bold-header-uppercase">{payload.title}</h1>
						<h1>{payload.tagline}</h1>
						<div className="content-row-1">
							<Typography>{payload.overview}</Typography>
						</div>
						<Divider />
						<div className="content-row-2">
							<CastMembers cast={payload.credits.cast} />
						</div>
						<Divider />
					</article>
					{payload.recommendations.total_results > 0 && (
						<footer className="footer">
							<h1>Recommendations</h1>
							<AssetScroller assets={payload.recommendations.results} />
						</footer>
					)}
				</div>
			) : null}
		</div>
	);
};
