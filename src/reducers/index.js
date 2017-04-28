import { combineReducers } from 'redux';
import user from './reducerUser';
import groceries from './reducerGroceries';
import completedItems from './reducerCompletedItems';

export default combineReducers({
	user,
	groceries,
	completedItems
})
