import { connect } from "react-redux";
import _ from "lodash";
import CardTile from "./card-tile";
import * as types from "../model";

const Deck = ({ params, deck, dispatch }) => (
	<div>
		<h2>{params.hero}</h2>
		<p>{params.format}</p>
		<ul>
			{_.map(deck, card => (
				<CardTile key={`cardtile-${card.dbfId}`} {...card} />
			))}
		</ul>
	</div>
);

export default connect(state => {
	return { deck: state.build.deck, params: state.build.params };
})(Deck);
