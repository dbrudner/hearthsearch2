import * as React from "react";
import Cards from "../cards";
import { fetchCards } from "../generic/fetch-cards";
import { connect } from "react-redux";
import { getVisibleCards } from "../generic/cards-model";

class BuildDeck extends React.Component<any, any> {
	componentDidMount() {
		this.props.fetchCards();
	}

	render() {
		return <Cards cards={this.props.visibleCards} />;
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
