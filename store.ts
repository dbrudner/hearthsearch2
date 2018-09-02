import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { searchReducer } from "./features/generic/cards-model";
import { buildDeckReducer } from "./features/build-deck/model";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	cards: searchReducer,
	build: buildDeckReducer
});

export function initializeStore() {
	return createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk))
	);
}
