import React, { useEffect, useState, useRef } from "react";
import Downshift from "downshift";
import { Paper } from "@material-ui/core";
import { getSearchMultiResults } from "src/tmdb-service/tmdb-api.js";
import { navigateTo } from "src/helpers/navigate";
import { AutoCompleteItem } from "./auto-complete-item";
import { SearchInput } from "./search-input";

const DEBOUNCE_TIME = 400; //ms
const MINIMUM_SEARCH = 3;

export const AutoComplete = ({ populate }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [results, setResults] = useState([]);

	const debounce = useRef();

	useEffect(() => {
		clearTimeout(debounce.current);
		debounce.current = setTimeout(() => {
			setIsOpen(false);
			if (searchTerm.length === 0) {
				setResults([]);
				populate([]);
			} else if (searchTerm.length >= MINIMUM_SEARCH) {
				getSearchMultiResults(searchTerm).then(({ payload }) => {
					setIsOpen(true);
					setResults(() => payload.results.slice(0, 10));
				});
			}
		}, DEBOUNCE_TIME);
	}, [searchTerm]);

	const searchValue = ({ target }) => setSearchTerm(target.value);

	const doSearch = () => {
		setIsOpen(false);
		if (searchTerm.length >= MINIMUM_SEARCH) {
			getSearchMultiResults(searchTerm).then(({ payload }) => {
				populate(payload.results);
			});
		}
	};

	const handleClear = e => {
		clearTimeout(debounce.current);
		setIsOpen(false);
		setSearchTerm("");
		setResults([]);
		populate([]);
	};

	const handleEnter = e => {
		if (e.key === "Enter") {
			clearTimeout(debounce.current);
			doSearch();
		}
	};

	return (
		<Downshift
			inputValue={searchTerm}
			itemToString={item => (item ? item.title : "")}
			onChange={navigateTo}
			isOpen={isOpen}
		>
			{({ getInputProps, getItemProps, highlightedIndex, inputValue }) => (
				<div>
					<SearchInput
						label="Search for Movie, TV show or Actor"
						{...getInputProps({
							onChange: searchValue,
							onSearch: doSearch,
							onKeyDown: handleEnter,
							onClear: handleClear,
							value: inputValue,
							placeholder: "Search Movies, TV Shows and Actors"
						})}
					/>
					{isOpen && (
						<Paper
							className="paper"
							square
							style={{ marginLeft: 0, marginRight: 5, marginTop: 2 }}
						>
							{results.map((item, index) => (
								<AutoCompleteItem
									highlighted={highlightedIndex === index}
									index={index}
									item={item}
									{...getItemProps({
										index,
										item,
										key: item.id
									})}
								/>
							))}
						</Paper>
					)}
				</div>
			)}
		</Downshift>
	);
};
