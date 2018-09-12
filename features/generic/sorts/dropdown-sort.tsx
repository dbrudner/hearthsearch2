import { Select } from "antd";
import { connect } from "react-redux";

const Option = Select.Option;

const DropDownSort = props => {
	return (
		<Select defaultValue={"None"} style={{ width: 120 }}>
			<Option value={"name"}>Name</Option>
		</Select>
	);
};

export default connect(
	null,
	dispatch => {
		return {};
	}
)(DropDownSort);
