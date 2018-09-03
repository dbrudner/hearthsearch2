import { Select } from "antd";
import { connect } from "react-redux";
import _ from "lodash";
import { doSearchUpdate } from "../cards-model";

const Option = Select.Option;

type options = { name: string; value: string }[];

const DropDownFilter = (filterName: string, options: options) => {
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
					<Option value={option.value.toLowerCase()}>
						{option.name}
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
