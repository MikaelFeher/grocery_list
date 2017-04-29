import React, { Component } from 'react';
import { connect } from 'react-redux';
import { collectedItemRef, groceryItemRef } from '../firebase';

class CollectedItem extends Component {

	unCompleteItem() {
		const { title, serverKey } = this.props.collectedItem;
		collectedItemRef.child(serverKey).remove();
		groceryItemRef.push({title});
	}

	render() {
		const { title } = this.props.collectedItem;

		return(
			<div style={{margin: '5px', textAlign:'center'}}>
				<div>
					<strong
						style={{textTransform:'capitalize', margin:'10px', fontSize:'20px'}}
						onClick={() => this.unCompleteItem()}
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

export default connect(mapStateToProps, null)(CollectedItem);
