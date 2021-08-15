import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import Particles from 'react-particles-js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	Declare output function
function Home() {

	/* ================================================ Output final html =============================================== */
	return (
		<div className={styles.container}>

			{/* Head */}
			<Head>

				{/* Details */}
				<title>Portfolio</title>
				<meta name="description" content="Muhammad Fauzan Aristya Putra's Portfolio" />
				<link rel="icon" href="/favicon.ico" />

			</Head>

			{/* Homepage */}
			<div className={styles.home}>

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
					/>

					{/* Welcome Text */}
					<div className={styles.welcome_text} id="welcome-text">

						{/* Title */}
						<div className={styles.title} id="title">
							MUHAMMAD FAUZAN 
							<br/>
							ARISTYA PUTRA
						</div>

						{/* Underline */}
						<div className={styles.underline} id="underline"></div>

						{/* Meta */}
						<div className={styles.meta} id="meta">
							First year undergraduate student at Qatar University, 
							<br/>
							Full Stack Developer by day, 
							<br/>
							Game Developer by night.
						</div>

					</div>

				</div>

				{/* Navbar Buttons */}
				<div className={styles.navbar} id="navbar">

					{/* Home */}
					<a className={styles.active} href="/">Home</a>

					{/* Projects */}
					<a href="/projects">Projects</a>

					{/* Logo */}
					<img className={styles.logo} src="/logo.svg"/>

					{/* About */}
					<a href="/about">About</a>

					{/* Contact */}
					<a href="/contact">Contact</a>

				</div>

				{/* Call to Action */}
				<div className={styles.call_to_action}>VIEW PROJECTS</div>



				{/* ==================================================== Projects ==================================================== */}
				<div className={styles.projects}>

					{/* Title */}
					<h1>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>

				</div>



				{/* ==================================================== Career Timeline ==================================================== */}
				<div className={styles.career_timeline}>

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
								<div className={styles.icon_box}></div>

								{/* Header */}
								<h2>
									<span>07/2021</span>
									Full Stack Developer Intern
								</h2>

							</div>

							{/* Underline */}
							<div className={styles.underline}></div>

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
								<div className={styles.divider}></div>

								{/* Description */}
								
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo leo, vestibulum et egestas nec, fermentum a nunc. 
								Suspendisse convallis tellus iaculis viverra faucibus. Morbi eleifend at lacus vel lacinia. Fusce sit amet massa pulvinar turpis tempus dapibus. 
								Donec maximus euismod ipsum posuere pellentesque. Curabitur bibendum, risus sit amet luctus viverra, ipsum erat tincidunt ante, non sodales felis mi sit amet neque. 
								Sed non nisi eu nunc rhoncus tincidunt eget sed velit. Suspendisse at turpis erat.
								<div className={styles.divider}></div>

								{/* Action */}
								<button style={{color: '#000000', margin: '10px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'download']}></FontAwesomeIcon>
									View Work
								</button>

							</div>

						</div>

						{/* Card */}
						<div className={styles.card}>

							{/* Head */}
							<div className={styles.head}>

								{/* Logo */}
								<div className={styles.icon_box}></div>

								{/* Header */}
								<h2>
									<span>07/2021</span>
									High School Diploma
								</h2>

							</div>

							{/* Underline */}
							<div className={styles.underline}></div>

							{/* Body */}
							<div className={styles.body}>

								{/* Details */}
								<div style={{marginBottom: '5px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'building']}></FontAwesomeIcon>
									Al Khor International School
								</div>
								<div>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'building']}></FontAwesomeIcon>
									07/2008 - 07/2021
								</div>
								<div className={styles.divider}></div>

								{/* Description */}
								
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo leo, vestibulum et egestas nec, fermentum a nunc. 
								Suspendisse convallis tellus iaculis viverra faucibus. Morbi eleifend at lacus vel lacinia. Fusce sit amet massa pulvinar turpis tempus dapibus. 
								Donec maximus euismod ipsum posuere pellentesque. Curabitur bibendum, risus sit amet luctus viverra, ipsum erat tincidunt ante, non sodales felis mi sit amet neque. 
								Sed non nisi eu nunc rhoncus tincidunt eget sed velit. Suspendisse at turpis erat.
								<div className={styles.divider}></div>

								{/* Action */}
								<button style={{color: '#000000', margin: '10px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'download']}></FontAwesomeIcon>
									Download Transcript
								</button>

							</div>

						</div>

						{/* Card */}
						<div className={styles.card}>

							{/* Head */}
							<div className={styles.head}>

								{/* Logo */}
								<div className={styles.icon_box}></div>

								{/* Header */}
								<h2>
									<span>06/2021</span>
									Data Entry Operator Intern
								</h2>

							</div>

							{/* Underline */}
							<div className={styles.underline}></div>

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
								<div className={styles.divider}></div>

								{/* Action */}
								<button style={{color: '#000000', margin: '10px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'download']}></FontAwesomeIcon>
									View Transcript
								</button>

							</div>

						</div>

					</div>

				</div>



				<div className={styles.temp}></div>

			</div>

		</div>
	);

}

export default Home