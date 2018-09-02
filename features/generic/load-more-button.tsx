import { Button } from "antd";
import * as types from "../generic/cards-model";
import { connect } from "react-redux";

const LoadMoreButton = ({ dispatch }) => (
	<Button onClick={() => dispatch({ type: types.MORE_CARDS_SELECTED })}>
		Load more
	</Button>
);

export default connect()(LoadMoreButton);
