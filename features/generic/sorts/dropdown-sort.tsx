import { Select } from "antd";
import { connect } from "react-redux";
import { SortBy, ActionTypes } from "../sort-model";
import { ActionType as FilterActionTypes } from "../filters-model";

const Option = Select.Option;

const DropDownSort = props => (
	<Select
		onChange={value => props.updateSort(value)}
		defaultValue={"None"}
		style={{ width: 120 }}
	>
		<Option value={"name"}>Name</Option>
		<Option value={"cost"}>Cost</Option>
		<Option value={"attack"}>Attack</Option>
		<Option value={"health"}>Health</Option>
	</Select>
);

export default connect(
	null,
	dispatch => {
		return {
			updateSort: (payload: SortBy) => {
				if (payload === "attack") {
					dispatch({
						type: FilterActionTypes.UPDATED_SEARCH,
						payload: {
							filterType: "type",
							value: "minion"
						}
					});
				}
				dispatch({
					type: ActionTypes.UPDATED_SORT_BY,
					payload
				});
			}
		};
	}
)(DropDownSort);
