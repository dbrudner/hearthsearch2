import { createSelector } from "reselect";

export const FETCHED_RESULTS = "FETCHED_RESULTS";
export const IS_LOADING = "IS_LOADING";
export const MORE_CARDS_SELECTED = "MORE_CARDS_SELECTED";

const initialState = {
	cards: [],
	displayCards: 50,
	loading: null
};

export const searchReducer = (state = initialState, action) => {
	if (action.type === FETCHED_RESULTS) {
		return { ...state, cards: action.payload, loading: false };
	}

	if (action.type === MORE_CARDS_SELECTED) {
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
