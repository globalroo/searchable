import React from "react";
import PropTypes from "prop-types";
import { GridList, GridListTile, GridListTileBar, IconButton, withStyles } from "@material-ui/core";
//TODO: rationalise themeing
//TODO: if 1 space left in three col  make first one a double if 2 spaces, make first and last one a double and use the landscape image
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { getSmallPosterImage } from "src/tmdb-service/tmdb-config";

const styles = theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper
	},
	gridList: {
		transform: "translateZ(0)"
	},
	titleBar: {
		background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
	},
	icon: {
		color: "white"
	}
});

//TODO: highest scoring one has featured tile

function AdvancedGridList({ classes, movies }) {
	return (
		<GridList cellHeight={278} spacing={1} className={classes.gridList} cols={3}>
			{movies.map(tile => (
				<GridListTile key={tile.id} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
					<img src={getSmallPosterImage(tile.poster_path)} alt={tile.title} />
					<GridListTileBar
						title={tile.title}
						titlePosition="bottom"
						actionIcon={
							<IconButton className={classes.icon}>
								<StarBorderIcon />
							</IconButton>
						}
						actionPosition="left"
						className={classes.titleBar}
					/>
				</GridListTile>
			))}
		</GridList>
	);
}

AdvancedGridList.propTypes = {
	classes: PropTypes.object.isRequired,
	movies: PropTypes.array.isRequired
};

export const MovieList = withStyles(styles)(AdvancedGridList);
