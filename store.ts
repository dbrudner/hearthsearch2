import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

type stateType = {
	thing: string;
};

const defaultState = {
	thing: ""
};

export const reducer = (state: stateType = defaultState, action) => {
	if (action.type === "THING_CHANGED") {
		return { ...state, thing: "updated" };
	}
};

export function initializeStore(initialState = defaultState) {
	return createStore(
		reducer,
		initialState,
		composeWithDevTools(applyMiddleware())
	);
}
