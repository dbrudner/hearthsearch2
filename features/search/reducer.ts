import * as types from "./actions";
import { createSelector } from "reselect";

const initialState = {
	cards: [],
	displayCards: 15,
	loading: null
};

export const searchReducer = (state = initialState, action) => {
	if (action.type === types.FETCHED_RESULTS) {
		return { ...state, cards: action.payload, loading: false };
	}

	if (action.type === types.MORE_CARDS_SELECTED) {
		return { ...state, displayCards: state.displayCards + 15 };
	}

	return state;
};

const getDisplayCards = state => state.search.displayCards;
const getCards = state => state.search.cards;

export const getVisibleCards = createSelector(
	[getDisplayCards, getCards],
	(displayCards, cards) => {
		return cards.slice(0, displayCards);
	}
);
