import * as React from "react";
import Cards from "../cards";
import { fetchCards } from "../generic/fetch-cards";
import { connect } from "react-redux";
import { getVisibleCards } from "../generic/cards-model";
import { doSearchUpdate } from "../generic/cards-model";
import Deck from "./deck";
import SearchInput from "../generic/search-input";
import LoadMoreButton from "../generic/load-more-button";

class BuildDeck extends React.Component<any, any> {
	async componentDidMount() {
		const { format, hero } = this.props.query;
		await this.props.setDeckParams({ format, cardClass: hero });
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
					<SearchInput />
					<Cards cards={this.props.visibleCards} />
					<LoadMoreButton />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		visibleCards: getVisibleCards(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchCards: () => dispatch(fetchCards()),
		setDeckParams({ format, cardClass }) {
			dispatch(doSearchUpdate("cardClass", cardClass));
			// doSearchUpdate("format", format);
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BuildDeck);
