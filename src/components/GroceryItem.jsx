import React, { Component } from 'react';
import { connect } from 'react-redux';

class GroceryItem extends Component {
	render() {
		const { title } = this.props.item;

		return(
			<div style={{margin: '5px'}}>
				<strong style={{fontSize:'16px'}}>{title}</strong>
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
