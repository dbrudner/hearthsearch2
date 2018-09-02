import * as types from "./cards-model";
import * as typings from "./typings";

const selectValidCards = (cards: typings.Card[], params: typings.Params) => {
	const { hero, format } = params;
	return cards.filter(({ cardClass }) => {
		return (
			cardClass.toLowerCase() === hero.toLowerCase() ||
			cardClass.toLowerCase() === "neutral"
		);
	});
};

export const fetchCards = () => {
	return async dispatch => {
		dispatch({ type: types.IS_LOADING });
		const localCards = window.localStorage.getItem("cards");

		if (localCards) {
			const cards = JSON.parse(localCards);
			return dispatch({
				type: types.FETCHED_RESULTS,
				payload: cards
			});
		}

		const data = await fetch(
			"https://api.hearthstonejson.com/v1/25770/enUS/cards.collectible.json"
		);
		const cards = await data.json();

		window.localStorage.setItem("cards", JSON.stringify(cards));

		dispatch({ type: types.FETCHED_RESULTS, payload: cards });
	};
};
