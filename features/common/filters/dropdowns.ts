import DropdownFilter from "./dropdown-filter";
import * as typings from "../typings";

const convertKeys = keys =>
	keys.map(key => {
		return {
			name: key,
			value: key
		};
	});

export const Hero = DropdownFilter(
	"cardClass",
	convertKeys(Object.keys(typings.CardClass))
);
export const Type = DropdownFilter(
	"type",
	convertKeys(Object.keys(typings.Type))
);
export const Race = DropdownFilter(
	"race",
	convertKeys(Object.keys(typings.Race))
);
export const Rarity = DropdownFilter(
	"rarity",
	convertKeys(Object.keys(typings.Rarity))
);
export const Set = DropdownFilter(
	"set",
	Object.keys(typings.Set).map(key => {
		return {
			name: key,
			value: typings.Set[key]
		};
	})
);

export const Ability = DropdownFilter(
	"text",
	convertKeys(Object.keys(typings.Ability))
);

const numberArr = [
	"0",
	"1",
	"2",
	" 3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"10+"
];

export const Cost = DropdownFilter("cost", convertKeys(numberArr));
export const Health = DropdownFilter("health", convertKeys(numberArr.slice(1)));
export const Attack = DropdownFilter("attack", convertKeys(numberArr));
