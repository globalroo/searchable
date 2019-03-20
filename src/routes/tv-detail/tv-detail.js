import React from "react";
import { getTvById } from "src/tmdb-service/tmdb-api";
import { useByIdLoader } from "../../hooks/by-id-loader";
import { Typography, Divider } from "@material-ui/core";
import { SideBar } from "src/components/side-bar";
import { getLargeImage } from "src/tmdb-service/tmdb-config";
import "./tv-details.css";
export const TvDetail = ({ id }) => {
	const { response, loading, error } = useByIdLoader({ id, fetcher: getTvById });

	const { payload } = response;

	if (loading) return null;
	if (error) return <div>Error</div>;
	if (!payload) return null;

	const { name, overview, backdrop_path, poster_path } = payload;
	return (
		<>
			<div className="wrapper">
				<header className="header">
					{name} - may need to handle seasons - new endpoint?
				</header>

				<SideBar poster_path={poster_path} title={name} />
				<article className="content">
					<h1 className="bold-header-uppercase">About</h1>
					<Divider />
					<br />
					<div className="content-row-1">
						<Typography>{overview}</Typography>
					</div>
					<br />
					<Divider />
				</article>
				<footer className="footer">{JSON.stringify(payload)}</footer>
			</div>
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					zIndex: -1,
					opacity: 0.3
				}}
			>
				<img
					style={{ height: "100vh", width: "100vw" }}
					alt={"tt"}
					src={getLargeImage(backdrop_path)}
				/>
			</div>
		</>
	);
	//return <div>{JSON.stringify(response)}</div>;
};
