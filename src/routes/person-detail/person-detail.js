import React from "react";

import { Age } from "src/components/age";
import { Divider } from "src/components/divider";
import { getPersonById } from "src/tmdb-service/tmdb-api";
import { PersonCredits } from "./person-credits";
import { PersonPictureScroller } from "./person-picture-scroller";
import { SideBar } from "src/components/side-bar";
import { Typography } from "@material-ui/core";
import { useByIdLoader } from "../../hooks/by-id-loader";
import { NavigateBackContainer } from "src/components/navigate-back";

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
				<NavigateBackContainer>{name}</NavigateBackContainer>
				<Age birthday={birthday} deathday={deathday} />
			</header>

			<SideBar poster_path={profile_path} title={name}>
				<PersonPictureScroller images={profiles} name={name} />
			</SideBar>

			<article className="content">
				<h1 className="bold-header-uppercase">Biography</h1>
				<Divider spaceAfter />
				<div className="content-row-1">
					<Typography>{biography || "No biography"}</Typography>
				</div>
				<Divider spaceBefore spaceAfter />
				<PersonCredits id={id} />
			</article>
		</div>
	);
};
