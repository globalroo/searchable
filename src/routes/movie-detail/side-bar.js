import React from "react";
import { useImageLoader } from "src/hooks/image-loader";
import { getSmallPosterImage } from "src/tmdb-service/tmdb-config";

export const SideBar = ({ poster_path, title }) => {
	const [image] = useImageLoader(getSmallPosterImage(poster_path));
	return (
		<aside className="sidebar">
			<img src={image} alt={title} />
		</aside>
	);
};
