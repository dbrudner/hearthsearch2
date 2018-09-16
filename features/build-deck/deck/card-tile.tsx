import * as typings from "../../generic/typings";
import { connect } from "react-redux";
import * as types from "../model";
// https://art.hearthstonejson.com/v1/tiles/CS2_027.png

type CardTileProps = typings.Card & {
	quantity: 1 | 2;
	removeCard: (id: string) => void;
};

const getDivStyle = id => ({
	width: "200px",
	backgroundImage: `url(https://art.hearthstonejson.com/v1/tiles/${id}.png)`,
	color: "white",
	padding: "20px",
	zIndex: 2
});

const overlay = {
	width: "200px",
	height: "100%",
	position: "absolute" as "absolute",
	zIndex: 1,
	background:
		"linear-gradient(to right, rgba(0, 0, 0, .8) 0%, rgba(55, 55, 55, 0.2) 100%)"
};

const CardTile: React.SFC<CardTileProps> = props => (
	<li
		onClick={() => props.removeCard(props.name)}
		key={props.dbfId}
		style={{ position: "relative", listStyle: "none" }}
	>
		<div style={overlay} />
		<div style={getDivStyle(props.id)}>
			{props.name} {props.quantity}
		</div>
	</li>
);

const mapDispatchToProps = dispatch => ({
	removeCard(name) {
		dispatch({
			type: types.CARD_REMOVED,
			payload: name
		});
	}
});

export default connect(
	null,
	mapDispatchToProps
)(CardTile);
