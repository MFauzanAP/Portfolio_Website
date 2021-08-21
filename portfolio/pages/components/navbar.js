/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import copy_to_clipboard from '../utils/copy_to_clipboard';





/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                    Navbar Class                                                    */
/* ------------------------------------------------------------------------------------------------------------------ */
class Navbar extends React.Component {

	/* ==================================================== On Render =================================================== */
	render () {

		//	Generate link classes
		var home = this.props.pathname == '' ? 'active' : '';
		var projects = this.props.pathname == 'projects' ? 'active' : '';
		var about = this.props.pathname == 'about' ? 'active' : '';
		var contact = this.props.pathname == 'contact' ? 'active' : '';

		//	Return html
		return (<div className="navbar" id="navbar">

			{/* Home */}
			<a className={home} href="/">Home</a>

			{/* Projects */}
			<a className={projects} href="/projects">Projects</a>

			{/* Logo */}
			<div className="logo_container"><img className="logo" src="/logo.svg"/></div>

			{/* About */}
			<a className={about} href="/about">About</a>

			{/* Contact */}
			<a className={contact} href="/contact">Contact</a>

			{/* Social Media Contact */}
			<div className="social_media">

				{/* Button */}
				<div className="button"><FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'link']}></FontAwesomeIcon></div>
			
				{/* Menu */}
				<div className="menu">

					{/* Header */}
					<h3>Social Media</h3>
					<div className="underline"></div>

					{/* Links */}
					<ul style={{listStyleType: 'none', paddingInlineStart: '0', display: "flex", flexDirection: "row"}}>
						<a href="https://github.com/MFauzanAP" target="_blank"><li><FontAwesomeIcon icon={['fab', 'github']}></FontAwesomeIcon></li></a>
						<a href="https://linkedin.com/in/muhammad-fauzan-6256441b4" target="_blank"><li><FontAwesomeIcon icon={['fab', 'linkedin']}></FontAwesomeIcon></li></a>
						<a href="https://www.instagram.com/fow_zen/" target="_blank"><li><FontAwesomeIcon icon={['fab', 'instagram']}></FontAwesomeIcon></li></a>
						<a href="mailto: muhammadfauzanaristyaputra@gmail.com"><li onClick={copy_to_clipboard.bind(this, "muhammadfauzanaristyaputra@gmail.com", "Email")}><FontAwesomeIcon icon={['fas', 'envelope']}></FontAwesomeIcon></li></a>
					</ul>

				</div>

			</div>

		</div>)

	}

}

export default Navbar