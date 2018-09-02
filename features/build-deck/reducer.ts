import _ from "lodash";

export const CARD_ADDED = "CARD_ADDED";
export const CARD_REMOVED = "CARD_REMOVED";
export const DECK_PARAMS_SELECTED = "DECK_PARAMS_SELECTED";

export const buildDeckReducer = (state = [], action) => {
	if (action.type === DECK_PARAMS_SELECTED) {
		return { ...state, params: action.payload };
	}

	if (action.type === CARD_ADDED) {
		const quantity = _.keys(state).includes(action.payload.name) ? 2 : 1;

		return {
			...state,
			[action.payload.name]: { ...action.payload, quantity }
		};
	}

	if (action.type === CARD_REMOVED) {
		const { payload } = action;
		if (state[payload].quantity === 2) {
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
