import React from "react";

import "./shared.css";

import { AssetTile } from "./asset-tile";
import { GridList } from "@material-ui/core";
import { MEDIA_TYPE } from "../tmdb-service/tmdb-api";

const styles = {
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		overflow: "hidden"
	},
	gridList: {
		flexWrap: "nowrap",
		transform: "translateZ(0)",
		paddingTop: 3,
		paddingBottom: 3
	}
};

export const AssetScroller = ({ assets, media_type = MEDIA_TYPE.MOVIE }) => {
	return (
		<div style={styles.root}>
			<GridList style={styles.gridList}>
				{assets.map((asset, ix) => {
					const mappedAsset = asset.media_type ? asset : { ...asset, media_type };
					return <AssetTile asset={mappedAsset} key={`${asset.id}_${ix}`} />;
				})}
			</GridList>
		</div>
	);
};
