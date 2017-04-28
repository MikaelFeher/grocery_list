import React, { Component } from 'react';
import { connect } from 'react-redux';
import { collectedItemRef } from '../firebase';
import { setCollectedItems } from '../actions';

class CollectedItemsList extends Component {
	componentDidMount() {
		collectedItemRef.on('value', snap => {
			let collectedItems = [];
			snap.forEach(collectedItem => {
				const { email, title } = collectedItem.val();
				collectedItems.push({ email, title });
			})
			this.props.setCollectedItems(collectedItems);
		})
	}

	clearCollected() {
		collectedItemRef.set([]);
	}

	render() {
		return(
			<div style={{margin: '5%'}}>
				<h3>Collected Items</h3>
				{
					this.props.collectedItems.map((collectedItem, index) => {
						const { email, title } = collectedItem;
						return (
							<div key={index}>
								<strong style={{textTransform:'capitalize', margin:'10px'}}>{title}</strong>
							</div>
						)
					})
				}
				<button
					className="btn btn-warning btn-sm"
					style={{marginTop:'10px'}}
					onClick={() => this.clearCollected()}
				>
					Clear Collected
				</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { collectedItems } = state;
	return {
		collectedItems
	}
}

export default connect(mapStateToProps, { setCollectedItems })(CollectedItemsList);
