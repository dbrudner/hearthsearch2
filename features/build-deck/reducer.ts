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
		const { payload } = action;
		console.log(state);
		if (state[payload].quantity === 2) {
			// Two lines for readability. I'm surprised how complicated this was to do
			const updatedCard = { ...state[payload], quantity: 1 };
			return { ...state, [payload]: { ...updatedCard } };
		} else {
			return Object.keys(state).reduce((deck: any, cardName: string) => {
				if (cardName === payload) {
					return deck;
				}
				return { ...deck, [cardName]: { ...state[cardName] } };
			}, {});
		}
	}

	return state;
};
