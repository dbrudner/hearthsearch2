import _ from "lodash";

export const CARD_ADDED = "CARD_ADDED";
export const CARD_REMOVED = "CARD_REMOVED";

const initialState = {
	params: {
		hero: null,
		format: null
	},
	deck: {}
};

export const buildDeckReducer = (state = initialState, action) => {
	if (action.type === CARD_ADDED) {
		const quantity = _.keys(state.deck).includes(action.payload.name)
			? 2
			: 1;

		return {
			...state,
			deck: {
				...state.deck,
				[action.payload.name]: { ...action.payload, quantity }
			}
		};
	}

	if (action.type === CARD_REMOVED) {
		const { payload } = action;
		if (state.deck[payload].quantity === 2) {
			const updatedCard = {
				...state.deck[payload],
				quantity: 1
			};
			return {
				...state,
				deck: { ...state.deck, [payload]: { ...updatedCard } }
			};
		} else {
			if (action.type === CARD_REMOVED) {
				const { payload } = action;
				if (state.deck[payload].quantity === 2) {
					const updatedCard = { ...state.deck[payload], quantity: 1 };
					return {
						...state,
						deck: { ...state.deck, [payload]: { ...updatedCard } }
					};
				} else {
					return {
						...state,
						deck: _.omit({ ...state.deck }, payload)
					};
				}
				return state;
			}
		}
	}

	return state;
};
