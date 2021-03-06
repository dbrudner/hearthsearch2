import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cardsReducer } from "./features/common/cards-model";
import { userReducer } from "./features/user/";
import { filtersReducer } from "./features/common/filters-model";
import { sortReducer } from "./features/common/sort-model";
import { buildDeckReducer } from "./features/build-deck/model";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
	cards: cardsReducer,
	build: buildDeckReducer,
	filters: filtersReducer,
	sort: sortReducer,
	user: userReducer
});

export function initializeStore() {
	return createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk))
	);
}
