import React from "react";
import { AppBar } from "@material-ui/core";
import { Link } from "@reach/router";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export const NavBar = () => {
	return (
		<AppBar position="static" style={{ background: "black" }}>
			<Toolbar>
				<Typography variant="title">
					<Link style={{ color: "white", textDecoration: "none" }} to="/">
						TMDB Search
					</Link>
				</Typography>
			</Toolbar>
		</AppBar>
	);
};
