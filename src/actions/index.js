import { SIGNED_IN, SET_GROCERIES, SET_COMPLETED } from '../constants';

export function logUser(email) {
	const action = {
		type: SIGNED_IN,
		email
	}
	return action;
}

export function setGroceries(groceries) {
	const action = {
		type: SET_GROCERIES,
		groceries
	}
	return action;
}

export function setCompletedItems(completedItems) {
	const action = {
		type: SET_COMPLETED,
		completedItems
	}
}
