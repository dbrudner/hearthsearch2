import * as React from "react";
import { connect } from "react-redux";
import { ActionTypes } from "../common/cards-model";
import { getVisibleCards } from "../common/filter-and-sort";
import Cards from "../cards";

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
			this.props.dispatch({ type: ActionTypes.MORE_CARDS_SELECTED });
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
	console.log(getVisibleCards(state));
	return {
		visibleCards: getVisibleCards(state)
	};
};

export default connect(mapStateToProps)(Results);
