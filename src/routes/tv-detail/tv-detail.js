import React from "react";
import { getTvById } from "src/tmdb-service/tmdb-api";
import { useByIdLoader } from "../../hooks/by-id-loader";

export const TvDetail = ({ id }) => {
	const { response } = useByIdLoader({ id, fetcher: getTvById });
	return <div>{JSON.stringify(response)}</div>;
};
