export enum ActionType {
	MORE_CARDS_SELECTED = "MORE_CARDS_SELECTED",
	UPDATED_SEARCH = "UPDATED_SEARCH"
}

type action = {
	type: ActionType;
	payload: any;
};

export type State = {
	displayCards: number;
	name: string;
	cardClass: string;
	type: string;
	race: string;
	rarity: string;
	set: string;
	text?: string;
	cost: number | "10+";
	health: number | "10+";
	attack: number | "10+";
};

const initialState = {
	displayCards: 15,
	name: "",
	cardClass: "",
	type: "",
	race: "",
	set: "",
	rarity: "",
	text: "",
	cost: null,
	health: null,
	attack: null
};

export const doSearchUpdate = (filterType: string, value: string | number) => {
	return {
		type: ActionType.UPDATED_SEARCH,
		payload: {
			filterType,
			value
		}
	};
};

export const filtersReducer = (state: State = initialState, action: action) => {
	if (action.type === ActionType.MORE_CARDS_SELECTED) {
		return { ...state, displayCards: state.displayCards + 15 };
	}

	if (action.type === ActionType.UPDATED_SEARCH) {
		return {
			...state,
			displayCards: 15,
			[action.payload.filterType]: action.payload.value
		};
	}

	return state;
};
