import * as types from "./cards-model";

const selectValidCards = (cards, params) => {
	const { hero, format } = params;
	return cards.filter(({ cardClass }) => {
		return (
			cardClass.toLowerCase() === hero.toLowerCase() ||
			cardClass.toLowerCase() === "neutral"
		);
	});
};

export const fetchCards = params => {
	return async dispatch => {
		const localCards = window.localStorage.getItem("cards");

		if (localCards) {
			console.log(params);
			const cards = params
				? selectValidCards(JSON.parse(localCards), params)
				: JSON.parse(localCards);
			return dispatch({
				type: types.FETCHED_RESULTS,
				payload: cards
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
