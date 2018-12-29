import { Select } from "antd";
import { connect } from "react-redux";
import _ from "lodash";
import { doSearchUpdate } from "../filters-model";

const Option = Select.Option;

type options = { name: string; value: string }[];

type Props = {
	buildDeck?: boolean;
	search: (filterName: string, value: any) => void;
};

const DropDownFilter = (filterName: string, options: options) => {
	const Component: React.SFC<Props> = props => {
		const handleChange = value => props.search(filterName, value);

		return (
			<Select
				onChange={handleChange}
				defaultValue={_.startCase(filterName)}
				style={{
					width: props.buildDeck ? "100%" : 120,
					marginBottom: "15px"
				}}
			>
				{_.map(options, option => (
					<Option key={option} value={option.value.toLowerCase()}>
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
