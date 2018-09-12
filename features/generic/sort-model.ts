export enum ActionTypes {
	UPDATED_SORT_DIRECTION = "UPDATED_SORT_DIRECTION",
	UPDATED_SORT_BY = "UPDATED_SORT_BY"
}

export type SortBy = "name" | "cost" | "health" | "attack" | null;
export type Direction = "ascending" | "descending";

export type State = {
	direction: Direction;
	sortBy: SortBy;
};

type Action = {
	type: ActionTypes;
	payload: SortBy;
};

const initialState = {
	direction: "descending" as "descending",
	sortBy: null
};

export const sortReducer = (state: State = initialState, action: Action) => {
	if (action.type === ActionTypes.UPDATED_SORT_DIRECTION) {
		return {
			...state,
			direction: action.payload
		};
	}

	if (action.type === ActionTypes.UPDATED_SORT_BY) {
		return {
			...state,
			sortBy: action.payload
		};
	}

	return state;
};
