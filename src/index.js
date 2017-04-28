import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import './index.css'

import App from './components/App';
import LogIn from './components/LogIn';

firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		const { email } = user;
		browserHistory.push('/app');
	} else {
		browserHistory.replace('/login');
	}
})

ReactDOM.render(
	<Router path='/' history={browserHistory}>
		<Route path='/app' component={App} />
		<Route path='/login' component={LogIn} />
	</Router>, document.getElementById('root')
)
