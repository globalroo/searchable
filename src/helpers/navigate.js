import { MEDIA_TYPE } from "src/tmdb-service/tmdb-api.js";
import { navigate } from "@reach/router";

export const navigateTo = ({ media_type, id }) => {
	switch (media_type) {
		case MEDIA_TYPE.TV:
			navigate(`${process.env.PUBLIC_URL}/tv/${id}`);
			break;
		case MEDIA_TYPE.PERSON:
			navigate(`${process.env.PUBLIC_URL}/person/${id}`);
			break;
		case MEDIA_TYPE.MOVIE:
			navigate(`${process.env.PUBLIC_URL}/movie/${id}`);
			break;
		default:
			console.error("Can't handle this type of media!");
	}
};
