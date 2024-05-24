import React from "react";
import {Navbar} from "./navbar"
import {Jumbotron} from "./jumbotron"  
import {Card} from "./card"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron /> 
			<div className=""> 
			<div className="row"> 
			<div className="col-3"> <Card></Card></div>
			<div className="col-3"> <Card></Card></div>
			<div className="col-3"> <Card></Card></div>
			<div className="col-3"> <Card></Card></div>
			</div>
			</div>
		</div>
	);
};

export default Home;
