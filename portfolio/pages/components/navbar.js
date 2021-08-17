/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";





/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                    Navbar Class                                                    */
/* ------------------------------------------------------------------------------------------------------------------ */
class Navbar extends React.Component {

	/* ==================================================== On Render =================================================== */
	render () {
		return (<div className="navbar" id="navbar">

			{/* Home */}
			<a className="active" href="/">Home</a>

			{/* Projects */}
			<a href="/projects">Projects</a>

			{/* Logo */}
			<div className="logo_container"><img className="logo" src="/logo.svg"/></div>

			{/* About */}
			<a href="/about">About</a>

			{/* Contact */}
			<a href="/contact">Contact</a>

			{/* Social Media Contact */}
			<div className="social_media">

				{/* Button */}
				<div className="button"><FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'link']}></FontAwesomeIcon></div>
			
			</div>

		</div>)
	}

}

export default Navbar