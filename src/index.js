import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import LogIn from './components/LogIn';

ReactDOM.render(
	<Router path='/' history={browserHistory}>
		<Route path='/app' component={App} />
		<Route path='/login' component={LogIn} />
	</Router>, document.getElementById('root')
)
