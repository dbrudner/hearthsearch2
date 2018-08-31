import { connect } from "react-redux";
import _ from "lodash";

const Deck = ({ deck }) => (
	<ul>
		{_.map(deck, card => (
			<li>
				{card.name} {card.quantity}
			</li>
		))}
	</ul>
);

export default connect(state => {
	console.log(state);
	return { deck: state.deck };
})(Deck);
