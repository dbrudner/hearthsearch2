import * as React from "react";
import { Switch, Button } from "antd";
import Link from "next/link";

export default class ChooseFormat extends React.Component<any, any> {
	state = {
		format: "Standard"
	};

	handleChange = checked => {
		if (checked) {
			return this.setState({ format: "Standard" });
		}
		return this.setState({ format: "Wild" });
	};

	render() {
		const image =
			this.state.format === "Wild" ? "Mode_Wild" : "Mode_Standard_Kraken";

		return (
			<div style={{ textAlign: "center" }}>
				<h1>Select format</h1>
				<Switch defaultChecked onChange={this.handleChange} />
				<h2 style={{ marginTop: "20px" }}>{this.state.format}</h2>
				<div>
					<img
						style={{
							width: "20vw",
							transition: "all .3s",
							opacity: 0.7
						}}
						src={`/static/SVG/${image}.svg`}
					/>
				</div>
				<Link href={`/build?format=${this.state.format}`}>
					<Button style={{ marginTop: "15px" }}>Choose class</Button>
				</Link>
			</div>
		);
	}
}
