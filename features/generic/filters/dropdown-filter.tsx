import { Select } from "antd";
import { connect } from "react-redux";
import _ from "lodash";
import { capitalize } from "../helpers";
import { doSearchUpdate } from "../cards-model";

const Option = Select.Option;

const DropDownFilter = (filterName, options) => {
	const Component = props => {
		const handleChange = value => props.search(filterName, value);

		return (
			<Select
				onChange={handleChange}
				defaultValue="None"
				style={{ width: 120 }}
			>
				<Option value="">None</Option>
				{_.map(options, option => (
					<Option value={option.toLowerCase()}>
						{capitalize(option)}
					</Option>
				))}
			</Select>
		);
	};

	return connect(
		null,
		dispatch => {
			return {
				search(filterType, value) {
					dispatch(doSearchUpdate(filterType, value));
				}
			};
		}
	)(Component);
};

export default DropDownFilter;
