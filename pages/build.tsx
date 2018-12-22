import { heroes as colors } from "../features/common/colors";
import Link from "next/link";
import BuildDeck from "../features/build-deck";
import ChooseFormat from "../features/build-deck/choose-format";
import * as typings from "../features/common/typings";

const classCard = hsClass => {
	return {
		borderRadius: "5px",
		margin: "5px",
		padding: "10px 30px",
		cursor: "pointer",
		backgroundColor: colors[hsClass.toLowerCase()]
	};
};

interface props {
	query: typings.Params;
}

const Build: React.SFC<props> = props => {
	const { format, hero } = props.query;

	if (hero) {
		return <BuildDeck {...props} />;
	}

	if (format) {
		return (
			<div style={{ display: "flex", width: "50vw" }}>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "auto auto auto",
						width: "85%",
						marginLeft: "30vw"
					}}
				>
					{Object.keys(typings.CardClass).map((hsClass: string) => (
						<Link href={`/build?format=${format}&hero=${hsClass}`}>
							<div style={classCard(hsClass)}>
								<h2
									style={{
										color: "white",
										textAlign: "center"
									}}
								>
									{hsClass}
								</h2>
								<img src={`/static/SVG/Class_${hsClass}.svg`} />
							</div>
						</Link>
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
