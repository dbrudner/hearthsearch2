import * as typings from "../../common/typings";
import { connect } from "react-redux";
import * as types from "../model";
import { Rarity } from "../../../features/common/typings";
// https://art.hearthstonejson.com/v1/tiles/CS2_027.png

type CardTileProps = typings.Card & {
	quantity: 1 | 2;
	removeCard: (id: string) => void;
};

const getDivStyle = id => ({
	width: "200px",
	backgroundImage: `url(https://art.hearthstonejson.com/v1/tiles/${id}.png)`,
	color: "white",
	padding: "10px"
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
		style={{
			position: "relative",
			listStyle: "none",
			boxShadow: "4px 5px 12px -2px rgba(20,20,20,0.85)",
			fontWeight: 700
		}}
	>
		<div style={overlay} />
		<div style={getDivStyle(props.id)}>
			<div
				style={{
					position: "relative",
					display: "flex",
					justifyContent: "space-between",
					zIndex: 3,
					margin: 0
				}}
			>
				<div>
					<span
						style={{
							color: "#acbdff",
							marginRight: "10px"
						}}
					>
						{props.cost}
					</span>
					{props.name}
				</div>
				{props.rarity === Rarity.Legendary ? (
					<div style={{ width: "20px" }}>
						<img
							style={{ width: "100%" }}
							src={`/static/SVG/star.svg`}
						/>
					</div>
				) : (
					<div>{props.quantity}x</div>
				)}
			</div>
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
