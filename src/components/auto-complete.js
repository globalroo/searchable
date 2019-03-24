import React, { useEffect, useState, useRef } from "react";
import Downshift from "downshift";

import { AutoCompleteItem } from "./auto-complete-item";
import { getSearchMultiResults } from "src/tmdb-service/tmdb-api.js";
import { navigateTo } from "src/helpers/navigate";
import { Paper } from "@material-ui/core";
import { SearchInput } from "./search-input";

const DEBOUNCE_TIME = 350; //ms
const MINIMUM_SEARCH = 3;

export const AutoComplete = ({ populate }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [results, setResults] = useState([]);

	const debounce = useRef();

	useEffect(() => {
		clearTimeout(debounce.current);
		const clearResults = searchTerm.length === 0;
		debounce.current = setTimeout(
			() => (clearResults ? handleClear() : doSearch()),
			DEBOUNCE_TIME
		);
	}, [searchTerm]);

	const searchValue = ({ target }) => setSearchTerm(target.value);

	const doSearch = useGrid => {
		if (searchTerm.length >= MINIMUM_SEARCH) {
			getSearchMultiResults(searchTerm).then(({ payload }) => {
				if (useGrid && populate) {
					setIsOpen(() => false);
					populate(payload.results);
				} else {
					setIsOpen(() => true);
					setResults(() => payload.results.slice(0, 10));
				}
			});
		}
	};

	const handleClear = () => {
		clearTimeout(debounce.current);
		setIsOpen(() => false);
		setSearchTerm(() => "");
		setResults(() => []);
		if (populate) populate([]);
	};

	const handleEnter = ({ key }) => {
		if (key === "Enter") {
			clearTimeout(debounce.current);
			doSearch(true);
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
				<div data-testid="downshift-autocomplete">
					<SearchInput
						label="Search for Movie, TV show or Actor"
						{...getInputProps({
							onChange: searchValue,
							onSearch: () => doSearch(true),
							onKeyDown: handleEnter,
							onBlur: () => setIsOpen(false),
							onClear: handleClear,
							value: inputValue,
							placeholder: "Search Movies, TV Shows and Actors"
						})}
					/>
					{isOpen && (
						<Paper
							className="paper"
							square
							style={styles.menuAlignment}
							data-testid="autocomplete-menu"
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

const styles = {
	menuAlignment: {
		marginLeft: 2,
		marginRight: 3,
		marginTop: 2
	}
};
