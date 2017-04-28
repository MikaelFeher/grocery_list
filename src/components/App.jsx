import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class App extends Component {

	logOut(){
		firebaseApp.auth().signOut();
	}

	render() {
		return(
			<div style={{margin: '5%'}}>
				<h1>Grocery List</h1>
				<button
					className="btn btn-danger"
					onClick={() => this.logOut()}
				>
					Log Out
				</button>
			</div>
		)
	}
}

export default App;
