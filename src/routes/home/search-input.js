import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Close from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";

const styles = {
	root: {
		display: "flex",
		alignItems: "center"
	},
	input: {
		marginLeft: 10,
		flex: 1
	},
	iconButton: {
		padding: 10
	},
	divider: {
		width: 1,
		height: 28,
		margin: 4
	}
};

function BasicSearchInput({ classes, value, onChange, onSearch, ...props }) {
	return (
		<Paper className={classes.root}>
			<InputBase className={classes.input} value={value} onChange={onChange} {...props} />
			{value.length > 0 && (
				<IconButton
					className={classes.iconButton}
					aria-label="Clear"
					onClick={() => onChange({ target: { value: "" } })}
				>
					<Close />
				</IconButton>
			)}
			<Divider className={classes.divider} />
			<IconButton
				color="primary"
				className={classes.iconButton}
				aria-label="Search"
				onClick={onSearch}
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}

BasicSearchInput.propTypes = {
	classes: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	onSearch: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
};

export const SearchInput = withStyles(styles)(BasicSearchInput);
