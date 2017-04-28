import { combineReducers } from 'redux';
import user from './reducerUser';
import groceries from './reducerGroceries';
import collectedItems from './reducerCollectedItems';

export default combineReducers({
	user,
	groceries,
	collectedItems
})
