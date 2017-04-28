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
		browserHistory.push('/app');
	} else {
		browserHistory.replace('/login');
	}
})

ReactDOM.render(
	<Provider store={store}>
		<Router path='/' history={browserHistory}>
			<Route path='/app' component={App} />
			<Route path='/login' component={LogIn} />
		</Router>
	</Provider>, document.getElementById('root')
)
