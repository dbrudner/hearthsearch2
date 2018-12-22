import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import stylesheet from "antd/dist/antd.min.css";
import "../style.css";
import { Navbar } from "../features/nav";

class MyApp extends App {
	render() {
		const { Component, pageProps, reduxStore } = this.props;
		return (
			<Container>
				<Provider store={reduxStore}>
					<>
						<Navbar />
						<div style={{ width: "900px", margin: "auto" }}>
							<Component {...pageProps} />
						</div>
					</>
				</Provider>
			</Container>
		);
	}
}

export default withReduxStore(MyApp);
