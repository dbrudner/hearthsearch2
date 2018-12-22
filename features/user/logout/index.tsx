import { connect } from "react-redux";
import { Button } from "antd";
import { LOGOUT } from "./middleware";

export * from "./middleware";

export const logout = () => ({
	type: LOGOUT
});

const Logout = ({ logout }) => {
	return (
		<Button type="danger" onClick={logout}>
			Logout
		</Button>
	);
};

export default connect(
	null,
	dispatch => ({
		logout: () => dispatch(logout())
	})
)(Logout);
