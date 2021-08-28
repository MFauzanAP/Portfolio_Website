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
		return (
		<div className="footer">

			{/* Background */}
			<div className="background">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape_fill"></path>
				</svg>
			</div>

			{/* Content */}
			<div className="content">

				{/* About */}
				<div className="about">

					{/* Underline */}
					<div className="underline"></div>

					{/* Header */}
					<h3>About Me</h3>

					{/* Description */}
					<p>
						Hey there, my name's Fauzan and I'm an <br/>
						undergraduate student studying at Qatar University <br/>
						with a keen interest in all things tech. <br/>
						Nice to meet you!
					</p>

				</div>

				{/* Pages */}
				<div className="pages">

					{/* Underline */}
					<div className="underline"></div>

					{/* Header */}
					<h3>Pages</h3>

					{/* Links */}
					<ul className="links">
						<a href="/"><li>
							<FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'home']}></FontAwesomeIcon>
							Home
						</li></a>
						<a href="/projects"><li>
							<FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'project-diagram']}></FontAwesomeIcon>
							Projects
						</li></a>
						<a href="/about"><li>
							<FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'address-card']}></FontAwesomeIcon>
							About
						</li></a>
						<a href="/contact"><li>
							<FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'phone']}></FontAwesomeIcon>
							Contact
						</li></a>
					</ul>

				</div>

				{/* Social Media */}
				<div className="social_media">

					{/* Underline */}
					<div className="underline"></div>

					{/* Header */}
					<h3>Social Media</h3>

					{/* Links */}
					<ul className="links">
						<a href="https://github.com/MFauzanAP" target="_blank"><li><FontAwesomeIcon icon={['fab', 'github']}></FontAwesomeIcon></li></a>
						<a href="https://linkedin.com/in/muhammad-fauzan-6256441b4" target="_blank"><li><FontAwesomeIcon icon={['fab', 'linkedin']}></FontAwesomeIcon></li></a>
						<a href="https://www.instagram.com/fow_zen/" target="_blank"><li><FontAwesomeIcon icon={['fab', 'instagram']}></FontAwesomeIcon></li></a>
						<a href="mailto: muhammadfauzanaristyaputra@gmail.com"><li onClick={copy_to_clipboard.bind(this, "muhammadfauzanaristyaputra@gmail.com", "Email")}><FontAwesomeIcon icon={['fas', 'envelope']}></FontAwesomeIcon></li></a>
					</ul>

				</div>

			</div>
			
			{/* Copyright */}
			<div className="divider"></div>
			<p className="copyright">Copyright © 2021 Muhammad Fauzan Aristya Putra</p>

		</div>)
	}

}

export default Navbar