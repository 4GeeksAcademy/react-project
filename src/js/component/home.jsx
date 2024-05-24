import React from "react";
import {Navbar} from "./navbar"
import {Jumbotron} from "./jumbotron"  
import {Card} from "./card"
import {Footer} from "./footer"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron /> 
			<div className="container"> 
			<div className="row"> 
			<div className="col-3"> <Card></Card></div>
			<div className="col-3"> <Card></Card></div>
			<div className="col-3"> <Card></Card></div>
			<div className="col-3"> <Card></Card></div>
			</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
