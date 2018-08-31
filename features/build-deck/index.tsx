import * as React from "react";
import Cards from "../cards";
import { fetchCards } from "../generic/fetch-cards";
import { connect } from "react-redux";
import { getVisibleCards } from "../generic/cards-model";
import Deck from "./deck";

class BuildDeck extends React.Component<any, any> {
	componentDidMount() {
		this.props.fetchCards();
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
					asdf
					<Deck />
				</div>
				<div style={{ marginLeft: "20vw" }}>
					<Cards cards={this.props.visibleCards} />;
				</div>
			</div>
		);
	}
}

BuildDeck.getInitialProps = ({ query }) => {
	return { query: "blah" };
};

const mapStateToProps = state => {
	return {
		visibleCards: getVisibleCards(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchCards: () => dispatch(fetchCards())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BuildDeck);
