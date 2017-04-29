import React, { Component } from 'react';
import { connect } from 'react-redux';
import { groceryItemRef } from '../firebase';

class AddGrocery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		}
	}

	addGroceries() {
		const { title } = this.state;
		const { email } = this.props.user;
		groceryItemRef.push({email, title});

	}

	render() {
		return(
			<div style={{margin: '5%'}}>
				<h3>Lägg Till En Vara</h3>
				<div className="form" >
					<input
						className="form-control"
						type="text"
						onChange={event => this.setState({title: event.target.value})}
					/>
					<button
						className="btn btn-success btn-block"
						onClick={() => this.addGroceries()}
					>
						Lägg Till
					</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { user } = state;
	return {
		user
	}
}

export default connect(mapStateToProps, null)(AddGrocery);
