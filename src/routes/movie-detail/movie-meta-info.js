import React from "react";
import { PersonScroller } from "src/components/person-scroller";
import { NavigateBackContainer } from "src/components/navigate-back";
import { Divider, Typography } from "@material-ui/core";

import { format } from "date-fns";

export const MetaInfo = ({ tagline, overview, title, cast, release_date }) => (
	<article className="content">
		<h1 className="bold-header-uppercase">
			<NavigateBackContainer>
				{title} [{format(release_date, "YYYY")}]
			</NavigateBackContainer>
		</h1>
		<h1>{tagline}</h1>
		<div className="content-row-1">
			<Typography>{overview}</Typography>
		</div>
		<Divider />
		<div className="content-row-2">
			<PersonScroller cast={cast} />
		</div>
		<Divider />
	</article>
);
