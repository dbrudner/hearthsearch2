import Title from "./title";
import Card from "./card";
import * as typings from "../common/typings";
import { connect } from "react-redux";
import * as actions from "../build-deck/model";

type CardsProps = {
	cards: typings.Card[];
	buildDeck: boolean;
	addToDeck: (card: typings.Card) => void;
};

const Cards: React.SFC<CardsProps> = ({ cards, buildDeck, addToDeck }) => (
	<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
		{cards.map(card => (
			<div key={card.dbfId}>
				<img
					onClick={buildDeck ? () => addToDeck(card) : null}
					style={{
						width: "70%",
						cursor: "pointer",
						margin: "auto",
						display: "block"
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
