import styles from '../styles/Contact.module.scss'
import React, { useRef } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Accordion from "../components/accordion";

//	Declare output function
function Contact () {

	/* ==================================================== Variables =================================================== */

	//	Reference
	const ref = useRef(null);



	/* =================================================== Use Effect =================================================== */
	React.useEffect(() => {

		// 	Import lottie
		import("@lottiefiles/lottie-player");

	})



	/* ================================================ Output final html =============================================== */
	return (
		<div className={styles.container}>

			{/* Head */}
			<Head>

				{/* Details */}
				<title>Contact | Muhammad Fauzan Aristya Putra</title>
				<meta name="description" content="Muhammad Fauzan Aristya Putra's Portfolio" />
				<link rel="icon" href="/favicon.ico" />

			</Head>

			{/* Homepage */}
			<div className={styles.contact}>

				{/* ======================================================= Map ====================================================== */}
				<div className={styles.map}>

					{/* Background */}
					<div className={styles.background}></div>

					{/* Navbar Background */}
					<div className={styles.navbar_background}>
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".5" className={styles.shape_fill}></path>
							<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".75" className={styles.shape_fill}></path>
							<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shape_fill}></path>
						</svg>
					</div>

					{/* Animation */}
					<div className={styles.animation}><lottie-player 
						src='./world_animation.json'
						speed="1" 
						loop 
						autoplay
					/></div>

					{/* Description */}
					<div className={styles.description}>

						{/* Title */}
						<div className={styles.title}>CONTACT ME</div>

						{/* Email */}
						<div className={styles.details}>
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'envelope']}/>
							<span className={styles.bold}>Email - </span>
							<span className={styles.text}>muhammadfauzanaristyaputra@gmail.com</span>
						</div>

						{/* Address */}
						<div className={styles.details}>
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'map-marker-alt']}/>
							<span className={styles.bold}>Address - </span>
							<span className={styles.text}>Al Khor Community, Al Khor, Qatar</span>
						</div>

						{/* Social Media */}
						<ul className={styles.social_media}>
							<a href="https://github.com/MFauzanAP" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'github']}/></li></a>
							<a href="https://linkedin.com/in/muhammad-fauzan-6256441b4" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'linkedin']}/></li></a>
							<a href="https://www.instagram.com/fow_zen/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'instagram']}/></li></a>
						</ul>
						
					</div>

					{/* Map */}
					<div className={styles.map}><iframe src="https://maps.google.com/maps?q=Al%20Khor%20Community&amp;z=15&amp;ie=UTF8&amp;output=embed"/></div>

					{/* Background End */}
					<div style={{position: 'absolute', bottom: "10%"}} id="background_end"></div>

					{/* Divider */}
					<div className={styles.divider}>
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className={styles.shape_fill}></path>
						</svg>
					</div>

				</div>



				{/* ======================================================= FAQ ====================================================== */}
				<div className={styles.faq}>

					{/* Title */}
					<div className={styles.title}>Frequently Asked Questions</div>

					{/* Content */}
					<div className={styles.content}>

						{/* Animation */}
						<div className={styles.animation}><lottie-player 
							src='./faq_animation.json'
							speed="1" 
							loop 
							autoplay
						/></div>

						{/* Description */}
						<div className={styles.description}>
							
							{/* Accordions */}
							<Accordion options={{title: 'What services do you offer?'}}>
								<p>
									Right now I offer web design and game development services. Prices for these services will be decided 
									after contact and differs depending on the size of the project. However please note that I may not 
									be able to accept all requests since I may be busy with school during that time.
								</p>
								<p>
									If you would like to learn more, feel free to send me a message through the <a href="#form">form below </a>
									or click here to <a href="#form">check out my other projects.</a>
								</p>
							</Accordion>
							<Accordion options={{title: 'How often are you available?'}}>
								<p>
									Depends on my current situation and whether or not I have exams/other projects. However I'm usually
									free so don't be afraid to reach out to me.
								</p>
								<p>
									But do note that if I am unavailable, I will notify you through email.
								</p>
							</Accordion>
							<Accordion options={{title: 'What game engine do you use?'}}>
								<p>
									Currently I use the Unity game engine since it's what I started out with, but I'm always open 
									to learning new things.
								</p>
							</Accordion>
							<Accordion options={{title: 'Are you fluent in (...) language or tool?'}}>
								<p>
									Click here to <a href="/about#tech_stack">view a list of the languages and tools I use. </a>
								</p>
							</Accordion>

						</div>

					</div>

				</div>



				{/* ===================================================== Footer ===================================================== */}
				<Footer/>
				


				{/* ================================================== Miscellaneous ================================================= */}

				{/* WIP Indicator */}
				<div className='wip1'>WORK IN PROGRESS</div>
				<div className='wip2'>WORK IN PROGRESS</div>

				{/* Navbar */}
				<Controller><Scene classToggle="active" triggerElement="#background_end">
					<div className="navbar_container"><Navbar pathname="contact"/></div>
				</Scene></Controller>

			</div>

		</div>
	);

}

export default Contact
