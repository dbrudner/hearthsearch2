import { useEffect } from "react";
import { fetchCards } from "../generic/cards-model";
import { connect } from "react-redux";
import Results from "./results";
import SearchInput from "../generic/search-input";
import Filters from "../generic/filters";

export interface SearchProps {
	fetchCards: () => void;
}

const Search = props => {
	useEffect(() => {
		props.fetchCards();
	});

	return (
		<>
			<h1>Hey</h1>
			<SearchInput />
			<Filters />
			<Results />
		</>
	);
};

export default connect(
	null,
	dispatch => ({
		fetchCards: () => dispatch(fetchCards())
	})
)(Search);
