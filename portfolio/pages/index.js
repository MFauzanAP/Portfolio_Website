import Head from 'next/head'
import Image from 'next/image'
import Particles from 'react-particles-js'
import styles from '../styles/Home.module.scss'

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
						<div className={styles.title} id="title">MUHAMMAD FAUZAN ARISTYA PUTRA</div>

						{/* Underline */}
						<div className={styles.underline} id="underline"></div>

						{/* Meta */}
						<div className={styles.meta} id="meta">
							Undergraduate student at Qatar University, 
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
				<div className={styles.temp}></div>

			</div>

		</div>
	);

}

export default Home