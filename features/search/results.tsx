import { connect } from "react-redux";
import { getVisibleCards } from "./reducer";
import { Button, Collapse } from "antd";
import * as types from "./actions";
import Cards from "../cards";

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
				<Button
					onClick={() =>
						this.props.dispatch({ type: types.MORE_CARDS_SELECTED })
					}
				>
					Load more
				</Button>
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
