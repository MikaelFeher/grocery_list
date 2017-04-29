import React, { Component } from 'react';
import { connect } from 'react-redux';
import { collectedItemRef, groceryItemRef } from '../firebase';

class GroceryItem extends Component {

	completedItem() {
		const { title, serverKey } = this.props.item;
		groceryItemRef.child(serverKey).remove();
		collectedItemRef.push({title});
	}

	render() {
		const { title } = this.props.item;

		return(
			<div style={{margin: '5px', textAlign:'center'}}>
				<div >
					<strong
						style={{fontSize:'26px', textTransform:'capitalize'}}
						onClick={() => this.completedItem()}
					>
						{title}
					</strong>
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

export default connect(mapStateToProps, null)(GroceryItem);
