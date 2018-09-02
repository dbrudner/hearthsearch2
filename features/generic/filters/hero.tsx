import { Select } from "antd";
import * as typings from "../typings";
import { connect } from "react-redux";
import _ from "lodash";
import { capitalize } from "../helpers";
import { doSearchUpdate } from "../cards-model";

const Option = Select.Option;

const Hero = props => {
	const handleChange = value => props.searchHero(value);

	return (
		<Select
			onChange={handleChange}
			defaultValue="None"
			style={{ width: 120 }}
		>
			<Option value="">None</Option>
			{_.map(typings.CardClass, hero => (
				<Option value={hero.toLowerCase()}>{capitalize(hero)}</Option>
			))}
		</Select>
	);
};

export default connect(
	null,
	dispatch => {
		return {
			searchHero(hero) {
				dispatch(doSearchUpdate("cardClass", hero));
			}
		};
	}
)(Hero);
