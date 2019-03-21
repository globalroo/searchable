import React from "react";
import { getPersonCreditsById } from "src/tmdb-service/tmdb-api";
import { AssetScroller } from "src/components/asset-scroller";

import { useByIdLoader } from "../../hooks/by-id-loader";

export const PersonCredits = ({ id }) => {
	const { response } = useByIdLoader({ id, fetcher: getPersonCreditsById });
	const { payload } = response;

	if (!payload) return null;

	const { cast } = payload;

	return (
		<div className="content-row-2">
			<h1>Other Credits</h1>
			<AssetScroller assets={cast} />
		</div>
	);
};
