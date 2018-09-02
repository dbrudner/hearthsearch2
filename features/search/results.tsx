import * as React from "react";
import { connect } from "react-redux";
import { getVisibleCards } from "../generic/cards-model";
import Cards from "../cards";
import LoadMoreButton from "../generic/load-more-button";

export interface ResultsProps {
	visibleCards: any;
	dispatch: any;
}

class Results extends React.Component<any, any> {
	// componentDidMount() {
	// 	window.addEventListener("scroll", this.onScroll, false);
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener("scroll", this.onScroll, false);
	// }

	// onScroll = () => {
	// 	if (
	// 		window.innerHeight + window.scrollY >=
	// 		document.body.offsetHeight - 2500
	// 	) {
	// 		this.props.dispatch({ type: types.MORE_CARDS_SELECTED });
	// 	}
	// };

	render() {
		return (
			<div>
				<Cards cards={this.props.visibleCards} />
				<LoadMoreButton />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		visibleCards: getVisibleCards(state)
	};
};

export default connect(mapStateToProps)(Results);
