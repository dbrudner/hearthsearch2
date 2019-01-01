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

const onScroll = dispatch => {
	if (
		window.innerHeight + window.scrollY >=
		document.getElementById("__next").offsetHeight
	) {
		dispatch({ type: types.ActionTypes.MORE_CARDS_SELECTED });
	}
};

const LoadMore: React.SFC<props> = ({ dispatch, children }) => {
	const handleEvent = debounce(() => onScroll(dispatch), 300);

	useEffect(() => {
		window.addEventListener("scroll", handleEvent, false);
		return function cleanup() {
			window.removeEventListener("scroll", handleEvent, false);
		};
	});

	return <div>{children}</div>;
};

export default connect()(LoadMore);
