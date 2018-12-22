import { useEffect } from "react";
import { fetchCards } from "../common/cards-model";
import { connect } from "react-redux";
import Results from "./results";
import SearchInput from "../common/search-input";
import Filters from "../common/filters";

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
