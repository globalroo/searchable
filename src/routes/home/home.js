import React, { useState } from "react";

import { AutoComplete } from "src/components/auto-complete";
import { Footer } from "src/components/footer";
import { TrendingSearches } from "src/components/trending";
import { AssetTile } from "src/components/asset-tile";

import "./home.css";

export const Home = () => {
	const [searchResults, setSearchResults] = useState([]);
	const populate = data => setSearchResults(data);

	return (
		<>
			<header className="home-header">
				<AutoComplete populate={populate} />
			</header>
			<div className="home-wrapper">
				{searchResults.map(tile => (
					<AssetTile key={tile.id} asset={tile} />
				))}
			</div>
			<footer className="home-footer">
				<TrendingSearches />
				<Footer />
			</footer>
		</>
	);
};
