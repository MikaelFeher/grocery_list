import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGrocery from './AddGrocery';
import GroceriesList from './GroceriesList'

class App extends Component {

	logOut(){
		firebaseApp.auth().signOut();
	}

	render() {
		return(
			<div className="col-sm-4" style={{margin: '5%'}}>
				<h1>Grocery List</h1>
				<hr/>
				<AddGrocery />
				<hr/>
				<GroceriesList />
				<hr/>
				<h4>Collected Items</h4>
				
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

function mapStateToProps(state) {
	return{}
}

export default connect(mapStateToProps, null)(App);
