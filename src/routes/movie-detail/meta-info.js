import React from "react";
import { Divider, Typography } from "@material-ui/core";
import { CastMembers } from "src/components/cast-members";

export const MetaInfo = ({ tagline, overview, title, cast }) => (
	<article className="content">
		<h1 className="bold-header-uppercase">{title}</h1>
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
