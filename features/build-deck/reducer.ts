import _ from "lodash";

export const CARD_ADDED = "CARD_ADDED";
export const CARD_REMOVED = "CARD_REMOVED";

export const buildDeckReducer = (state = [], action) => {
	if (action.type === CARD_ADDED) {
		if (_.keys(state).includes(action.payload.name)) {
			return {
				...state,
				[action.payload.name]: { ...action.payload, quantity: 2 }
			};
		} else {
			return {
				...state,
				[action.payload.name]: { ...action.payload, quantity: 1 }
			};
		}
	}

	if (action.type === CARD_REMOVED) {
		if (state.includes(action.payload.name)) {
			return {
				...state,
				[action.payload.name]: { ...action.payload, quantity: 1 }
			};
		} else {
			// const {nom, ...deck} = state
			return state;
		}
	}

	return state;
};
