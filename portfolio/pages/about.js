import styles from '../styles/About.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import Particles from 'react-particles-js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";
import { ToastContainer } from 'react-nextjs-toast';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Slideshow from './components/slideshow';

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
				<a href="/projects" className={`${styles.call_to_action} ${styles.landing_page}`} id="landing_page">
					VIEW PROJECTS
					<FontAwesomeIcon className={styles.icon} style={{marginLeft: '10px'}} icon={['fas', 'arrow-right']}></FontAwesomeIcon>
				</a>



				{/* ===================================================== Footer ===================================================== */}
				<Footer/>
				


				{/* ================================================== Miscellaneous ================================================= */}

				{/* Navbar */}
				<Controller><Scene classToggle="active" triggerElement="#fade_end">
					<div className="navbar_container"><Navbar pathname="about"/></div>
				</Scene></Controller>

				{/* Toast Container */}
				<ToastContainer style={{zIndex: 3}}/>

			</div>

		</div>
	);

}

export default Home