import { createSelector } from "reselect";
import * as typings from "./typings";
import { State as Sort } from "./sort-model";

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
const getSortingMethod = state => ({ ...state.sort });
const getBuildMode = state => state.filters.buildMode;

const filterCards = (
	cards: typings.Card[],
	filters: {
		filterName: string;
		value: any;
	}[],
	buildMode: boolean
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

			if (buildMode && filter.filterName === "cardClass") {
				return (
					card.cardClass === "NEUTRAL" ||
					card.cardClass === filter.value
				);
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

const sortCards = (cards: typings.Card[], sortingMethod: Sort) => {
	const { direction, sortBy } = sortingMethod;

	if (!sortBy) {
		return cards;
	}

	return cards.sort((a, b) => {
		const aName = a[sortBy];
		const bName = b[sortBy];

		if (direction === "descending") {
			if (aName > bName) {
				return 1;
			}
			return -1;
		}

		if (direction === "ascending") {
			if (bName > aName) {
				return 1;
			}
			return -1;
		}

		return 0;
	});
};

export const getVisibleCards = createSelector(
	[getSortingMethod, getFilters, getDisplayCards, getAllCards, getBuildMode],
	(sortingMethod, filters, displayCards, allCards, buildMode) => {
		// Cards that passed through filter
		const residualCards = filterCards(allCards, filters, buildMode);
		return sortCards(residualCards, sortingMethod).slice(0, displayCards);
	}
);
