import { createSelector } from "reselect";

export const FETCHED_RESULTS = "FETCHED_RESULTS";
export const IS_LOADING = "IS_LOADING";
export const MORE_CARDS_SELECTED = "MORE_CARDS_SELECTED";

const initialState = {
	allCards: [],
	displayCards: 50,
	loading: null
};

export const searchReducer = (state = initialState, action) => {
	if (action.type === FETCHED_RESULTS) {
		return { ...state, allCards: action.payload, loading: false };
	}

	if (action.type === MORE_CARDS_SELECTED) {
		return { ...state, displayCards: state.displayCards + 15 };
	}

	return state;
};

const getDisplayCards = state => state.cards.displayCards;
const getAllCards = state => state.cards.allCards;

export const getVisibleCards = createSelector(
	[getDisplayCards, getAllCards],
	(displayCards, allCards) => {
		return allCards.slice(0, displayCards);
	}
);
