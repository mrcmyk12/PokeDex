import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeFirstName = this.onChangeFirstName.bind(this);
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: "",
			password: "",
			firstname: "",
			lastname: ""
		};
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value
		});
	}

	onChangePassword(e) {
		this.setState({
			password: e.target.value
		});
	}

	onChangeFirstName(e) {
		this.setState({
			firstname: e.target.value
		});
	}

	onChangeLastName(e) {
		this.setState({
			lastname: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const user = {
			username: this.state.username,
			password: this.state.password,
			firstname: this.state.firstname,
			lastname: this.state.lastname
		};

		console.log(user);

		axios
			.post("http://localhost:3000/ausers/asignup", user)
			.then((res) => console.log(res));
	}

	render() {
		return (
			<div className="container">
				<h3>Create New User</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group mb-2">
						<label>Username</label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.username}
							onChange={this.onChangeUsername}
						/>
					</div>
					<div className="form-group mb-2">
						<label>Password</label>
						<input
							type="text"
							required
							className="form-control"
							valeu={this.state.password}
							onChange={this.onChangePassword}
						/>
					</div>
					<div className="form-group mb-2">
						<label>First Name</label>
						<input
							type="text"
							required
							className="form-control"
							valeu={this.state.firstname}
							onChange={this.onChangeFirstName}
						/>
					</div>
					<div className="form-group mb-2">
						<label>Last Name</label>
						<input
							type="text"
							required
							className="form-control"
							valeu={this.state.lastname}
							onChange={this.onChangeLastName}
						/>
					</div>
					<div className="form-group mb-2">
						<input
							type="submit"
							value="Create New User"
							className="btn btn-primary"
						/>
					</div>
				</form>
			</div>
		);
	}
}
