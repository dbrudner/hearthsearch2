import { useEffect } from "react";
import { fetchCards } from "../common/cards-model";
import { connect } from "react-redux";
import SearchInput from "../common/search-input";
import Filters from "../common/filters";
import LoadMore from "../common/load-more";
import Cards from "../cards";
import { getVisibleCards } from "../common/filter-and-sort";
export interface SearchProps {
	fetchCards: () => void;
}

const Search = props => {
	useEffect(() => {
		props.fetchCards();
	});

	return (
		<>
			<div style={{ display: "grid", gridTemplateColumns: "1fr 5fr" }}>
				<div
					style={{
						padding: "15px 15px 150px 15px",
						backgroundColor: "#e2ebf4"
					}}
				>
					<h2>Search</h2>
					<SearchInput buildDeck />
					<div style={{ marginTop: "15px" }}>
						<Filters buildDeck />
					</div>
				</div>
				<LoadMore>
					<Cards cards={props.visibleCards} />
				</LoadMore>
			</div>
		</>
	);
};

const mapStateToProps = state => {
	return {
		visibleCards: getVisibleCards(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchCards: () => dispatch(fetchCards())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);
