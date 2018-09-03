import Title from "./title";

const Cards = ({ cards }) => (
	<div>
		{cards.map(card => (
			<div style={{ margin: "10px", fontSize: "24px" }}>
				{card.name} - {card.cardClass} 0 {card.text}
			</div>
		))}
	</div>
);

export default Cards;
