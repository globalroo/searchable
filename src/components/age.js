import React from "react";
import { differenceInYears, format } from "date-fns";
import Accessibility from "@material-ui/icons/Accessibility";
import MoodBad from "@material-ui/icons/MoodBad";
const styles = {
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		fontSize: "smaller"
	}
};

export const Age = ({ birthday, deathday }) => {
	const birthDate = new Date(birthday);
	const toDay = deathday ? deathday : new Date();
	return (
		<div style={styles.container}>
			{deathday ? <MoodBad /> : <Accessibility />}
			{format(birthDate, "dddd Do MMMM YYYY")}
			{" - "}
			{deathday && format(toDay, "dddd Do MMMM YYYY")} ({differenceInYears(toDay, birthDate)}{" "}
			years old)
		</div>
	);
};
