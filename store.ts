import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cardsReducer } from "./features/generic/cards-model";
import { filtersReducer } from "./features/generic/filters-model";
import { sortReducer } from "./features/generic/sort-model";
import { buildDeckReducer } from "./features/build-deck/model";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
	cards: cardsReducer,
	build: buildDeckReducer,
	filters: filtersReducer,
	sort: sortReducer
});

export function initializeStore() {
	return createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk))
	);
}
