import * as types from "./cards-model";

export const fetchCards = () => {
	return async dispatch => {
		const localCards = window.localStorage.getItem("cards");

		if (localCards) {
			return dispatch({
				type: types.FETCHED_RESULTS,
				payload: JSON.parse(localCards)
			});
		}

		dispatch({ type: types.IS_LOADING });

		const data = await fetch(
			"https://api.hearthstonejson.com/v1/25770/enUS/cards.collectible.json"
		);
		const cards = await data.json();

		window.localStorage.setItem("cards", JSON.stringify(cards));

		dispatch({ type: types.FETCHED_RESULTS, payload: cards });
	};
};
