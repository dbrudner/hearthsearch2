import * as types from "./actions";

export const fetchCards = () => {
	return async dispatch => {
		const data = await fetch(
			"https://api.hearthstonejson.com/v1/25770/enUS/cards.collectible.json"
		);
		const cards = await data.json();
		console.log(cards);
		dispatch({ type: types.FETCHED_RESULTS, payload: cards });
	};
};
