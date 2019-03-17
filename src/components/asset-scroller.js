import React from "react";
import PropTypes from "prop-types";
import { withStyles, GridList, GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Link } from "@reach/router";

import { getSmallPosterImage } from "src/tmdb-service/tmdb-config";

const styles = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden"
	},
	gridList: {
		flexWrap: "nowrap",
		transform: "translateZ(0)"
	},
	title: {
		color: theme.palette.primary.light
	},
	titleBar: {
		background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
	}
});

function SingleLineGridList(props) {
	const { classes, assets } = props;

	return (
		<div className={classes.root}>
			<GridList className={classes.gridList} cols={2.5}>
				{assets.map(movie => (
					<Link key={movie.id} to={`/movie/${movie.id}`}>
						<GridListTile>
							<img src={getSmallPosterImage(movie.backdrop_path)} alt={movie.title} />
							<GridListTileBar
								title={movie.title}
								actionIcon={
									<IconButton>
										<StarBorderIcon className={classes.title} />
									</IconButton>
								}
							/>
						</GridListTile>
					</Link>
				))}
			</GridList>
		</div>
	);
}

SingleLineGridList.propTypes = {
	classes: PropTypes.object.isRequired
};

export const AssetScroller = withStyles(styles)(SingleLineGridList);
