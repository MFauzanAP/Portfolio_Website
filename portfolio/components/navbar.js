/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "../components/accordion";
import CopyToClipboard from './utils/copy_to_clipboard';





/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                    Navbar Class                                                    */
/* ------------------------------------------------------------------------------------------------------------------ */
class Navbar extends React.Component {

	/* ==================================================== Variables =================================================== */

	//	Reference to navigation menu
	nav_menu_ref = React.createRef();

	//	Variables to hold touch data
	touchX = null;
	touchY = null;
	diffX = 0;
	diffY = 0;



	/* ===================================================== On Load ==================================================== */
	constructor (props) {
		super(props);

		//	Bind functions
		this.ToggleMenu = this.ToggleMenu.bind(this);
		
	}



	/* ==================================================== On Mount ==================================================== */
	componentDidMount () {

		//	Register events
		document.addEventListener('touchstart', this.HandleTouchStart.bind(this), false);
		document.addEventListener('touchmove', this.HandleTouchMove.bind(this), false);
		document.addEventListener('touchend', this.HandleTouchEnd.bind(this), false);

	}



	/* =================================================== On Unmount =================================================== */
	componentWillUnmount () {

		//	Unsubscribe events
		document.removeEventListener('touchstart', this.HandleTouchStart.bind(this));
		document.removeEventListener('touchmove', this.HandleTouchMove.bind(this));
		document.removeEventListener('touchend', this.HandleTouchEnd.bind(this));

	}



	/* ==================================================== Functions =================================================== */

	//	Function to toggle the navigation menu
	ToggleMenu () {

		//	Get menu element
		var menu = this.nav_menu_ref.current;

		//	If there is no menu then exit
		if (!menu) return;

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

	//	Function called on touch start
	HandleTouchStart (e) {

		//	Get touch position
		var touch = e.touches[0];

		//	Store touch data
		this.touchX = touch.clientX;
		this.touchY = touch.clientY;

	}

	//	Function called to handle touch move
	HandleTouchMove (e) {

		//	Get menu element
		var navbar = this.nav_menu_ref.current;

		//	If there is no menu then exit
		if (!navbar) return;

		//	If touch data is empty then return
		if (!this.touchX || !this.touchY) return;

		//	Get current touch position
		var x = e.touches[0].clientX;
		var y = e.touches[0].clientY;

		//	Calculate the difference between the touch positions
		this.diffX = this.touchX - x;
		this.diffY = this.touchY - y;

		//	If not swiping up or down and if swipe duration is long enough
		if (Math.abs(this.diffX) > Math.abs(this.diffY) && Math.abs(this.diffX) > 50) {

			//	If menu is closed, user swiped left and swipe origin is on the right side
			if (this.diffX > 0 && !navbar.className.includes('active') && this.touchX >= window.screen.width * 7/8) {

				//	Get menu element
				var menu = document.querySelector('.navigation .menu');

				//	Move menu by diffX
				menu.style.transform = `translateX(${Math.min(100, Math.max(0, 100 - ((this.diffX - 50) / 3)))}%)`;
				menu.style.transition = `none`;

			}

			//	If user swiped right while menu is open
			if (this.diffX < 0 && navbar.className.includes('active')) {

				//	Get menu element
				var menu = document.querySelector('.navigation .menu');

				//	Move menu by diffX
				menu.style.transform = `translateX(${Math.min(100, Math.max(0, Math.abs((this.diffX + 50) / 3)))}%)`;
				menu.style.transition = `none`;

			}

		}

	}

	//	Function called to handle touch end
	HandleTouchEnd (e) {

		//	Get navbar element
		var navbar = this.nav_menu_ref.current;

		//	If there is no menu then exit
		if (!navbar) return;

		//	If touch data is empty then return
		if (Math.abs(this.diffX) < 50) return;

		//	If not swiping up or down and if swipe duration is long enough
		if (Math.abs(this.diffX) > Math.abs(this.diffY)) {

			//	Get menu element
			var menu = document.querySelector('.navigation .menu');

			//	If menu is halfway open
			if (this.diffX > 100 && !navbar.className.includes('active') && this.touchX >= window.screen.width * 7/8) {

				//	Reset menu style
				menu.style.transform = '';
				menu.style.transition = 'transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99) 0s';

				//	Toggle menu
				this.ToggleMenu();

			}
			else if (!navbar.className.includes('active') && this.diffX <= 100 && this.touchX >= window.screen.width * 7/8) {

				//	Reset menu style
				menu.style.transform = '';
				menu.style.transition = 'transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99) 0s';

			}

			//	If menu is halfway open
			if (this.diffX < -100 && navbar.className.includes('active')) {

				//	Reset menu style
				menu.style.transform = '';
				menu.style.transition = 'transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99) 0s';

				//	Toggle menu
				this.ToggleMenu();

			}
			else if (navbar.className.includes('active') && this.diffX >= -100) {

				//	Reset menu style
				menu.style.transform = '';
				menu.style.transition = 'transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99) 0s';

			}

		}

		//	Reset touch data
		this.touchX = null;
		this.touchY = null;
		this.diffX = 0;
		this.diffY = 0;

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
				<div className="overlay" onClick={this.ToggleMenu.bind(this)}></div>
			
				{/* Menu */}
				<div className="menu">

					{/* Header */}
					<div className="header">

						{/* Title */}
						<div className="title">Menu</div>

					</div>

					{/* Links */}
					<div className="links">

						{/* Home */}
						<div className={`${home} link`}><Accordion options={{title: <Link href="/"><a><FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'home']}/>Home</a></Link>}}>
							
							{/* Links */}
							<Link href="/#hire_me"><a>Hire Me</a></Link>
							<Link href="/#showcase"><a>Side Projects</a></Link>
							<Link href="/#career_timeline"><a>Career Timeline</a></Link>

						</Accordion></div>
						
						{/* Projects */}
						<div className={`${projects} link`}><Accordion options={{title: <Link href="/projects"><a><FontAwesomeIcon style={{marginLeft: '4px', marginRight: '15px'}} icon={['fas', 'lightbulb']}/>Projects</a></Link>}}>
							
							{/* Links */}
							<Link href="/projects#project_list"><a>Project List</a></Link>

						</Accordion></div>

						{/* About */}
						<div className={`${about} link`}><Accordion options={{title: <Link href="/about"><a><FontAwesomeIcon style={{marginLeft: '3px', marginRight: '13px'}} icon={['fas', 'user']}/>About</a></Link>}}>

							{/* Links */}
							<Link href="/about#profile"><a>Profile</a></Link>
							<Link href="/about#tech_stack"><a>Tech Stack</a></Link>
							<Link href="/about#experience"><a>Experience</a></Link>
							<Link href="/about#education"><a>Education</a></Link>
							<Link href="/about#hobbies"><a>Hobbies</a></Link>

						</Accordion></div>

						{/* Contact */}
						<div className={`${contact} link`}><Accordion options={{title: <Link href="/contact"><a><FontAwesomeIcon style={{marginLeft: '2px', marginRight: '11px'}} icon={['fas', 'phone']}/>Contact</a></Link>}}>
							
							{/* Links */}
							<Link href="/contact#contact_details"><a>Contact Details</a></Link>
							<Link href="/contact#faq"><a>FAQ</a></Link>
							<Link href="/contact#contact_form"><a>Contact Form</a></Link>

						</Accordion></div>

					</div>

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