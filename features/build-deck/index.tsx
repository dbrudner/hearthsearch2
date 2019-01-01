import * as React from "react";
import Cards from "../cards";
import { fetchCards } from "../common/cards-model";
import { connect } from "react-redux";
import { getVisibleCards } from "../common/filter-and-sort";
import { doSearchUpdate } from "../common/filters-model";
import Deck from "./deck";
import SearchInput from "../common/search-input";
import LoadMoreButton from "../common/load-more-button";
import Filters from "../common/filters";

class BuildDeck extends React.Component<any, any> {
	async componentDidMount() {
		const { format, hero } = this.props.query;
		await this.props.setDeckParams({ format, cardClass: hero });
		await this.props.fetchCards();
	}

	render() {
		return (
			<div
				style={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr" }}
			>
				<div
					style={{
						padding: "15px 15px 150px 15px",
						backgroundColor: "#e2ebf4"
					}}
				>
					<h2>Search</h2>
					<SearchInput buildDeck />
					<div style={{ marginTop: "15px" }}>
						<Filters buildDeck />
					</div>
				</div>

				<Cards buildDeck cards={this.props.visibleCards} />
				<Deck />
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
			dispatch(doSearchUpdate("buildMode", true));
			// doSearchUpdate("format", format);
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BuildDeck);
