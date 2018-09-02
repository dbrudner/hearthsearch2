import { Button } from "antd";
import * as types from "../generic/cards-model";
import { connect } from "react-redux";

interface props {
	dispatch: ({ type: string }) => void;
}

const LoadMoreButton: React.SFC<props> = ({ dispatch }) => (
	<Button onClick={() => dispatch({ type: types.MORE_CARDS_SELECTED })}>
		Load more
	</Button>
);

export default connect()(LoadMoreButton);
