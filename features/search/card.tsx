import { Card as AntCard } from "antd";

export interface CardProps {}

const Card: React.SFC<CardProps> = () => {
	return <AntCard style={{ width: "calc(25vw - 10px)" }} />;
};

export default Card;
