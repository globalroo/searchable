import React from "react";
import { differenceInYears, format } from "date-fns";
import Accessibility from "@material-ui/icons/Accessibility";

const styles = {
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		fontSize: "smaller"
	}
};

export const Age = ({ birthday }) => {
	const birthDate = new Date(birthday);
	return (
		<div style={styles.container}>
			<Accessibility />
			{format(birthDate, "dddd Do MMMM YYYY")} ({differenceInYears(new Date(), birthDate)}{" "}
			years old)
		</div>
	);
};
