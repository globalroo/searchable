import React from "react";
import { getMovieById } from "src/tmdb-service/tmdb-api";
import { useByIdLoader } from "../hooks/by-id-loader";

export const MovieDetail = ({ id }) => {
	const [detail] = useByIdLoader({ id, fetcher: getMovieById });
	return <div>{JSON.stringify(detail)}</div>;
};
