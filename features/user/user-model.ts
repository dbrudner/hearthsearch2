import { createSelector } from "reselect";

export const selectUser = ({ user }) => ({ user });
export const USER_FETCHED = "USER_FETCHED";
export const NOT_LOGGED_IN = "NOT_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";

const intitialState = {};

export const userFetched = user => ({
	type: USER_FETCHED,
	payload: user
});
export const userNotLoggedIn = () => ({
	type: NOT_LOGGED_IN
});
export const logUserOut = () => ({
	type: USER_LOGGED_OUT
});

export const userReducer = (state = intitialState, action) => {
	if (action.type === USER_FETCHED) {
		return action.payload;
	}
	if (action.type === NOT_LOGGED_IN) {
		return NOT_LOGGED_IN;
	}
	if (action.type === USER_LOGGED_OUT) {
		return NOT_LOGGED_IN;
	}
	return state;
};

export const isLoggedInSelector = ({ user }) => ({
	isLoggedIn: Boolean(user._id)
});
