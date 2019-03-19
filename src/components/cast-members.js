import React from "react";

import { Avatar, GridList, Typography } from "@material-ui/core";
import { getSmallPosterImage } from "../tmdb-service/tmdb-config";
import { Link } from "@reach/router";
import { useImageLoader } from "../hooks/image-loader";

const styles = {
	avatar: {
		width: 80,
		height: 80,
		margin: 10
	},
	castContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	gridList: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "nowrap",
		transform: "translateZ(0)"
	}
};

const CastImage = ({ id, name, profile_path }) => {
	const [image] = useImageLoader(getSmallPosterImage(profile_path));

	return (
		<Link to={`/person/${id}`}>
			<Avatar alt={name} srcSet={image} style={styles.avatar} />
		</Link>
	);
};

export const CastMembers = ({ cast }) => {
	return (
		<GridList style={styles.gridList}>
			{cast.map(member => (
				<div key={member.id} style={styles.castContainer}>
					<CastImage
						name={member.name}
						profile_path={member.profile_path}
						id={member.id}
					/>
					<Typography align="center">{member.name}</Typography>
					<Typography align="center" variant="caption">
						{member.character}
					</Typography>
				</div>
			))}
		</GridList>
	);
};
