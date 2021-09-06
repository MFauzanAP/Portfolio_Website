/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CopyToClipboard from './utils/copy_to_clipboard';





/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                    Navbar Class                                                    */
/* ------------------------------------------------------------------------------------------------------------------ */
class Navbar extends React.Component {

	/* ==================================================== Variables =================================================== */

	//	Reference to navigation menu
	nav_menu_ref = React.createRef();



	/* ===================================================== On Load ==================================================== */
	constructor (props) {
		super(props);
	}



	/* ==================================================== Functions =================================================== */

	//	Function to toggle the navigation menu
	ToggleMenu () {

		//	Get menu element
		var menu = this.nav_menu_ref.current;

		//	Check if menu is already active
		if (menu.className.includes('active')) {

			//	Close menu
			menu.className = 'navigation';

			//	Re enable scrolling
			document.querySelector('body').classList.remove('fixed');

		}

		//	If menu is closed
		else {

			//	Add active class to menu
			menu.className += ' active';

			//	Disable scrolling
			document.querySelector('body').classList.add('fixed');

		}

	}

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
			<Link href="/"><a className={`${home} desktop laptop`}>Home</a></Link>

			{/* Projects */}
			<Link href="/projects"><a className={`${projects} desktop laptop`}>Projects</a></Link>

			{/* Logo */}
			<div className="logo_container"><img className="logo" src="/logo.svg"/></div>

			{/* About */}
			<Link href="/about"><a className={`${about} desktop laptop`}>About</a></Link>

			{/* Contact */}
			<Link href="/contact"><a className={`${contact} desktop laptop`}>Contact</a></Link>

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
						<a href="https://github.com/MFauzanAP" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'github']}></FontAwesomeIcon></li></a>
						<a href="https://linkedin.com/in/muhammad-fauzan-6256441b4" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'linkedin']}></FontAwesomeIcon></li></a>
						<a href="https://www.instagram.com/fow_zen/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'instagram']}></FontAwesomeIcon></li></a>
						<a href="mailto: muhammadfauzanaristyaputra@gmail.com"><li onClick={CopyToClipboard.bind(this, "muhammadfauzanaristyaputra@gmail.com", "Email")}><FontAwesomeIcon icon={['fas', 'envelope']}></FontAwesomeIcon></li></a>
					</ul>

				</div>

			</div>

			{/* Navigation */}
			<div className="navigation" ref={this.nav_menu_ref}>

				{/* Overlay */}
				<div className="overlay"></div>
			
				{/* Menu */}
				<div className="menu">

					{/* Header */}
					<div className="header">

						{/* Title */}
						<div className="title">Menu</div>

					</div>

					{/* Site Links */}
					<div className={`${home} link`}><Link href="/"><a>Home</a></Link></div>
					<div className={`${projects} link`}><Link href="/projects"><a>Projects</a></Link></div>
					<div className={`${about} link`}><Link href="/about"><a>About</a></Link></div>
					<div className={`${contact} link`}><Link href="/contact"><a>Contact</a></Link></div>

					{/* Footer */}
					<div className="footer">

						{/* Links */}
						<ul style={{listStyleType: 'none', paddingInlineStart: '0', display: "flex", flexDirection: "row"}}>
							<a href="https://github.com/MFauzanAP" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'github']}></FontAwesomeIcon></li></a>
							<a href="https://linkedin.com/in/muhammad-fauzan-6256441b4" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'linkedin']}></FontAwesomeIcon></li></a>
							<a href="https://www.instagram.com/fow_zen/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'instagram']}></FontAwesomeIcon></li></a>
							<a href="mailto: muhammadfauzanaristyaputra@gmail.com"><li onClick={CopyToClipboard.bind(this, "muhammadfauzanaristyaputra@gmail.com", "Email")}><FontAwesomeIcon icon={['fas', 'envelope']}></FontAwesomeIcon></li></a>
						</ul>

						{/* Copyright */}
						<p className="copyright">
							Copyright © 2021 Muhammad Fauzan Aristya Putra <br/>
							Built with ❤️ in Next JS React
						</p>

					</div>

				</div>

				{/* Button */}
				<div className="button" onClick={this.ToggleMenu.bind(this)}>
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>

			</div>

		</div>)

	}

}

export default Navbar