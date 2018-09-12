import { createSelector } from "reselect";
import * as typings from "./typings";

enum ActionType {
	MORE_CARDS_SELECTED = "MORE_CARDS_SELECTED",
	UPDATED_SEARCH = "UPDATED_SEARCH"
}

type action = {
	type: ActionType;
	payload: any;
};

export type State = {
	displayCards: number;
	name: string;
	cardClass: string;
	type: string;
	race: string;
	rarity: string;
	set: string;
	text?: string;
	cost: number | "10+";
	health: number | "10+";
	attack: number | "10+";
};

const initialState = {
	displayCards: 25,
	name: "",
	cardClass: "",
	type: "",
	race: "",
	set: "",
	rarity: "",
	text: "",
	cost: null,
	health: null,
	attack: null
};

export const filtersReducer = (state: State = initialState, action: action) => {
	console.log(action);
	if (action.type === ActionType.MORE_CARDS_SELECTED) {
		return { ...state, displayCards: state.displayCards + 15 };
	}

	if (action.type === ActionType.UPDATED_SEARCH) {
		console.log("HI");
		return {
			...state,
			displayCards: 50,
			[action.payload.filterType]: action.payload.value
		};
	}

	return state;
};

const getFilters = (state: typings.State) => {
	const filters = [
		"cardClass",
		"type",
		"rarity",
		"set",
		"race",
		"text",
		"cost",
		"health",
		"attack"
	];
	// return [
	// 	{ filterName: "search", value: state.filters.name },
	// 	{ filterName: "cardClass", value: state.filters.cardClass },
	// 	{ filterName: "type", value: state.filters.type },
	// 	{ filterName: "rarity", value: state.filters.rarity },
	// 	{ filterName: "set", value: state.filters.set },
	// 	{ filterName: "race", value: state.filters.race },
	// 	{ filterName: "text", value: state.filters.text },
	// 	{ filterName: "cost", value: state.filters.cost },
	// 	{ filterName: "health", value: state.filters.health },
	// 	{ filterName: "attack", value: state.filters.attack }
	// ];
	return [
		{ filterName: "search", value: state.filters.name },
		...filters.map(filter => ({
			filterName: filter,
			value: state.filters[filter]
		}))
	];
};

const getDisplayCards = state => state.filters.displayCards;
const getAllCards = state => state.cards.allCards;

const filterCards = (
	cards: typings.Card[],
	filters: {
		filterName: string;
		value: any;
	}[]
) => {
	// Filter all cards
	return cards.filter(card => {
		// Iterates through every filter
		// Returns a boolean:
		// If the card passes every filter, returns true
		// If the card doesn't pass one or more filters, return false
		return filters.every(filter => {
			// If there is no filter, skip to the next
			if (!filter.value) {
				return true;
			}

			// This filter goes first because "search" is not a prop on card
			if (filter.filterName === "search") {
				// Card name concat with card text to search through both
				const searchable = card.name + " " + (card.text || "");

				return searchable
					.toLowerCase()
					.match(filter.value.toLowerCase());
			}

			// Some of the filters are for optional properties that don't exist on all card objects
			// This is needed to prevent a type error from being thrown that the property on the card is undefined.
			if (!card[filter.filterName]) {
				return false;
			}

			// Filters specifically for number based filters:
			// Cost, Attack, and Health
			if (typeof card[filter.filterName] === "number") {
				if (filter.value === "10+") {
					return card[filter.filterName] > 10;
				}
				return card[filter.filterName] === parseInt(filter.value);
			}

			// For all other filters
			// Returns true if the card and filter contain the same value
			return card[filter.filterName]
				.toLowerCase()
				.match(filter.value.toLowerCase());
		});
	});
};

export const getVisibleCards = createSelector(
	[getFilters, getDisplayCards, getAllCards],
	(filters, displayCards, allCards) => {
		return filterCards(allCards, filters).slice(0, displayCards);
	}
);

export const doSearchUpdate = (filterType: string, value: string | number) => {
	console.log(filterType, value);
	return {
		type: ActionType.UPDATED_SEARCH,
		payload: {
			filterType,
			value
		}
	};
};
