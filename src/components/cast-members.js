import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Avatar, GridList, Typography } from "@material-ui/core";
import { getSmallPosterImage } from "../tmdb-service/tmdb-config";
import { Link } from "@reach/router";

const styles = {
	bigAvatar: {
		margin: 10,
		width: 80,
		height: 80
	},
	castContainer: {
		display: "flex",
		flexDirection: "column"
	},
	gridList: {
		flexWrap: "nowrap",
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: "translateZ(0)"
	}
};

function ImageAvatars(props) {
	const { classes, cast } = props;
	return (
		<GridList className={classes.gridList}>
			{cast.map(member => (
				<div key={member.id} className={styles.castContainer}>
					<Link to={`/person/${member.id}`}>
						<Avatar
							alt={member.name}
							src={getSmallPosterImage(member.profile_path)}
							className={classes.bigAvatar}
						/>
					</Link>
					<Typography align="center">{member.name}</Typography>
					<Typography align="center" variant="caption">
						{member.character}
					</Typography>
				</div>
			))}
		</GridList>
	);
}

ImageAvatars.propTypes = {
	classes: PropTypes.object.isRequired
};

export const CastMembers = withStyles(styles)(ImageAvatars);
