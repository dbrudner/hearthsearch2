import { connect } from "react-redux";
import _ from "lodash";
import * as types from "../model";

const Deck = props => (
	<ul>
		{_.map(props.deck, card => (
			<li key={card.dbfId}>
				{card.name} {card.quantity}
				<button
					onClick={() =>
						props.dispatch({
							type: types.CARD_REMOVED,
							payload: card.name
						})
					}
				>
					Remove
				</button>
			</li>
		))}
	</ul>
);

export default connect(state => {
	return { deck: state.deck };
})(Deck);
