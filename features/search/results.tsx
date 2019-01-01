import * as React from "react";
import { connect } from "react-redux";
import { ActionTypes } from "../common/cards-model";
import { getVisibleCards } from "../common/filter-and-sort";
import Cards from "../cards";
import LoadMore from "../common/load-more";

export interface ResultsProps {
	visibleCards: number;
	dispatch: (any) => void;
}

class Results extends React.Component<ResultsProps> {
	render() {
		return (
			<LoadMore>
				<Cards cards={this.props.visibleCards} />
			</LoadMore>
		);
	}
}

const mapStateToProps = state => {
	return {
		visibleCards: getVisibleCards(state)
	};
};

export default connect(mapStateToProps)(Results);
