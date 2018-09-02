import { Input } from "antd";
import * as types from "../generic/cards-model";
import { connect } from "react-redux";

const SearchInput = props => (
	<Input.Search
		style={{ width: "20%" }}
		onChange={e => props.updateSearch(e.target.value)}
	/>
);

export default connect(
	null,
	dispatch => {
		return {
			updateSearch: (value: string) =>
				dispatch({ type: types.UPDATED_SEARCH, payload: value })
		};
	}
)(SearchInput);
