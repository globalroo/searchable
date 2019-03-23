import React from "react";
import { getSmallPosterImage } from "src/tmdb-service/tmdb-config";
import { GridList } from "@material-ui/core";
import { useImageLoader } from "src/hooks/image-loader";

const styles = {
	gridList: {
		flexWrap: "nowrap",
		transform: "translateZ(0)",
		width: "302px",
		paddingTop: "3px"
	},
	gridListTile: {
		width: "110px"
	},
	spacer: {
		padding: 2
	}
};
const PersonImage = ({ member, name, imgKey }) => {
	const [image] = useImageLoader(getSmallPosterImage(member[`${imgKey}`]));
	return (
		<div style={styles.spacer}>
			<img src={image} alt={name} className="undecorated-image" style={styles.gridListTile} />
		</div>
	);
};

export const PersonPictureScroller = ({ images = [], name, imgKey = "file_path" }) => {
	if (images.length <= 1) return null;
	return (
		<GridList style={styles.gridList} component="div">
			{images.map((member, ix) => (
				<PersonImage
					key={`${member.id}_${ix}`}
					member={member}
					ix={ix}
					name={name}
					imgKey="file_path"
				/>
			))}
		</GridList>
	);
};
