import React from "react";
import { AppBar } from "@material-ui/core";
import { Link } from "@reach/router";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const styles = {
	titleLink: { color: "white", textDecoration: "none" },
	appBarHeader: { background: "black" }
};

export const NavBar = ({ title }) => {
	return (
		<AppBar position="static" style={styles.appBarHeader}>
			<Toolbar>
				<Typography variant="title">
					<Link style={styles.titleLink} to="/">
						{title}
					</Link>
				</Typography>
			</Toolbar>
		</AppBar>
	);
};
