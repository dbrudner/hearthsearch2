import Link from "next/link";

import { connect } from "react-redux";
import { isLoggedInSelector } from "../user";
import { UserNav } from "./";

const NavbarComponent = ({ isLoggedIn }) => {
	return (
		<div
			style={{
				padding: "15px",
				display: "flex",
				justifyContent: "space-between",
				backgroundColor: "#f3f3f3"
			}}
		>
			<div>
				<Link href="/build">
					<a style={{ margin: "15px" }}>Build a deck</a>
				</Link>
				<Link href="/search">
					<a style={{ margin: "15px" }}>Card search</a>
				</Link>
			</div>
			<div>
				{isLoggedIn ? (
					<UserNav />
				) : (
					<Link href="/login">
						<a style={{ margin: "15px" }}>Login</a>
					</Link>
				)}
			</div>
		</div>
	);
};

export const Navbar = connect(state => isLoggedInSelector(state))(
	NavbarComponent
);
