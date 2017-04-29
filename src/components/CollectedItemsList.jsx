import React, { Component } from 'react';
import { connect } from 'react-redux';
import { collectedItemRef } from '../firebase';
import { setCollectedItems } from '../actions';
import CollectedItem from './CollectedItem';

class CollectedItemsList extends Component {
	componentDidMount() {
		collectedItemRef.on('value', snap => {
			let collectedItems = [];
			snap.forEach(collectedItem => {
				const { email, title } = collectedItem.val();
				const serverKey = collectedItem.key;
				collectedItems.push({ email, title, serverKey });
			})
			this.props.setCollectedItems(collectedItems);
		})
	}

	clearCollected() {
		collectedItemRef.set([]);
	}

	render() {
		return(
			<div style={{margin: '5%', textAlign:'center'}}>
				<h3>Plockade Varor</h3>
				{
					this.props.collectedItems.map((collectedItem, index) => {
						return (
							<CollectedItem
								key={index}
								collectedItem={collectedItem}
							/>
						)
					})
				}
				<button
					className="btn btn-warning btn-sm"
					style={{marginTop:'10px'}}
					onClick={() => this.clearCollected()}
				>
					Rensa Plockade Varor
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
