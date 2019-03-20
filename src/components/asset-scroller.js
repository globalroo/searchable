import React from "react";

import "./shared.css";

import { AssetScrollerTile } from "./asset-scroller-tile";
import { GridList } from "@material-ui/core";

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
	}
};

export const AssetScroller = ({ assets, link_type }) => {
	return (
		<div style={styles.root}>
			<GridList style={styles.gridList}>
				{assets.map((asset, ix) => {
					const mappedAsset = link_type ? { ...asset, media_type: link_type } : asset;
					return <AssetScrollerTile asset={mappedAsset} key={`${asset.id}_${ix}`} />;
				})}
			</GridList>
		</div>
	);
};
