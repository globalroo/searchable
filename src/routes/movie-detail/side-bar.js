import React from "react";

import { getSmallPosterImage } from "src/tmdb-service/tmdb-config";

export const SideBar = ({ poster_path, title }) => (
	<aside className="sidebar">
		<img src={getSmallPosterImage(poster_path)} alt={title} />
	</aside>
);
