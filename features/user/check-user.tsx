import * as React from "react";
import { connect } from "react-redux";
import {
	selectUser,
	userFetched,
	NOT_LOGGED_IN,
	userNotLoggedIn
} from "./user-model";

const { useEffect } = React;

const CheckUserComponent = ({
	children,
	user,
	userFetched,
	userNotLoggedIn
}) => {
	if (!user) {
		// Function inside a function to comply with react warning
		useEffect(() => {
			(async () => {
				try {
					const res = await fetch("/fetch-user");
					const user = await res.json();
					console.log(user);
					if (user) {
						userFetched(user);
					} else {
						userNotLoggedIn(NOT_LOGGED_IN);
					}
				} catch (err) {
					throw err;
					userNotLoggedIn(NOT_LOGGED_IN);
				}
			})();
		});
	}

	return <>{children}</>;
};

export const CheckUser = connect(
	selectUser,
	{ userFetched, userNotLoggedIn }
)(CheckUserComponent);
