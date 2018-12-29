import { Card } from "antd";
import { heroes as colors } from "../features/common/colors";
import Link from "next/link";
import BuildDeck from "../features/build-deck";
import ChooseFormat from "../features/build-deck/choose-format";

const { Meta } = Card;

const CLASSES = [
	"Warrior",
	"Shaman",
	"Rogue",
	"Paladin",
	"Hunter",
	"Druid",
	"Warlock",
	"Mage",
	"Priest"
];

const classCard = hsClass => {
	return {
		borderRadius: "5px",
		margin: "5px",
		padding: "10px 30px",
		cursor: "pointer",
		backgroundColor: colors[hsClass.toLowerCase()]
	};
};

const Build = (props: any) => {
	const { format, hero } = props.query;

	if (hero) {
		return <BuildDeck {...props} />;
	}

	if (format) {
		return (
			<div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fill, minmax(250px, 1fr))",
						gridGap: "30px"
					}}
				>
					{CLASSES.map((hsClass: string) => (
						<div>
							<Link
								href={`/build?format=${format}&hero=${hsClass}`}
							>
								<div style={classCard(hsClass)}>
									<h2
										style={{
											color: "white",
											textAlign: "center"
										}}
									>
										{hsClass}
									</h2>
									<img
										src={`/static/SVG/Class_${hsClass}.svg`}
									/>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		);
	}
	return <ChooseFormat />;
};

Build.getInitialProps = ({ query }) => {
	return { query };
};

export default Build;
