import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: {
				message: ''
			}
		}
	}

	loginUser() {
		const { email, password } = this.state;
		firebaseApp.auth().signInWithEmailAndPassword(email, password)
			.catch(error => {
				console.log('error', error);
				this.setState({error})
			})
		console.log('email: ', email);
		console.log('password: ', password);
	}

	render() {

		return(
			<div className="form col-sm-4" style={{margin: '5%'}}>
				<h2>Login</h2>
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						placeholder="Enter your email..."
						onChange={event => this.setState({email: event.target.value})}
					/>
					<input
						className="form-control"
						type="password"
						placeholder="...and you password"
						onChange={event => this.setState({password: event.target.value})}
					/>
					<button
						className="btn btn-primary"
						onClick={() => this.loginUser()}
					>
						Log In
					</button>
					<div>{this.state.error.message}</div>

				</div>
			</div>
		)
	}
}

export default LogIn;
