import Title from "./title";
import Card from "./card";

const Cards = ({ cards }) => (
	<div>
		{cards.map(card => (
			<Card {...card} />
		))}
	</div>
);

export default Cards;
