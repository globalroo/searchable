import React from "react";

import { getSmallPosterImage } from "src/tmdb-service/tmdb-config";
import { useImageLoader } from "../hooks/image-loader";

export const SideBar = ({ poster_path, title, children }) => {
	const [image] = useImageLoader(getSmallPosterImage(poster_path));
	return (
		<aside className="sidebar">
			<img src={image} alt={title} />
			{children}
		</aside>
	);
};
