import { connect } from "react-redux";
import _ from "lodash";
import CardTile from "./card-tile";

const sortDeck = deck => {
	return _.sortBy(
		Object.keys(deck).map(card => {
			return deck[card];
		}),
		["quantity"]
	);
};

const Deck = ({ params, deck }) => (
	<div>
		<h2>{params.hero}</h2>
		<p>{params.format}</p>
		<ul style={{ margin: 0, padding: 0 }}>
			{_.map(sortDeck(deck), card => (
				<CardTile key={`cardtile-${card.dbfId}`} {...card} />
			))}
		</ul>
	</div>
);

export default connect(state => {
	return { deck: state.build.deck, params: state.build.params };
})(Deck);
