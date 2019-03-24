import React from "react";
import { getStandardDateFormat } from "src/helpers/date";
import { differenceInYears } from "date-fns";
import Alive from "@material-ui/icons/Accessibility";
import Dead from "@material-ui/icons/MoodBad";

export const Age = ({ birthday, deathday }) => {
	const birthDate = new Date(birthday);
	const toDay = deathday ? deathday : new Date();
	return (
		<div style={styles.container}>
			{deathday ? <Dead /> : <Alive />}
			{getStandardDateFormat(birthDate)}
			{" - "}
			{deathday && getStandardDateFormat(toDay)} ({differenceInYears(toDay, birthDate)} years
			old)
		</div>
	);
};

const styles = {
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		fontSize: "smaller"
	}
};
