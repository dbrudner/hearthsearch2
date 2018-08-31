import * as React from "react";
import Cards from "../cards";
import { fetchCards } from "../generic/fetch-cards";
import { connect } from "react-redux";

class BuildDeck extends React.Component {
	componentDidMount() {
		fetchCards();
	}

	render() {
		console.log(this.props.cards.cards);
		return <div>{/* <Cards cards={this.props.cards} /> */}</div>;
	}
}

BuildDeck.getInitialProps = ({ query }) => {
	console.log(query);
	return { query: "blah" };
};

export default connect(state => state)(BuildDeck);
