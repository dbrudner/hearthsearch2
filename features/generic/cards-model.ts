import { createSelector } from "reselect";
import * as typings from "./typings";
import search from "../search";

export const FETCHED_RESULTS = "FETCHED_RESULTS";
export const IS_LOADING = "IS_LOADING";
export const MORE_CARDS_SELECTED = "MORE_CARDS_SELECTED";
export const UPDATED_SEARCH = "UPDATED_SEARCH";

const initialState = {
	allCards: [],
	displayCards: 25,
	loading: null,
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

type searchPayload = {
	filterType: string;
	value: string | number;
};

type action = {
	type: string;
	payload: any;
};

export const searchReducer = (
	state: typings.CardModel = initialState,
	action: action
) => {
	if (action.type === FETCHED_RESULTS) {
		return { ...state, allCards: action.payload, loading: false };
	}

	if (action.type === MORE_CARDS_SELECTED) {
		return { ...state, displayCards: state.displayCards + 15 };
	}

	if (action.type === UPDATED_SEARCH) {
		return {
			...state,
			displayCards: 50,
			[action.payload.filterType]: action.payload.value
		};
	}

	return state;
};

const getFilters = (state: typings.State) => {
	return [
		{ filterName: "search", value: state.cards.name },
		{ filterName: "cardClass", value: state.cards.cardClass },
		{ filterName: "type", value: state.cards.type },
		{ filterName: "rarity", value: state.cards.rarity },
		{ filterName: "set", value: state.cards.set },
		{ filterName: "race", value: state.cards.race },
		{ filterName: "text", value: state.cards.text },
		{ filterName: "cost", value: state.cards.cost },
		{ filterName: "health", value: state.cards.health },
		{ filterName: "attack", value: state.cards.attack }
	];
};

const getDisplayCards = state => state.cards.displayCards;
const getAllCards = state => state.cards.allCards;

const searchCards = (
	cards: typings.Card[],
	filters: {
		filterName: string;
		value: string;
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

			if (!card[filter.filterName]) {
				return false;
			}

			if (typeof card[filter.filterName] === "number") {
				if (filter.value === "10+") {
					return card[filter.filterName] > 10;
				}
				return card[filter.filterName] === parseInt(filter.value);
			}

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
		return searchCards(allCards, filters).slice(0, displayCards);
	}
);

export const doSearchUpdate = (filterType: string, value: string | number) => {
	return {
		type: UPDATED_SEARCH,
		payload: {
			filterType,
			value
		}
	};
};
