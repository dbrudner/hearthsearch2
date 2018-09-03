import * as React from "react";
import { connect } from "react-redux";
import { getVisibleCards, MORE_CARDS_SELECTED } from "../generic/cards-model";
import Cards from "../cards";
import LoadMoreButton from "../generic/load-more-button";

export interface ResultsProps {
	visibleCards: number;
	dispatch: (any) => void;
}

class Results extends React.Component<ResultsProps> {
	componentDidMount() {
		window.addEventListener("scroll", this.onScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.onScroll, false);
	}

	onScroll = () => {
		if (
			window.innerHeight + window.scrollY >=
			document.getElementById("__next").offsetHeight
		) {
			this.props.dispatch({ type: MORE_CARDS_SELECTED });
		}
	};

	render() {
		return (
			<div>
				<Cards cards={this.props.visibleCards} />
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
