import * as types from "./cards-model";
import { connect } from "react-redux";
import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import debounce from "lodash/debounce";

interface props {
	dispatch: (
		action: {
			type: string;
		}
	) => void;
}

const handleScroll = e => {
	console.log(e.target.scrollingElement.scrollHeight);
	console.log(e.target.scrollingElement.offsetHeight);
	console.log(e);
	// const bottom =
	// 	e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
	// console.log(bottom);
	// if (bottom) {
	// 	dispatch({ type: types.ActionTypes.MORE_CARDS_SELECTED });
	// }
};

const onScroll = dispatch => {
	console.log("HI");
	if (
		window.innerHeight + window.scrollY >=
		document.getElementById("__next").offsetHeight
	) {
		dispatch({ type: types.ActionTypes.MORE_CARDS_SELECTED });
	}
};

const LoadMoreButton: React.SFC<props> = ({ dispatch, children }) => {
	const handleEvent = debounce(() => onScroll(dispatch), 300);

	useEffect(() => {
		window.addEventListener("scroll", handleEvent, false);
		return function cleanup() {
			window.removeEventListener("scroll", handleEvent, false);
		};
	});

	return (
		<div onScroll={() => console.log("HEY")}>
			<h1>load more</h1>
			{children}
		</div>
	);
};

export default connect()(LoadMoreButton);
