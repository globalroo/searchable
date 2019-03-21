import React from "react";
import { CastMembers } from "src/components/cast-members";
import { Divider, Typography } from "@material-ui/core";
import { format } from "date-fns";

export const MetaInfo = ({ tagline, overview, title, cast, release_date }) => (
	<article className="content">
		<h1 className="bold-header-uppercase">
			{title} [{format(release_date, "YYYY")}]
		</h1>
		<h1>{tagline}</h1>
		<div className="content-row-1">
			<Typography>{overview}</Typography>
		</div>
		<Divider />
		<div className="content-row-2">
			<CastMembers cast={cast} />
		</div>
		<Divider />
	</article>
);
