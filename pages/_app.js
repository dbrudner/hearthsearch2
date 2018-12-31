import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import stylesheet from "antd/dist/antd.min.css";
import "../style.css";
import { Navbar } from "../features/nav";
import { CheckUser } from "../features/user";

class MyApp extends App {
	render() {
		const { Component, pageProps, reduxStore } = this.props;
		return (
			<Container>
				<Provider store={reduxStore}>
					<CheckUser>
						<>
							<Navbar />
							<Component {...pageProps} />
						</>
					</CheckUser>
				</Provider>
			</Container>
		);
	}
}

export default withReduxStore(MyApp);
