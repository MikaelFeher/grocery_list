import React, { Component } from 'react';
import { connect } from 'react-redux';
import { groceryItemRef } from '../firebase';
import { setGroceries } from '../actions';
import GroceryItem from './GroceryItem';

class GroceriesList extends Component {
	componentDidMount() {
		groceryItemRef.on('value', snap => {
			let groceries = [];
			snap.forEach(item => {
				const { email, title } = item.val();
				groceries.push({ email, title });
			})
			this.props.setGroceries(groceries);
		})
	}

	render() {
		console.log(this.props.groceries);
		return(
			<div style={{margin: '5%'}}>
				<h1>Groceries</h1>
				{
					this.props.groceries.map((item, index) => {
						return (
							<GroceryItem
								key={index}
								item={item}
							/>
						)
					})
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { groceries } = state;
	return {
		groceries
	}
}

export default connect(mapStateToProps, { setGroceries })(GroceriesList);