import { Button, Icon } from "antd";

export default ({ cost, name, health, attack, text }) => (
	<>
		<div className="card">
			<div className="cost">{cost}</div>
			<div className="show-more">
				<Button type="primary">
					<Icon type="ellipsis" />
				</Button>
			</div>
			<div className="name">{name}</div>
			<div className="card-text">{text}</div>
			{attack && (
				<div className="attack">
					<div className="stat-attack">
						<div style={{ opacity: 1 }}>{attack}</div>
					</div>
					<img className="sword" src={`/static/SVG/sword.svg`} />
				</div>
			)}
			{health && (
				<div className="health">
					<div className="stat">{health}</div>
					<img className="heart" src={`/static/SVG/hearts.svg`} />
				</div>
			)}
		</div>
		<style jsx>{`
			.sword {
				position: absolute;
				width: 50px;
				right: calc(-50px);
				bottom: 0;
				z-index: 0;
			}

			.stat-attack {
				position: absolute;
				z-index: 1;
				bottom: 5px;
				right: calc(-90px / 2);
				-webkit-text-stroke: 1px black;
				color: white;
				font-weight: 700;
				border: 2px solid #282c5d;
				background: linear-gradient(135deg, #f2e974 0%, #606637 100%);
				width: 35px;
				text-align: center;
				border-radius: 20px;
				box-shadow: 2px 2px 2px rgb(1, 1, 1, 0.8);
			}

			.heart {
				position: absolute;
				width: 50px;
				left: calc(-50px);
				bottom: 0;
				z-index: 0;
			}

			.stat {
				position: absolute;
				z-index: 1;
				bottom: 5px;
				left: calc(-64px / 2);
				-webkit-text-stroke: 1px black;
				color: white;
				font-weight: 700;
			}

			.attack {
				position: absolute;
				bottom: 10px;
				left: 10px;
				font-size: 1.5em;
			}

			.health {
				position: absolute;
				bottom: 10px;
				right: 10px;
				font-size: 2em;
				color: black;
				z-index: 3;
			}

			.card {
				position: relative;
				width: calc(15vw - 10px);
				height: calc(20vw - 10px);
				border: 1px solid lightgray;
				border-radius: 5px;
			}

			.cost {
				position: absolute;
				top: 10px;
				left: 10px;
				font-size: 2em;
				color: dodgerblue;
			}

			.name {
				position: absolute;
				top: calc(5vw);
				width: 100%;
				text-align: center;
			}

			.show-more {
				position: absolute;
				right: 10px;
				top: calc(10px + 0.5em);
			}
		`}</style>
	</>
);
