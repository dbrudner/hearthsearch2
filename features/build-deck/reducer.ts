export const CARD_ADDED = "CARD_ADDED";
export const CARD_REMOVED = "CARD_REMOVED";

export const buildDeckReducer = (state = [], action) => {
	if (action.type === CARD_ADDED) {
		return [...state, action.payload];
	}

	if (action.type === CARD_REMOVED) {
		return state.filter(card => card.name !== action.payload);
	}

	return state;
};
