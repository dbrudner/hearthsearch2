import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { searchReducer } from "./features/search/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	search: searchReducer
});

export function initializeStore() {
	return createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk))
	);
}
