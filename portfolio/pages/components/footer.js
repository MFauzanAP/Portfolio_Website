/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CopyToClipboard from '../utils/copy_to_clipboard';





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
						Hey there, my name&apos;s Fauzan and I&apos;m an <br/>
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
						<Link href="/"><a><li>Home</li></a></Link>
						<Link href="/projects"><a><li>Projects</li></a></Link>
						<Link href="/about"><a><li>About</li></a></Link>
						<Link href="/contact"><a><li>Contact</li></a></Link>
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
						<a href="https://github.com/MFauzanAP" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'github']}></FontAwesomeIcon></li></a>
						<a href="https://linkedin.com/in/muhammad-fauzan-6256441b4" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'linkedin']}></FontAwesomeIcon></li></a>
						<a href="https://www.instagram.com/fow_zen/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'instagram']}></FontAwesomeIcon></li></a>
						<a href="mailto: muhammadfauzanaristyaputra@gmail.com"><li onClick={CopyToClipboard.bind(this, "muhammadfauzanaristyaputra@gmail.com", "Email")}><FontAwesomeIcon icon={['fas', 'envelope']}></FontAwesomeIcon></li></a>
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