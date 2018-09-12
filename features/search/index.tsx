import * as React from "react";
import { fetchCards } from "../generic/cards-model";
import { connect } from "react-redux";
import Results from "./results";
import SearchInput from "../generic/search-input";
import * as Filters from "../generic/filters/dropdowns";
import SortDropdown from "../generic/sorts/dropdown-sort";

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
				<div>
					<h2>Filters</h2>
					<Filters.Hero />
					<Filters.Type />
					<Filters.Set />
					<Filters.Rarity />
					<Filters.Race />
					<Filters.Ability />
					<Filters.Cost />
					<Filters.Health />
					<Filters.Attack />
				</div>
				<div>
					<h2>Sort by</h2>
					<SortDropdown />
				</div>

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
