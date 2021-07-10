import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
				<Link to="/" className="navbar-brand">
					Noah
				</Link>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="navbar-item">
							<Link to="/animals" className="nav-link">
								Animals
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="/create" className="nav-link">
								Add Animal
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="/edit/:id" className="nav-link">
								Edit Animal
							</Link>
						</li>
						<li className="navbar-item">
							<Link to="/user" className="nav-link">
								Create User
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
