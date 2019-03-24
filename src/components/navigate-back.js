import React from "react";
import { ArrowBack } from "@material-ui/icons";

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

const styles = {
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "flex-start"
	}
};
