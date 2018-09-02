import * as React from "react";
import Cards from "../cards";
import { fetchCards } from "../generic/fetch-cards";
import { connect } from "react-redux";
import { getVisibleDeckCards } from "../generic/cards-model";
import * as types from "./model";
import Deck from "./deck";
import SearchInput from "../generic/search-input";

class BuildDeck extends React.Component<any, any> {
	async componentDidMount() {
		await this.props.setDeckParams({ ...this.props.query });
		await this.props.fetchCards();
	}

	render() {
		return (
			<div>
				<div
					style={{
						width: "20vw",
						height: "100vh",
						position: "fixed",
						left: 0,
						backgroundColor: "white"
					}}
				>
					<Deck />
				</div>
				<div style={{ marginLeft: "20vw" }}>
					<div style={{ margin: "20px" }}>
						<SearchInput style={{ width: "20%" }} />
					</div>
					<Cards cards={this.props.visibleCards} />;
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		visibleCards: getVisibleDeckCards(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchCards: () => dispatch(fetchCards()),
		setDeckParams: params =>
			dispatch({ type: types.DECK_PARAMS_SELECTED, payload: params })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BuildDeck);
