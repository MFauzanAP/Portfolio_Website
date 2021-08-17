import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import Particles from 'react-particles-js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";
import { ToastContainer } from 'react-nextjs-toast';
import copy_to_clipboard from './utils/copy_to_clipboard';

//	Declare output function
function Home () {

	/* ================================================ Output final html =============================================== */
	return (
		<div className={styles.container}>

			{/* Head */}
			<Head>

				{/* Details */}
				<title>Muhammad Fauzan Aristya Putra's Portfolio</title>
				<meta name="description" content="Muhammad Fauzan Aristya Putra's Portfolio" />
				<link rel="icon" href="/favicon.ico" />

			</Head>

			{/* Homepage */}
			<div className={styles.home}>

				{/* Toast Container */}
				<ToastContainer/>

				{/* ================================================== Landing Page ================================================== */}

				{/* Background Mask */}
				<div className={styles.background_mask} id="background_mask">

					{/* Background */}
					<div className={styles.background} id="background"></div>

					{/* Background Circles */}
					<Particles className={styles.circles} id="circles"
						params={{
							particles	: {
								number		: {
									value		: 5,
									density		: {
										enable		: true,
										value_area	: 2000
									}
								},
								color		: {
									value		: '#BBBBBB'
								},
								opacity		: {
									value		: 0.1,
									anim		: {
										enable		: true,
										speed		: 3
									}
								},
								size		: {
									value		: 250,
									random		: true,
									anim		: {
										enable		: true,
										speed		: 3
									}
								},
								line_linked	: {
									enable		: false
								},
								move		: {
									speed		: 1,
									bounce		: false
								}
							}
						}}
					></Particles>

					{/* Background End */}
					<div style={{position: 'absolute', bottom: "40%"}} id="fade_start"></div>

					{/* Welcome Text */}
					<Controller><Scene duration={600} triggerElement="#fade_start">
						{progress => (
							<div className={styles.welcome_text} style={{opacity: 1 - progress, top: `${25 - (progress * 25)}%`}} id="welcome-text">

								{/* Title */}
								<div className={styles.title} id="title">
									MUHAMMAD FAUZAN
									<br/>
									ARISTYA PUTRA
								</div>

								{/* Underline */}
								<div className={styles.underline} id="underline"></div>

								{/* Meta */}
								<div className={styles.meta} id="meta">First year undergraduate student at Qatar University,</div>
								<div className={styles.meta} style={{animationDelay: '4s'}} id="meta">Full Stack Developer by day,</div>
								<div className={styles.meta} style={{animationDelay: '5.25s'}} id="meta">Game Developer by night.</div>

							</div>
						)}
					</Scene></Controller>

					{/* Background End */}
					<div style={{position: 'absolute', bottom: "10%"}} id="fade_end"></div>

				</div>

				{/* Call to Action */}
				<div className={`${styles.call_to_action} ${styles.landing_page}`} id="landing_page">
					VIEW PROJECTS
					<FontAwesomeIcon className={styles.icon} style={{marginLeft: '10px'}} icon={['fas', 'arrow-right']}></FontAwesomeIcon>
				</div>



				{/* ===================================================== Hire Me ==================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={styles.hire_me}>

					{/* Title */}
					{/* <h1>Looking for a Web Designer?</h1> */}
					<h1>Looking for a Web Designer or Game Developer?</h1>

					{/* Meta */}
					<div className={styles.meta}>

						{/* Description */}
						<div className={styles.description}>
							<p>Are you an aspiring entrepreneur with an idea in mind, but just don't have anyone to help you accomplish it?</p>
							<p>Or are you an established business looking to hire a passionate new employee to work on a website / game of yours?</p>
							<p>
								Well if you fall into any of these categories then congrats! You've come to the right place 😊. 
								I treat all projects with passion, always putting in hard work in hopes of satisfying my clients. 
								To me, satisfactory just wont cut it. If you're interested, click the link below 👇.
							</p>
							<button>
								<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'user-plus']}></FontAwesomeIcon>
								Hire Me
							</button>
						</div>

						{/* Image */}
						<div className={styles.image}>
							<FontAwesomeIcon className={styles.icon} style={{width: '50px'}} icon={['fas', 'image']}></FontAwesomeIcon>
							<img></img>
						</div>

					</div>

				</div></Scene></Controller>



				{/* ==================================================== Career Timeline ==================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={styles.career_timeline}>

					{/* Title */}
					<div className={styles.title}>CAREER TIMELINE</div>
					<div className={styles.underline}></div>

					{/* Timeline */}
					<div className={styles.timeline}>

						{/* Card */}
						<div className={styles.card}>

							{/* Head */}
							<div className={styles.head}>

								{/* Logo */}
								<div className={styles.icon_box}>
									<img src="/qu_logo.svg"></img>
								</div>

								{/* Header */}
								<h2>
									<span>08/2021</span>
									Engineering Bachelor's Degree
								</h2>

							</div>

							{/* Body */}
							<div className={styles.body}>

								{/* Details */}
								<div style={{marginBottom: '5px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'building']}></FontAwesomeIcon>
									Qatar University
								</div>
								<div>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'clock']}></FontAwesomeIcon>
									08/2021 - Present
								</div>
								<div className={styles.divider} style={{marginBottom: '10px'}}></div>

								{/* Description */}
								<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'info-circle']}></FontAwesomeIcon>
								Description
								<div style={{height: '10px'}}></div>
								Enrolled at Qatar University for a bachelors degree in Engineering with plans on migrating to Mechatronics.
								<div className={styles.divider}></div>

								{/* Action */}
								<a href="https://www.qu.edu.qa/" target="_blank"><button style={{color: '#3D3D3D', margin: '10px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'external-link-alt']}></FontAwesomeIcon>
									View Website
								</button></a>
							</div>

							{/* Footer */}
							<div className={styles.card_footer}></div>

						</div>

						{/* Card */}
						<div className={styles.card}>

							{/* Head */}
							<div className={styles.head}>

								{/* Logo */}
								<div className={styles.icon_box}>
									<img src="/malvor_logo.svg"></img>
								</div>

								{/* Header */}
								<h2>
									<span>07/2021</span>
									Full Stack Developer Internship
								</h2>

							</div>

							{/* Body */}
							<div className={styles.body}>

								{/* Details */}
								<div style={{marginBottom: '5px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'building']}></FontAwesomeIcon>
									Malvor
								</div>
								<div>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'clock']}></FontAwesomeIcon>
									07/2021 - Present
								</div>
								<div className={styles.divider} style={{marginBottom: '10px'}}></div>

								{/* Description */}
								<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'info-circle']}></FontAwesomeIcon>
								Description
								<div style={{height: '10px'}}></div>
								Got promoted to full stack developer one month after starting as a data entry operator at the same company.
								During this time, I sharpened my html and css skills and quickly learnt web development using tools like NodeJS, ElasticSearch,
								MongoDB, etc.
								<div style={{height: '20px'}}></div>
								Some of my improvements include: 

								{/* List */}
								<ul>
									<li>Implement a WYSIWYG editor for a more in depth data entry experience</li>
									<li>Used ElasticSearch to filter for products by location</li>
									<li>Complete overhaul of product categories</li>
									<li>Improved product search page front-end</li>
									<li>Implement a new and more efficient way of inputting data</li>
								</ul>
								<div className={styles.divider}></div>

								{/* Skills */}
								<ul className={styles.tags}>
									<li>NodeJS</li>
									<li>ExpressJS</li>
									<li>MongoDB</li>
									<li>ElasticSearch</li>
									<li>Semantic</li>
									<li>Handlebars</li>
									<li>Unit Testing</li>
									<li>Lodash</li>
								</ul>
								<div className={styles.divider}></div>

								{/* Action */}
								<a href="https://malvor.com/" target="_blank"><button style={{color: '#3D3D3D', margin: '10px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'images']}></FontAwesomeIcon>
									View Work
								</button></a>
								<a href="https://malvor.com/" target="_blank"><button style={{color: '#3D3D3D', margin: '10px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'external-link-alt']}></FontAwesomeIcon>
									View Website
								</button></a>

							</div>

							{/* Footer */}
							<div className={styles.card_footer}></div>

						</div>

						{/* Card */}
						<div className={styles.card}>

							{/* Head */}
							<div className={styles.head}>

								{/* Logo */}
								<div className={styles.icon_box}>
									<img src="/malvor_logo.svg"></img>
								</div>

								{/* Header */}
								<h2>
									<span>06/2021</span>
									Data Entry Operator Internship
								</h2>

							</div>

							{/* Body */}
							<div className={styles.body}>

								{/* Details */}
								<div style={{marginBottom: '5px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'building']}></FontAwesomeIcon>
									Malvor
								</div>
								<div>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'clock']}></FontAwesomeIcon>
									06/2021 - Present
								</div>
								<div className={styles.divider} style={{marginBottom: '10px'}}></div>

								{/* Description */}
								<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'info-circle']}></FontAwesomeIcon>
								Description
								<div style={{height: '10px'}}></div>
								Landed an internship job during my last month of highschool at a local e-commerce startup. Here I was responsible for
								inputting lists of product data into the store database accurately and quickly.
								<div className={styles.divider}></div>

								{/* Action */}
								<a href="https://malvor.com/" target="_blank"><button style={{color: '#3D3D3D', margin: '10px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'external-link-alt']}></FontAwesomeIcon>
									View Website
								</button></a>

							</div>

							{/* Footer */}
							<div className={styles.card_footer}></div>

						</div>

						{/* Card */}
						<div className={styles.card}>

							{/* Head */}
							<div className={styles.head}>

								{/* Logo */}
								<div className={styles.icon_box}>
									<img src="/akis_logo.png"></img>
								</div>

								{/* Header */}
								<h2>
									<span>07/2008</span>
									High School Diploma
								</h2>

							</div>

							{/* Body */}
							<div className={styles.body}>

								{/* Details */}
								<div style={{marginBottom: '5px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'building']}></FontAwesomeIcon>
									Al Khor International School
								</div>
								<div>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'building']}></FontAwesomeIcon>
									08/2008 - 07/2021
								</div>
								<div className={styles.divider} style={{marginBottom: '10px'}}></div>

								{/* Description */}
								<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'info-circle']}></FontAwesomeIcon>
								Description
								<div style={{height: '10px'}}></div>
								I studied at AKIS my whole school life, from 2008 to 2021 where I graduated with my AS Level grades at age 17. 
								During my time there I was able to consistently get among the top grades including an average of A in both my IGCSE and
								AS Level grades.
								<div className={styles.divider}></div>

								{/* Action */}
								<a href="high_school_transcript.pdf" target="_blank"><button style={{color: '#3D3D3D', margin: '10px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'download']}></FontAwesomeIcon>
									View Transcript
								</button></a>
								<a href="https://akis.sch.qa/" target="_blank"><button style={{color: '#3D3D3D', margin: '10px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'external-link-alt']}></FontAwesomeIcon>
									View Website
								</button></a>

							</div>

							{/* Footer */}
							<div className={styles.card_footer}></div>

						</div>

					</div>

					{/* Learn More */}
					<a href="/about"><div className={styles.call_to_action}>
						<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['far', 'address-card']}></FontAwesomeIcon>
						Learn More
					</div></a>

				</div></Scene></Controller>



				{/* ==================================================== Showcase ==================================================== */}
				<div className={styles.showcase}>

					

				</div>



				{/* ===================================================== Footer ===================================================== */}
				<div className={styles.footer}>

					{/* Content */}
					<div className={styles.content}>

						{/* About */}
						<div className={styles.about}>

							{/* Underline */}
							<div className={styles.underline}></div>

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
						<div className={styles.pages}>

							{/* Underline */}
							<div className={styles.underline}></div>

							{/* Header */}
							<h3>Pages</h3>

							{/* Links */}
							<ul className={styles.links}>
								<a href="/"><li>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'home']}></FontAwesomeIcon>
									Home
								</li></a>
								<a href="/projects"><li>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'project-diagram']}></FontAwesomeIcon>
									Projects
								</li></a>
								<a href="/about"><li>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'address-card']}></FontAwesomeIcon>
									About
								</li></a>
								<a href="/contact"><li>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'phone']}></FontAwesomeIcon>
									Contact
								</li></a>
							</ul>

						</div>

						{/* Social Media */}
						<div className={styles.social_media}>

							{/* Underline */}
							<div className={styles.underline}></div>

							{/* Header */}
							<h3>Social Media</h3>

							{/* Links */}
							<ul className={styles.links}>
								<a href="https://github.com/MFauzanAP" target="_blank"><li><FontAwesomeIcon className={styles.icon} icon={['fab', 'github']}></FontAwesomeIcon></li></a>
								<a href="https://linkedin.com/in/muhammad-fauzan-6256441b4" target="_blank"><li><FontAwesomeIcon className={styles.icon} icon={['fab', 'linkedin']}></FontAwesomeIcon></li></a>
								<a href="https://www.instagram.com/fow_zen/" target="_blank"><li><FontAwesomeIcon className={styles.icon} icon={['fab', 'instagram']}></FontAwesomeIcon></li></a>
								<a href="mailto: muhammadfauzanaristyaputra@gmail.com"><li onClick={copy_to_clipboard.bind(this, "muhammadfauzanaristyaputra@gmail.com", "Email")}><FontAwesomeIcon className={styles.icon} icon={['fas', 'envelope']}></FontAwesomeIcon></li></a>
							</ul>

						</div>

					</div>
					
					{/* Copyright */}
					<div className={styles.divider}></div>
					<p className={styles.copyright}>Copyright © 2021 Muhammad Fauzan Aristya Putra</p>

				</div>
				


				{/* ===================================================== Navbar ===================================================== */}
				<Controller><Scene classToggle="active" triggerElement="#fade_end"><div className="navbar" id="navbar">

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
						<div className="button"><FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'phone']}></FontAwesomeIcon></div>
					
					</div>

				</div></Scene></Controller>

			</div>

		</div>
	);

}

export default Home