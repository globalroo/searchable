import React from "react";

import { getSmallPosterImage } from "src/tmdb-service/tmdb-config";
import { useImageLoader } from "src/hooks/image-loader";
import { navigateTo } from "../helpers/navigate";
import { GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const styles = {
	gridListTile: {
		height: "225px"
	},
	spacer: { padding: "5px" }
};

export const getTitle = asset => (asset.title ? asset.title : asset.name);

export const AssetScrollerTile = ({ asset }) => {
	const { poster_path } = asset;
	const [image] = useImageLoader(getSmallPosterImage(poster_path));
	const title = getTitle(asset);
	return (
		<GridListTile
			style={styles.spacer}
			onClick={() => navigateTo(asset)}
			className="pointer-hover"
		>
			<img src={image} alt={title} style={styles.gridListTile} />
			<GridListTileBar
				title={title}
				actionIcon={
					<IconButton>
						<StarBorderIcon />
					</IconButton>
				}
			/>
		</GridListTile>
	);
};
