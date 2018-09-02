import { Collapse, Button } from "antd";
import { heroes as colors } from "../generic/colors";
import { connect } from "react-redux";
import * as types from "../build-deck/model";
import { capitalize } from "../generic/helpers";

const Title = props => {
	const handleClick = e => {
		e.stopPropagation();
		const { dispatch, ...card } = props;
		props.dispatch({ type: types.CARD_ADDED, payload: card });
	};

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "4vw 8vw 8vw 8vw",
				textAlign: "center",
				width: "30vw"
			}}
		>
			<Button onClick={e => handleClick(e)}>Add</Button>
			<div>{props.name}</div>
			<div style={{ color: colors[props.cardClass.toLowerCase()] }}>
				{capitalize(props.cardClass)}
			</div>
			<div>
				{capitalize(props.type)} ({props.cost})
			</div>
		</div>
	);
};

export default connect(state => state)(Title);
