import * as typings from "./typings";

export enum ActionTypes {
	FETCHED_RESULTS = "FETCHED_RESULTS",
	IS_LOADING = "IS_LOADING",
	MORE_CARDS_SELECTED = "MORE_CARDS_SELECTED"
}

export enum Loading {
	Loading = "LOADING",
	Loaded = "LOADED",
	Waiting = "WAITING"
}

type Action = {
	type: ActionTypes;
	payload: any;
};

export type State = {
	allCards: typings.Card[];
	loading: Loading;
};

const initialState = {
	allCards: [],
	loading: null
};

export const fetchCards = () => {
	return async dispatch => {
		dispatch({ type: ActionTypes.IS_LOADING });
		const localCards = window.localStorage.getItem("cards");

		if (localCards) {
			const cards = JSON.parse(localCards);
			return dispatch({
				type: ActionTypes.FETCHED_RESULTS,
				payload: cards
			});
		}

		const data = await fetch(
			"https://api.hearthstonejson.com/v1/25770/enUS/cards.collectible.json"
		);

		const cards = await data.json();

		window.localStorage.setItem("cards", JSON.stringify(cards));

		dispatch({ type: ActionTypes.FETCHED_RESULTS, payload: cards });
	};
};

export const cardsReducer = (state: State = initialState, action: Action) => {
	if (action.type === ActionTypes.FETCHED_RESULTS) {
		return { ...state, allCards: action.payload, loading: false };
	}

	return state;
};
