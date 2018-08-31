import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { searchReducer } from "./features/search/reducer";
import { buildDeckReducer } from "./features/build-deck/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	search: searchReducer,
	deck: buildDeckReducer
});

export function initializeStore() {
	return createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk))
	);
}
