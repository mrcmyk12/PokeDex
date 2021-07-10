import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import Homepage from "./components/homepage.component";
import ListAnimal from "./components/list-animal.component";
import EditAnimal from "./components/edit-animal.component";
import CreateAnimal from "./components/create-animal.component";
import CreateUser from "./components/create-user.component";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Navbar />
			<br />
			<Route path="/" exact component={Homepage} />
			<Route path="/animals" component={ListAnimal} />
			<Route path="/edit/:id" component={EditAnimal} />
			<Route path="/create" component={CreateAnimal} />
			<Route path="/user" component={CreateUser} />
		</Router>
	);
}

export default App;
