import * as React from "react";

class BuildDeck extends React.Component {
	render() {
		console.log(this.props);
		return <div>Build a deck</div>;
	}
}

BuildDeck.getInitialProps = ({ query }) => {
	console.log(query);
	return { query: "blah" };
};

export default BuildDeck;
