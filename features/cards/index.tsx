import Title from "./title";
import Card from "./card";
import * as typings from "../generic/typings";
import { connect } from "react-redux";
import * as actions from "../build-deck/model";

type CardsProps = {
	cards: typings.Card[];
	buildDeck: boolean;
	addToDeck: (card: typings.Card) => void;
};

const Cards: React.SFC<CardsProps> = ({ cards, buildDeck, addToDeck }) => (
	<div>
		{cards.map(card => (
			<div
				style={{
					width: "calc(20vw - 20px)",
					position: "relative",
					display: "inline-block",
					margin: "auto"
				}}
			>
				<img
					onClick={buildDeck ? () => addToDeck(card) : null}
					style={{
						width: "70%",
						cursor: "pointer",
						clip: "rect(30px, 30px, 30px, 30px)"
					}}
					src={`http://media.services.zam.com/v1/media/byName/hs/cards/enus/${
						card.id
					}.png`}
				/>
			</div>
		))}
	</div>
);

const mapDispatchToProps = dispatch => ({
	addToDeck: card => {
		dispatch({ type: actions.CARD_ADDED, payload: card });
	}
});

export default connect(
	null,
	mapDispatchToProps
)(Cards);
