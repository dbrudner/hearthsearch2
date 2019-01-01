import * as Filter from "./dropdowns";
import SortDropdown from "./sorts/dropdown-sort";

type Props = {
	buildDeck?: boolean;
};

const Filters: React.SFC<Props> = props => (
	<>
		<div>
			<h2>Filters</h2>
			{!props.buildDeck && <Filter.Hero {...props} />}
			<Filter.Type {...props} />
			<Filter.Set {...props} />
			<Filter.Rarity {...props} />
			<Filter.Race {...props} />
			<Filter.Ability {...props} />
			<Filter.Cost {...props} />
			<Filter.Health {...props} />
			<Filter.Attack {...props} />
		</div>
		<div>
			<h2>Sort By</h2>
			<SortDropdown {...props} />
		</div>
	</>
);

export default Filters;
