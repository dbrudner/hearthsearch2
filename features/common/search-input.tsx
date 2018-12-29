import { Input } from "antd";
import { doSearchUpdate } from "../common/filters-model";
import { connect } from "react-redux";

interface props {
	updateSearch: (string) => void;
	buildDeck: boolean;
}

const SearchInput: React.SFC<props> = props => (
	<Input.Search
		style={props.buildDeck ? {} : { width: "20%" }}
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
