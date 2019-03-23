import React from "react";
import { Divider } from "src/components/divider";
import { PersonScroller } from "src/components/person-scroller";
import { NavigateBackContainer } from "src/components/navigate-back";
import { Typography } from "@material-ui/core";

import { format } from "date-fns";

export const MetaInfo = ({ tagline, overview, title, cast, release_date }) => (
	<article className="content">
		<NavigateBackContainer>
			<h1 className="bold-header-uppercase">
				{title} [{format(release_date, "YYYY")}]
			</h1>
		</NavigateBackContainer>

		<div className="content-row-1">
			<h1>{tagline}</h1>
			<Typography>{overview}</Typography>
		</div>
		<Divider />
		<div className="content-row-2">
			<PersonScroller cast={cast} />
		</div>
		<Divider />
	</article>
);
