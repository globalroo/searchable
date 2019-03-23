import React from "react";
import { ArrowBack } from "@material-ui/icons";

const styles = {
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "flex-start"
	}
};

export const NavigateBackContainer = ({ children }) => {
	return (
		<div
			style={styles.container}
			className="pointer-hover"
			onClick={() => window.history.go(-1)}
		>
			<ArrowBack />
			{children}
		</div>
	);
};
