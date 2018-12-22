export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const logoutMiddleware = store => next => async action => {
	if (action.type === LOGOUT) {
		try {
			const res = await fetch("./logout");

			if (res.ok) {
				await next({ type: LOGOUT_SUCCESS });
			} else {
				await next({ type: LOGOUT_FAILURE });
			}
		} catch (err) {
			await next({ type: LOGOUT_FAILURE, payload: err });
		}
	}
	return next(action);
};
