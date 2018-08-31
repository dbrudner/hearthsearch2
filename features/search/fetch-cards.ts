import * as types from "../generic/cards-model";

export const fetchCards = () => {
	return async dispatch => {
		dispatch({ type: types.IS_LOADING });

		const data = await fetch(
			"https://api.hearthstonejson.com/v1/25770/enUS/cards.collectible.json"
		);
		const cards = await data.json();
		dispatch({ type: types.FETCHED_RESULTS, payload: cards });
	};
};
