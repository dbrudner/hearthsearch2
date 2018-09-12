import { Input } from "antd";
import { doSearchUpdate } from "../generic/filters-model";
import { connect } from "react-redux";

interface props {
	updateSearch: (string) => void;
}

const SearchInput: React.SFC<props> = props => (
	<Input.Search
		style={{ width: "20%" }}
		onChange={e => props.updateSearch(e.target.value)}
	/>
);

export default connect(
	null,
	dispatch => {
		return {
			updateSearch(value) {
				dispatch(doSearchUpdate("name", value));
			}
		};
	}
)(SearchInput);
