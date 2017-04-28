import { SET_COMPLETED } from '../constants';

export default (state = [], action) => {
	switch (action.type) {
		case SET_COMPLETED:
			const { completedItems } = action;
			return completedItems;
		default:
			return state;
	}
}
