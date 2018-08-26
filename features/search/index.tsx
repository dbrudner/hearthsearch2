import * as React from "react";
import { fetchCards } from "./fetch-cards";
import { connect } from "react-redux";

export interface SearchProps {
	fetchCards: any;
}

export interface SearchState {}

class Search extends React.Component<SearchProps, SearchState> {
	constructor(props: SearchProps) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchCards();
	}

	render() {
		return <div>Search</div>;
	}
}

export default connect(
	null,
	dispatch => ({ fetchCards: () => dispatch(fetchCards()) })
)(Search);
