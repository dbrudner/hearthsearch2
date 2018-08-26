import * as types from "./actions";

export const cardsReducer = (state = [], action) => {
	if (action.type === types.FETCHED_RESULTS) {
		return action.payload;
	}

	return state;
};
