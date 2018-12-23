import Router from "next/router";
import { selectUser, logUserOut } from "../user-model";
import { connect } from "react-redux";

const logout = async logUserOut => {
	const res = await fetch("/logout");
	const data = await res.json();
	console.log(data);

	if (data.signedOut) {
		logUserOut();
	}

	if (res.ok) {
		Router.push("/", {
			query: {
				logout: "true"
			}
		});
	}
};

const LogoutComponent = ({ logUserOut }) => {
	console.log(logUserOut);
	return <a onClick={() => logout(logUserOut)}>Logout</a>;
};

export const Logout = connect(
	null,
	{ logUserOut }
)(LogoutComponent);
