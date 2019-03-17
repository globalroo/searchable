import React, { useEffect, useState } from "react";
import Downshift from "downshift";
import { navigate } from "@reach/router";
import { Footer } from "src/components/footer";
import { getSearchMultiResults, MEDIA_TYPE } from "src/tmdb-service/tmdb-api.js";
import { useDebounce } from "use-debounce";

export const SearchItem = ({ item, index, highlighted, selected, ...downshiftProps }) => (
	<div
		className="dropdown-item"
		{...downshiftProps}
		style={{
			backgroundColor: highlighted ? "lightgray" : "white"
		}}
	>
		{`${item.media_type}${item.title || item.name}`}
	</div>
);

const navigateTo = selection => {
	const { media_type } = selection;
	switch (media_type) {
		case MEDIA_TYPE.TV:
			navigate(`/tv/${selection.id}`);
			break;
		case MEDIA_TYPE.PERSON:
			navigate(`/person/${selection.id}`);
			break;
		case MEDIA_TYPE.MOVIE:
			navigate(`/movie/${selection.id}`);
			break;
		default:
			console.error("Can't handle this type of media!");
	}
	console.log(`Route to this asset ${JSON.stringify(selection)}`);
};

const DEBOUNCE_TIME = 350; //ms

export const SearchForm = () => {
	const [results, setResults] = useState([]);

	const [localValue, setLocalValue] = useState("");
	const [debouncedSearchValue] = useDebounce(localValue, DEBOUNCE_TIME);

	useEffect(() => {
		if (debouncedSearchValue.length === 0) {
			setResults([]);
			return;
		} else if (debouncedSearchValue.length < 3) {
			return;
		}

		getSearchMultiResults(debouncedSearchValue).then(({ payload }) => {
			setResults(() => payload.results);
		});
	}, [debouncedSearchValue]);

	const searchValue = ({ target }) => {
		const { value = "" } = target;
		setLocalValue(value);
	};

	return (
		<Downshift inputValue={localValue} onChange={navigateTo} itemToString={item => (item ? item.title : "")}>
			{({ getInputProps, getItemProps, highlightedIndex, isOpen, inputValue }) => (
				<div>
					<input
						{...getInputProps({
							placeholder: "Multi-search",
							onChange: searchValue,
							value: inputValue
						})}
					/>
					{isOpen ? (
						<>
							{results.map((item, index) => {
								const highlighted = highlightedIndex === index;
								return (
									<SearchItem
										index={index}
										item={item}
										highlighted={highlighted}
										{...getItemProps({
											key: index,
											index,
											item
										})}
									/>
								);
							})}
						</>
					) : null}
				</div>
			)}
		</Downshift>
	);
};

export const Search = () => {
	return (
		<>
			<SearchForm />
			<Footer />
		</>
	);
};
