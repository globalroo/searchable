import React from "react";

import { getSmallPosterImage } from "src/tmdb-service/tmdb-config";
import { useImageLoader } from "src/hooks/image-loader";
import { navigateTo } from "src/helpers/navigate";
import { GridListTile, GridListTileBar } from "@material-ui/core";

const styles = {
	gridListTile: {
		height: "225px",
		width: "150px"
	},
	spacer: { padding: "5px" }
};

export const getTitle = asset => (asset.title ? asset.title : asset.name);
export const getImageSrc = asset => (asset.poster_path ? asset.poster_path : asset.profile_path);

export const AssetTile = ({ asset }) => {
	const imageSrc = getImageSrc(asset);
	const [image] = useImageLoader(getSmallPosterImage(imageSrc));
	const title = getTitle(asset);
	return (
		<GridListTile
			style={{ ...styles.spacer, ...styles.gridListTile }}
			onClick={() => navigateTo(asset)}
			className="pointer-hover image-tile"
			component="div"
		>
			<img src={image} alt={title} />
			<GridListTileBar title={title} />
		</GridListTile>
	);
};
