import { SET_GROCERIES } from '../constants';

export default (state = [], action) => {
	switch (action.type) {
		case SET_GROCERIES:
			const { groceries } = action;
			return groceries;
		default:
			return state;
	}
};
