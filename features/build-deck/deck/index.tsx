import { connect } from "react-redux";
import _ from "lodash";
import CardTile from "./card-tile";
import * as types from "../model";

const sortDeckKeys = deck =>
	Object.keys(deck).sort((a, b) => {
		if (a > b) {
			return 1;
		}
		if (a < b) {
			return -1;
		}
		return 0;
	});

const sortDeck = (deck, keys) => keys.map(key => deck[key]);

const Deck = ({ params, deck }) => (
	<div>
		<h2>{params.hero}</h2>
		<p>{params.format}</p>
		<ul style={{ margin: 0, padding: 0 }}>
			{_.map(sortDeck(deck, sortDeckKeys(deck)), card => (
				<CardTile key={`cardtile-${card.dbfId}`} {...card} />
			))}
		</ul>
	</div>
);

export default connect(state => {
	return { deck: state.build.deck, params: state.build.params };
})(Deck);
