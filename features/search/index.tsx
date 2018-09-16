import * as React from "react";
import { fetchCards } from "../generic/cards-model";
import { connect } from "react-redux";
import Results from "./results";
import SearchInput from "../generic/search-input";
import Filters from "../generic/filters";

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
				<Filters />
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
