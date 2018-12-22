import * as Filters from "./dropdowns";
import SortDropdown from "./sorts/dropdown-sort";

export default () => (
	<>
		<div>
			<h2>Filters</h2>
			<Filters.Hero />
			<Filters.Type />
			<Filters.Set />
			<Filters.Rarity />
			<Filters.Race />
			<Filters.Ability />
			<Filters.Cost />
			<Filters.Health />
			<Filters.Attack />
		</div>
		<div>
			<h2>Sort by</h2>
			<SortDropdown />
		</div>
	</>
);
