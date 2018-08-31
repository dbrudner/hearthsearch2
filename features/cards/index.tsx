import { Collapse } from "antd";
import Title from "./title";

const Cards = ({ cards }) => (
	<Collapse defaultActiveKey={["1"]}>
		{cards.map(card => (
			<Collapse.Panel
				header={<Title {...card} />}
				key={card.dbfId}
				showArrow={false}
			>
				<p>Attack: {card.attack}</p>
				<p>Health: {card.health}</p>
				<p>{card.flavor}</p>
			</Collapse.Panel>
		))}
	</Collapse>
);

export default Cards;
