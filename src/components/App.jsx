import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGrocery from './AddGrocery';
import GroceriesList from './GroceriesList'
import CollectedItemsList from './CollectedItemsList';

class App extends Component {

	logOut(){
		firebaseApp.auth().signOut();
	}

	render() {
		return(
			<div className="col-sm-4" style={{margin: '5%'}}>
				<h1 style={{textAlign:'center'}}>Inköpslista</h1>
				<hr/>
				<AddGrocery />
				<hr/>
				<GroceriesList />
				<hr/>
				<CollectedItemsList />
				<hr/>
				<button
					className="btn btn-danger pull-right"
					onClick={() => this.logOut()}
				>
					Logga Ut
				</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return{}
}

export default connect(mapStateToProps, null)(App);
