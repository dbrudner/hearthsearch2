import Title from "./title";
import Card from "./card";

const Cards = ({ cards }) => (
	<div
		style={{
			display: "grid",
			gridTemplateColumns: "auto auto auto auto auto"
		}}
	>
		{cards.map(({ id }) => (
			<div style={{ width: "calc(20vw - 10px)" }}>
				<img
					src={`http://media.services.zam.com/v1/media/byName/hs/cards/enus/${id}.png`}
				/>
			</div>
			// <Card {...card} />
		))}
	</div>
);

export default Cards;
