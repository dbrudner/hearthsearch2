import * as React from "react";
import "../style.css";
import { connect } from "react-redux";
import { Alert } from "antd";
import Link from "next/link";

export interface IndexProps {}

export interface IndexState {}
const Index = props => {
	if (props.logout === "true") {
		return (
			<div>
				<Alert message="You have succesfully logged out" />
				<p>
					Click{" "}
					<Link href="/">
						<a>here</a>
					</Link>{" "}
					to return to homepage
				</p>
			</div>
		);
	}

	return (
		<div>
			<h1>Hearthsearch</h1>
		</div>
	);
};

Index.getInitialProps = ({ query }) => {
	return {
		logout: query.logout
	};
};

export default Index;
