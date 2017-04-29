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
			<div style={{margin: '5px', textAlign:'left'}}>
				<div className="row" >
					<div className="col-xs-8">
						<strong style={{fontSize:'26px', textTransform:'capitalize'}}>{title}</strong>
					</div>
					<div className="col-xs-4">
						<button
							className="btn btn-primary pull-right"
							onClick={() => this.completedItem()}
						>
							Plockad
						</button>

					</div>

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
