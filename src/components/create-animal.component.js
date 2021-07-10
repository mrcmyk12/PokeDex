import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateAnimal extends Component {
	constructor(props) {
		super(props);

		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeSpecies = this.onChangeSpecies.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name: "TBD",
			species: "",
			datehome: new Date()
		};
	}

	onChangeName(e) {
		this.setState({
			name: e.target.value
		});
	}

	onChangeSpecies(e) {
		this.setState({
			species: e.target.value
		});
	}

	onChangeDate(date) {
		this.setState({
			datehome: date
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const animal = {
			name: this.state.name,
			species: this.state.species,
			datehome: this.state.date
		};

		console.log(animal);

		window.location = "/animals";
	}

	render() {
		return (
			<div className="container">
				<h3>Add New Animal</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group mb-2">
						<label>Animal's Name</label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.name}
							onChange={this.onChangeName}
						/>
					</div>
					<div className="form-group mb-2">
						<label>Species</label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.species}
							onChange={this.onChangeSpecies}
						/>
					</div>
					<div className="form-group mb-2">
						<label>Date Brought Home</label>
						<div className="mb-5">
							<DatePicker
								selected={this.state.datehome}
								onChange={this.onChangeDate}
							/>
						</div>
					</div>
					<div className="form-group">
						<input
							type="submit"
							value="Add New Animal"
							className="btn btn-primary"
						/>
					</div>
				</form>
			</div>
		);
	}
}
