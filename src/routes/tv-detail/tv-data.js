import React from "react";
import { getStandardDateFormat, getEpisodeLength } from "src/helpers/date";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const styles = theme => ({
	root: {
		width: "100%",
		marginTop: theme.spacing.unit * 3,
		overflowX: "auto"
	}
});

const SimpleTvData = ({
	classes,
	episode_run_time,
	first_air_date,
	last_air_date,
	number_of_episodes,
	number_of_seasons,
	status
}) => (
	<Paper className={classes.root}>
		<Table className={classes.table}>
			<TableBody>
				<TableRow>
					<TableCell component="th" scope="row">
						Number of Episodes
					</TableCell>
					<TableCell align="right">{number_of_episodes}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						Seasons
					</TableCell>
					<TableCell align="right">{number_of_seasons}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						Episode Length
					</TableCell>
					<TableCell align="right">{getEpisodeLength(episode_run_time)}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						First aired:
					</TableCell>
					<TableCell align="right">{getStandardDateFormat(first_air_date)}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						Last Aired:
					</TableCell>
					<TableCell align="right">{getStandardDateFormat(last_air_date)}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						Status
					</TableCell>
					<TableCell align="right">{status}</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	</Paper>
);

SimpleTvData.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTvData);
