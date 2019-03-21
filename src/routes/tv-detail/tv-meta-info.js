import React from "react";

import { CastMembers } from "src/components/cast-members";
import { Divider, Typography } from "@material-ui/core";
import TvData from "./tv-data";

export const TvMetaInfo = ({ meta }) => {
	const {
		name,
		credits,
		episode_run_time,
		first_air_date,
		last_air_date,
		number_of_episodes,
		number_of_seasons,
		overview,
		status
	} = meta;

	return (
		<article className="content">
			<h1 className="bold-header-uppercase">{name}</h1>
			<div className="content-row-1">
				<Typography>{overview}</Typography>
				<TvData
					first_air_date={first_air_date}
					last_air_date={last_air_date}
					number_of_episodes={number_of_episodes}
					number_of_seasons={number_of_seasons}
					episode_run_time={episode_run_time}
					status={status}
				/>
			</div>
			{credits.cast && credits.cast.length > 0 && (
				<>
					<Divider />
					<div className="content-row-2">
						<CastMembers cast={credits.cast} />
					</div>
					<Divider />
				</>
			)}
		</article>
	);
};
