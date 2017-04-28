import { combineReducers } from 'redux';
import user from './reducerUser';
import groceries from './reducerGroceries';

export default combineReducers({
	user,
	groceries
})
