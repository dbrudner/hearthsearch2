import * as React from "react";
import { fetchCards } from "../generic/fetch-cards";
import { connect } from "react-redux";
import Results from "./results";
import { Input } from "antd";
import * as types from "../generic/cards-model";

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

	handleChange = value => {};

	render() {
		return (
			<React.Fragment>
				<h1>Search</h1>
				<Input onChange={e => this.handleChange(e.target.value)} />
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
