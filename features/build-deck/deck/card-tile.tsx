import * as typings from "../../generic/typings";
import { connect } from "react-redux";
import * as types from "../model";
// https://art.hearthstonejson.com/v1/tiles/CS2_027.png

type CardTileProps = typings.Card & {
	quantity: 1 | 2;
	removeCard: (id: string) => void;
};

const getLiStyle = id => ({
	width: "100%",
	backgroundImage: `url(https://art.hearthstonejson.com/v1/tiles/${id}.png)`,
	color: "white",
	padding: "20px"
});

const CardTile: React.SFC<CardTileProps> = props => (
	<li
		onClick={() => props.removeCard(props.name)}
		style={getLiStyle(props.id)}
		key={props.dbfId}
	>
		{props.name} {props.quantity}
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
