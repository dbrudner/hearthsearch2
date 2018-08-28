import { connect } from "react-redux";
import { getVisibleCards } from "./reducer";
import { Button } from "antd";
import * as types from "./actions";

export interface ResultsProps {
	visibleCards: any;
	dispatch: any;
}

const Results: React.SFC<ResultsProps> = props => {
	console.log(props);
	return (
		<div>
			{props.visibleCards.map(card => (
				<div>{card.name}</div>
			))}
			<Button
				onClick={() =>
					props.dispatch({ type: types.MORE_CARDS_SELECTED })
				}
			>
				Load more
			</Button>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		visibleCards: getVisibleCards(state)
	};
};

export default connect(mapStateToProps)(Results);
