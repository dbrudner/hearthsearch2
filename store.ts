import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cardsReducer } from "./features/search/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	cards: cardsReducer
});

export function initializeStore() {
	return createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk))
	);
}
