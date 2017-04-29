import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import reducer from './reducers';
import './index.css'

import App from './components/App';
import LogIn from './components/LogIn';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		const { email } = user;
		store.dispatch(logUser(email));
		browserHistory.push('/grocery_list/app');
	} else {
		browserHistory.replace('/grocery_list/login');
	}
})

ReactDOM.render(
	<Provider store={store}>
		<Router path='/' history={browserHistory}>
			<Route path='/grocery_list/app' component={App} />
			<Route path='/grocery_list/login' component={LogIn} />
		</Router>
	</Provider>, document.getElementById('root')
)
