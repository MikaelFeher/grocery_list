import { SET_COLLECTED } from '../constants';

export default (state = [], action) => {
	switch (action.type) {
		case SET_COLLECTED:
			const { collectedItems } = action;
			return collectedItems;
		default:
			return state;
	}
}
