import React from "react";
import { MenuItem } from "@material-ui/core";
import { Movie, Tv, Person } from "@material-ui/icons/";
import { MEDIA_TYPE } from "src/tmdb-service/tmdb-api.js";
import { Typography } from "@material-ui/core";

const getAutoCompleteItemIcon = media_type => {
	switch (media_type) {
		case MEDIA_TYPE.MOVIE:
			return <Movie />;
		case MEDIA_TYPE.TV:
			return <Tv />;
		case MEDIA_TYPE.PERSON:
			return <Person />;
		default:
			return null;
	}
};

export const AutoCompleteItem = ({ item, index, highlighted, selected, ...props }) => (
	<MenuItem {...props} selected={highlighted} component="div">
		{getAutoCompleteItemIcon(item.media_type)}
		<Typography>{`${item.title || item.name}`}</Typography>
	</MenuItem>
);
