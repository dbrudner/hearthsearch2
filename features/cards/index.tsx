import { Collapse, Button, Icon } from "antd";
import { heroes as colors } from "../generic/colors";

const style = {
	width: "30vw"
};

const capitalize = string => string.charAt(0) + string.substr(1).toLowerCase();

const Title = props => {
	const handleClick = e => {
		e.stopPropagation();
		console.log("Hi");

		// Dispatch action to add card
	};

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "4vw 8vw 8vw 8vw",
				textAlign: "center",
				width: "30vw"
			}}
		>
			<Button onClick={e => handleClick(e)}>Add</Button>
			<div>{props.name}</div>
			<div style={{ color: colors[props.cardClass.toLowerCase()] }}>
				{capitalize(props.cardClass)}
			</div>
			<div>
				{capitalize(props.type)} ({props.cost})
			</div>
		</div>
	);
};

const Card = props => (
	<Collapse.Panel key={props.dbfId} header={<Title {...props} />}>
		<p>Attack: {props.attack}</p>
		<p>Health: {props.health}</p>
		<p>{props.flavor}</p>
	</Collapse.Panel>
);

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
