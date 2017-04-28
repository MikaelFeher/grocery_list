import React, { Component } from 'react';
import { groceryItemRef } from '../firebase';

class AddItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		}
	}

	addItem() {
		const { title } = this.state;
		console.log('title: ', title);
		groceryItemRef.push(title);
	}

	render() {
		return(
			<div style={{margin: '5%'}}>
				<h3>Add Items</h3>
				<div className="form" >
					<input
						className="form-control"
						type="text"
						onChange={event => this.setState({title: event.target.value})}
					/>
					<button
						className="btn btn-success"
						onClick={() => this.addItem()}
					>
						Add Item
					</button>
				</div>
			</div>
		)
	}
}

export default AddItem;
