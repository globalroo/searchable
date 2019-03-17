import React from "react";
import { MenuItem } from "@material-ui/core";

export const SearchItem = ({ item, index, highlighted, selected, ...props }) => (
	<MenuItem {...props} selected={highlighted} component="div">
		{`${item.media_type}${item.title || item.name}`}
	</MenuItem>
);
