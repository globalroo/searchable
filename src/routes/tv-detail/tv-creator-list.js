import React from "react";

import { getSmallPosterImage } from "src/tmdb-service/tmdb-config";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import { MEDIA_TYPE } from "src/tmdb-service/tmdb-api";
import { navigateTo } from "src/helpers/navigate";
import { useImageLoader } from "src/hooks/image-loader";

export const TvCreatorList = ({ id, name, profile_path }) => {
	const [image] = useImageLoader(getSmallPosterImage(profile_path));
	return (
		<ListItem
			key={id}
			alignItems="center"
			className={"pointer-hover"}
			data-testid={`tv-creator-${id}`}
			onClick={() => navigateTo({ media_type: MEDIA_TYPE.PERSON, id })}
		>
			<ListItemAvatar>
				<Avatar style={styles.avatar} alt="name" src={image} />
			</ListItemAvatar>
			<ListItemText primary={name} />
		</ListItem>
	);
};

const styles = {
	avatar: {
		width: 70,
		height: 70
	}
};
