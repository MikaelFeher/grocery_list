import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import AddItem from './AddItem';

class App extends Component {

	logOut(){
		firebaseApp.auth().signOut();
	}

	render() {
		return(
			<div className="form col-sm-4" style={{margin: '5%'}}>
				<h1>Grocery List</h1>
				<hr/>
				<AddItem />
				<hr/>
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
