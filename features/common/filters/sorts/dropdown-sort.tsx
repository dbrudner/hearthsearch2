import { Select } from "antd";
import { connect } from "react-redux";
import { SortBy, Direction, ActionTypes } from "../../sort-model";
import { ActionType as FilterActionTypes } from "../../filters-model";

const Option = Select.Option;

const DropDownSort = props => (
	<>
		<Select
			onChange={value => props.updateSortBy(value)}
			defaultValue={"Sort By"}
			style={{ width: 120 }}
		>
			<Option value={null}>None</Option>
			<Option value={"name"}>Name</Option>
			<Option value={"cost"}>Cost</Option>
			<Option value={"attack"}>Attack</Option>
			<Option value={"health"}>Health</Option>
		</Select>
		<Select
			onChange={value => props.updateSortDirection(value)}
			defaultValue={"Descending"}
			style={{ width: 120 }}
		>
			<Option value={"descending"}>Descending</Option>
			<Option value={"ascending"}>Ascending</Option>
		</Select>
	</>
);

export default connect(
	null,
	dispatch => {
		return {
			updateSortBy: (payload: SortBy) => {
				if (payload === "attack" || payload === "health") {
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
			},
			updateSortDirection: (payload: Direction) => {
				dispatch({
					type: ActionTypes.UPDATED_SORT_DIRECTION,
					payload
				});
			}
		};
	}
)(DropDownSort);
