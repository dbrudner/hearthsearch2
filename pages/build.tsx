import { heroes as colors } from "../features/common/colors";
import Link from "next/link";
import BuildDeck from "../features/build-deck";
import ChooseFormat from "../features/build-deck/choose-format";
import { CardClass } from "../features/common/typings";
import capitalize from "lodash/capitalize";

const classCard = hsClass => ({
	borderRadius: "5px",
	margin: "5px",
	padding: "10px 30px",
	cursor: "pointer",
	backgroundColor: colors[hsClass.toLowerCase()]
});

const Build = (props: any) => {
	const { format, hero } = props.query;

	if (Object.values(CardClass).includes(hero)) {
		return <BuildDeck {...props} />;
	}

	if (format) {
		return (
			<div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fill, 250px)",
						gridGap: "30px"
					}}
				>
					{Object.values(CardClass)
						.filter(hsClass => hsClass !== CardClass.Neutral)
						.map(hsClass => (
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
											{capitalize(hsClass)}
										</h2>
										<img
											style={{ width: "100%" }}
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
