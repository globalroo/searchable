import React from "react";
import { getPersonById } from "src/tmdb-service/tmdb-api";
import { useByIdLoader } from "../hooks/by-id-loader";

export const PersonDetail = ({ id }) => {
	const [detail] = useByIdLoader({ id, fetcher: getPersonById });
	return <div>{JSON.stringify(detail)}</div>;
};
