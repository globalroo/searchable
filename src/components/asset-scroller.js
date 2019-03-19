import React from "react";
import { GridList, GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import { Link } from "@reach/router";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import { getSmallPosterImage } from "src/tmdb-service/tmdb-config";
import { useImageLoader } from "src/hooks/image-loader";
const styles = {
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		overflow: "hidden"
	},
	gridList: {
		flexWrap: "nowrap",
		transform: "translateZ(0)"
	},
	gridListTile: {
		height: "225px"
	},
	spacer: { padding: "5px" }
};

const GridListAsset = ({ asset }) => {
	const { poster_path, id, title } = asset;
	const [image] = useImageLoader(getSmallPosterImage(poster_path));
	return (
		<Link key={id} to={`/movie/${id}`}>
			<GridListTile style={styles.spacer}>
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
		</Link>
	);
};

export const AssetScroller = ({ assets }) => {
	return (
		<div style={styles.root}>
			<GridList style={styles.gridList} cols={2.5}>
				{assets.map((asset, ix) => (
					<GridListAsset asset={asset} index={ix} key={asset.id} />
				))}
			</GridList>
		</div>
	);
};
