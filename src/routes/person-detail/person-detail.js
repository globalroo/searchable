import React from "react";
import { getPersonById, getPersonCreditsById } from "src/tmdb-service/tmdb-api";
import { getSmallPosterImage } from "src/tmdb-service/tmdb-config";
import { AssetScroller } from "src/components/asset-scroller";
import { useByIdLoader } from "../../hooks/by-id-loader";
import { SideBar } from "src/components/side-bar";
import { Age } from "src/components/age";
import { Typography, Divider, GridList } from "@material-ui/core";

const styles = {
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		overflow: "hidden"
	},
	gridList: {
		flexWrap: "nowrap",
		transform: "translateZ(0)",
		width: "300px"
	},
	gridListTile: {
		width: "110px"
	},
	spacer: { padding: "5px" }
};

const NaivePictureScroller = ({ profiles = [], name }) => {
	if (profiles.length === 0) return null;
	return (
		<GridList style={styles.gridList} component="div">
			{profiles.map((member, ix) => (
				<div key={`${member.id}_${ix}`}>
					<img
						src={getSmallPosterImage(member.file_path)}
						alt={name}
						style={styles.gridListTile}
					/>
					<Typography align="center">{member.name}</Typography>
					<Typography align="center" variant="caption">
						{member.character}
					</Typography>
				</div>
			))}
		</GridList>
	);
};
const OtherCredits = ({ id }) => {
	const { response } = useByIdLoader({ id, fetcher: getPersonCreditsById });
	const { payload } = response;

	if (!payload) return null;

	const { cast } = payload;

	return (
		<div className="content-row-2">
			<h1>Other Credits</h1>
			<AssetScroller assets={cast} />
		</div>
	);
};
export const PersonDetail = ({ id }) => {
	const { response, error, loading } = useByIdLoader({ id, fetcher: getPersonById });

	const { payload } = response;

	if (loading) return null;
	if (error) return <div>Error</div>;
	if (!payload) return null;

	const { birthday, name, biography, profile_path, images, deathday } = payload;

	const { profiles } = images;
	return (
		<div className="wrapper">
			<header className="header">
				{name} <Age birthday={birthday} deathday={deathday} />
			</header>

			<SideBar poster_path={profile_path} title={name} images={images.profiles}>
				<NaivePictureScroller profiles={profiles} name={name} />
			</SideBar>

			<article className="content">
				<h1 className="bold-header-uppercase">Biography</h1>
				<Divider />
				<br />
				<div className="content-row-1">
					<Typography>{biography}</Typography>
				</div>
				<br />
				<Divider />
				<br />
				<OtherCredits id={id} />
			</article>
		</div>
	);
};
