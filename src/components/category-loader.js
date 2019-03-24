import React from "react";

import { useByIdLoader } from "src/hooks/by-id-loader";

const MAX_ASSETS = 15;

export const CategoryLoader = ({ fetcher, id, title = "", children, ...props }) => {
	const { loading, error, response } = useByIdLoader({
		id,
		fetcher
	});

	if (loading) return null;
	if (error) return <div>Can't load Category: {`${title}`}</div>;

	const { payload = {} } = response;
	const { results = [] } = payload;

	return (
		<div {...props}>
			<h1>{title}</h1>
			{children(results.slice(0, MAX_ASSETS))}
		</div>
	);
};
