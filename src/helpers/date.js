import format from "date-fns/format";
import distanceInWords from "date-fns/distance_in_words";

const minutesToMs = duration => duration * 1000 * 60;

const humanReadable = duration =>
	distanceInWords(0, minutesToMs(duration), { includeSeconds: true });

export const getStandardDateFormat = dateStr => format(dateStr, "dddd Do MMMM YYYY");

export const getEpisodeLength = episodeLength => {
	console.log(episodeLength);
	if (!episodeLength) return "Unknown";
	if (typeof episodeLength !== "string") {
		const mapped = episodeLength.map(duration => humanReadable(parseInt(duration)));
		return mapped.join(", ");
	}
	return humanReadable(episodeLength);
};
