import { SIGNED_IN, SET_GROCERIES } from '../constants';

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
