import React from "react";

import { getTvById } from "src/tmdb-service/tmdb-api";
import { useByIdLoader } from "../../hooks/by-id-loader";
import { List, ListSubheader } from "@material-ui/core";

import { SideBar } from "src/components/side-bar";
import { TvCreatorList } from "./tv-creator-list";
import { TvMetaInfo } from "./tv-meta-info";

export const TvDetail = ({ id }) => {
	const { response, loading, error } = useByIdLoader({ id, fetcher: getTvById });
	const { payload } = response;

	if (loading) return null;
	if (error) return <div>Error</div>;
	if (!payload) return null;

	const { name, poster_path, created_by } = payload;

	return (
		<>
			<div className="wrapper">
				<SideBar poster_path={poster_path} title={name}>
					{created_by && created_by.length > 0 && (
						<List
							dense={true}
							subheader={<ListSubheader component="div">Creators:</ListSubheader>}
						>
							{created_by.map(({ id, name, profile_path }, ix) => (
								<TvCreatorList
									id={id}
									key={`creator_${id}_${ix}`}
									name={name}
									profile_path={profile_path}
								/>
							))}
						</List>
					)}
				</SideBar>
				<TvMetaInfo meta={payload} />
			</div>
		</>
	);
};
