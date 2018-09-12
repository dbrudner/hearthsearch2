import { Select } from "antd";
import { connect } from "react-redux";
import { SortBy, ActionTypes } from "../sort-model";

const Option = Select.Option;

const DropDownSort = props => (
	<Select
		onChange={value => props.updateSort(value)}
		defaultValue={"None"}
		style={{ width: 120 }}
	>
		<Option value={"name"}>Name</Option>
		<Option value={"cost"}>Cost</Option>
	</Select>
);

export default connect(
	null,
	dispatch => {
		return {
			updateSort: (payload: SortBy) =>
				dispatch({
					type: ActionTypes.UPDATED_SORT_BY,
					payload
				})
		};
	}
)(DropDownSort);
