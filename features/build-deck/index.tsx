import * as React from "react";
import Cards from "../cards";
import { fetchCards } from "../generic/cards-model";
import { connect } from "react-redux";
import { getVisibleCards } from "../generic/filter-and-sort";
import { doSearchUpdate } from "../generic/filters-model";
import Deck from "./deck";
import SearchInput from "../generic/search-input";
import LoadMoreButton from "../generic/load-more-button";
import Filters from "../generic/filters";

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
					<SearchInput />
					<Filters />
				</div>
				<div
					style={{
						width: "20vw",
						height: "100vh",
						position: "fixed",
						right: 0,
						backgroundColor: "white"
					}}
				>
					<Deck />
				</div>
				<div style={{ margin: "0 20vw", width: "60vw" }}>
					<Cards buildDeck cards={this.props.visibleCards} />
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
