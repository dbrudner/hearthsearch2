import * as React from "react";
import Cards from "../cards";
import { connect } from "react-redux";

class BuildDeck extends React.Component {
	render() {
		console.log(this.props.search.cards);
		return <div>{/* <Cards cards={this.props.cards} /> */}</div>;
	}
}

BuildDeck.getInitialProps = ({ query }) => {
	console.log(query);
	return { query: "blah" };
};

export default connect(state => state)(BuildDeck);
