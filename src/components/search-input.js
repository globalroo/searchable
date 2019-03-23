import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Close from "@material-ui/icons/Close";
import MaterialDivider from "@material-ui/core/Divider";
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

const ClearButton = ({ className, onClear }) => (
	<IconButton className={className} aria-label="Clear" onClick={onClear}>
		<Close />
	</IconButton>
);

const SearchButton = ({ className, onSearch }) => (
	<IconButton color="primary" className={className} aria-label="Search" onClick={onSearch}>
		<SearchIcon />
	</IconButton>
);

function BasicSearchInput({ classes, value, onChange, onClear, onSearch, ...props }) {
	return (
		<Paper className={classes.root}>
			<InputBase className={classes.input} value={value} onChange={onChange} {...props} />
			{value.length > 0 && <ClearButton onClear={onClear} className={classes.iconButton} />}
			<MaterialDivider className={classes.divider} />
			<SearchButton className={classes.iconButton} onSearch={onSearch} />
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
