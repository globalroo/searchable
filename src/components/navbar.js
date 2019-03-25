import React from "react";
import { AppBar } from "@material-ui/core";
import { Link } from "@reach/router";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Home from "@material-ui/icons/Home";

const styles = {
	appBarHeader: { background: "black" },
	titleLink: { color: "white", textDecoration: "none" },
	titleColor: { color: "white" },
	titleContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	}
};

export const NavBar = ({ title }) => {
	return (
		<AppBar position="static" style={styles.appBarHeader}>
			<Toolbar>
				<Link style={styles.titleLink} to={`/`}>
					<div style={styles.titleContainer}>
						<Home />
						&nbsp;
						<Typography variant="title" style={styles.titleColor}>
							{title}
						</Typography>
					</div>
				</Link>
			</Toolbar>
		</AppBar>
	);
};
