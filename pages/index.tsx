import * as React from "react";
import "../style.css";

export interface IndexProps {}

export interface IndexState {}

class Index extends React.Component<IndexProps, IndexState> {
	constructor(props: IndexProps) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<h1 className="red">Hearthsearch</h1>
			</div>
		);
	}
}

export default Index;
