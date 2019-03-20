import React, { useState } from "react";
import { AutoComplete } from "./auto-complete";
import { Footer } from "src/components/footer";
import { getSmallPosterImage } from "src/tmdb-service/tmdb-config";
import { navigateTo } from "../../helpers/navigate";
import "./home.css";

export const Home = () => {
	const [results, setResults] = useState([]);

	const populate = data => {
		setResults(data);
	};

	return (
		<>
			<header className="home-header">
				<AutoComplete populate={populate} />
			</header>
			<div className="home-wrapper">
				{results.map(tile => {
					const value = tile.name || tile.title;
					return (
						<div className="home-panel image-tile">
							<img
								style={{ width: "100%" }}
								src={getSmallPosterImage(tile.poster_path)}
								alt={value}
								onClick={() => navigateTo(tile)}
							/>
						</div>
					);
				})}
			</div>
			<footer className="home-footer">
				<Footer />
			</footer>
		</>
	);
};
