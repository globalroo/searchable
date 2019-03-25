import { MEDIA_TYPE } from "src/tmdb-service/tmdb-api.js";
import { navigate } from "@reach/router";

export const navigateTo = ({ media_type, id }) => {
	switch (media_type) {
		case MEDIA_TYPE.TV:
			navigate(`/tv/${id}`);
			break;
		case MEDIA_TYPE.PERSON:
			navigate(`/person/${id}`);
			break;
		case MEDIA_TYPE.MOVIE:
			navigate(`/movie/${id}`);
			break;
		default:
			console.error("Can't handle this type of media!");
	}
};
