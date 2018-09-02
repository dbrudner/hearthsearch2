import { connect } from "react-redux";
import _ from "lodash";
import * as types from "../model";

const Deck = ({ params, deck, dispatch }) => (
	<div>
		<h2>{params.hero}</h2>
		<p>{params.format}</p>
		<ul>
			{_.map(deck, card => {
				return (
					<li key={card.dbfId}>
						{card.name} {card.quantity}
						<button
							onClick={() =>
								dispatch({
									type: types.CARD_REMOVED,
									payload: card.name
								})
							}
						>
							Remove
						</button>
					</li>
				);
			})}
		</ul>
	</div>
);

export default connect(state => {
	return { deck: state.build.deck, params: state.build.params };
})(Deck);
