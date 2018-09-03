import * as React from "react";
import { fetchCards } from "../generic/fetch-cards";
import { connect } from "react-redux";
import Results from "./results";
import SearchInput from "../generic/search-input";
import * as Filters from "../generic/filters/dropdowns";

export interface SearchProps {
	fetchCards: () => void;
}

class Search extends React.Component<SearchProps> {
	constructor(props: SearchProps) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchCards();
	}

	render() {
		return (
			<React.Fragment>
				<h1>Search</h1>
				<SearchInput />
				<Filters.Hero />
				<Filters.Type />
				<Filters.Set />
				<Filters.Rarity />
				<Results />
			</React.Fragment>
		);
	}
}

export default connect(
	null,
	dispatch => ({
		fetchCards: () => dispatch(fetchCards())
	})
)(Search);
