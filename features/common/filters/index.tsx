import * as Filters from "./dropdowns";
import SortDropdown from "./sorts/dropdown-sort";

console.log(Filters);

export default props => (
	<>
		<div>
			<h2>Filters</h2>
			<Filters.Hero {...props} />
			<Filters.Type {...props} />
			<Filters.Set {...props} />
			<Filters.Rarity {...props} />
			<Filters.Race {...props} />
			<Filters.Ability {...props} />
			<Filters.Cost {...props} />
			<Filters.Health {...props} />
			<Filters.Attack {...props} />
		</div>
		<div>
			<h2>Sort By</h2>
			<SortDropdown {...props} />
		</div>
	</>
);
