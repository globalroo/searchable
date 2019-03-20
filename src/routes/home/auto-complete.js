import React, { useEffect, useState } from "react";
import Downshift from "downshift";
import { Paper } from "@material-ui/core";
import { useDebounce } from "use-debounce";

import { getSearchMultiResults } from "src/tmdb-service/tmdb-api.js";
import { navigateTo } from "../../helpers/navigate";
import { AutoCompleteItem } from "./auto-complete-item";
import { SearchInput } from "./search-input";

const DEBOUNCE_TIME = 350; //ms
const MINIMUM_SEARCH = 3;

export const AutoComplete = ({ populate }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [results, setResults] = useState([]);

	const [debouncedSearchValue] = useDebounce(searchTerm, DEBOUNCE_TIME);

	useEffect(() => {
		setIsOpen(false);
		if (debouncedSearchValue.length === 0) {
			setResults([]);
			populate([]);
		} else if (debouncedSearchValue.length >= MINIMUM_SEARCH) {
			getSearchMultiResults(debouncedSearchValue).then(({ payload }) => {
				setIsOpen(true);
				setResults(() => payload.results.slice(0, 10));
			});
		}
	}, [debouncedSearchValue]);

	const searchValue = ({ target }) => setSearchTerm(target.value);

	const doSearch = () => {
		setIsOpen(false);
		populate(results);
	};

	const handleEnter = e => {
		if (e.key === "Enter") {
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
