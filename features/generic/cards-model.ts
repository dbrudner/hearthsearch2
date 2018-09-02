import { createSelector } from "reselect";
import * as types from "./types";

export const FETCHED_RESULTS = "FETCHED_RESULTS";
export const IS_LOADING = "IS_LOADING";
export const MORE_CARDS_SELECTED = "MORE_CARDS_SELECTED";
export const UPDATED_SEARCH = "UPDATED_SEARCH";

const initialState = {
	allCards: [],
	displayCards: 50,
	loading: null,
	searchInput: ""
};

enum Loading {
	Loading = "LOADING",
	Loaded = "LOADED",
	Waiting = "WAITING"
}

type stateType = {
	allCards: types.Card[];
	displayCards: number;
	loading: Loading;
	searchInput: string;
};

type action = {
	type: string;
	payload: types.Cards | number | string;
};

export const searchReducer = (
	state: stateType = initialState,
	action: action
) => {
	if (action.type === FETCHED_RESULTS) {
		return { ...state, allCards: action.payload, loading: false };
	}

	if (action.type === MORE_CARDS_SELECTED) {
		return { ...state, displayCards: state.displayCards + 15 };
	}

	if (action.type === UPDATED_SEARCH) {
		return { ...state, searchInput: action.payload };
	}

	return state;
};

const getDisplayCards = state => state.cards.displayCards;
const getAllCards = state => state.cards.allCards;
const getDeckParams = state => state.build.params;
const getSearchInput = state => state.cards.searchInput;

const searchCards = (cards: types.Card[], searchInput: string) => {
	if (searchInput) {
		return cards.filter(card =>
			card.name.toLowerCase().match(searchInput.toLowerCase())
		);
	}
	return cards;
};

export const getVisibleCards = createSelector(
	[getSearchInput, getDisplayCards, getAllCards],
	(searchInput, displayCards, allCards) =>
		searchCards(allCards, searchInput).slice(0, displayCards)
);

const selectValidCards = (cards, params) => {
	const { hero, format } = params;
	return cards.filter(({ cardClass }) => {
		return (
			cardClass.toLowerCase() === hero.toLowerCase() ||
			cardClass.toLowerCase() === "neutral"
		);
	});
};

export const getVisibleDeckCards = createSelector(
	[getSearchInput, getDisplayCards, getAllCards, getDeckParams],
	(searchInput, displayCards, allCards, deckParams) => {
		const validCards = selectValidCards(
			searchCards(allCards, searchInput),
			deckParams
		);
		return validCards.slice(0, displayCards);
	}
);
