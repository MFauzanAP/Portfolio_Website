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
				<div className={styles.background_mask}>

					{/* Background */}
					<div className={styles.background}>
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className={styles.shape_fill}></path>
						</svg>
					</div>

					{/* Background End */}
					<div style={{position: 'absolute', bottom: "40%"}} id="fade_start"></div>

					{/* Welcome Text */}
					<Controller><Scene duration={600} triggerElement="#fade_start">
						{progress => (
							<div className={styles.welcome_text} style={{opacity: 1 - Math.pow(progress, 2), top: `${35 - (progress * 35)}%`}} id="welcome-text">

								{/* Meta */}
								<div className={styles.meta}>
									ABOUT ME
								</div>

								{/* Title */}
								<div className={styles.title}>
									MUHAMMAD FAUZAN
									<br/>
									ARISTYA PUTRA
								</div>

								{/* Underline */}
								<div className={styles.underline}></div>

							</div>
						)}
					</Scene></Controller>

					{/* Background End */}
					<div style={{position: 'absolute', bottom: "10%"}} id="fade_end"></div>

				</div>



				{/* ===================================================== Footer ===================================================== */}
				<div className={styles.personal_info}>

					{/* Details */}
					<div className={styles.details}>

						{/* Profile Picture */}
						<div className={styles.profile_picture}><img src="/profile_picture.jpeg"/></div>

						{/* Text */}
						<div className={styles.text}>

							{/* Title */}
							<h2>Hey, I'm Fauzan</h2>

							{/* Description */}
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dolor at dui hendrerit accumsan. <br/>
								Curabitur nec ante risus. Donec vel erat iaculis, volutpat ante in, porttitor arcu. Interdum et malesuada <br/>
								fames ac ante ipsum primis in faucibus. Sed vel urna condimentum, gravida tortor sit amet, molestie purus. <br/>
								Donec nisl erat, ornare sit amet auctor ac, mattis in justo. Quisque accumsan justo arcu, <br/>
								nec dapibus eros blandit ut. Aliquam convallis consectetur ante, eget ullamcorper ipsum auctor nec. <br/>
								Mauris pellentesque vel odio ac ornare. Sed sed velit at risus aliquam pellentesque.
							</p>

							{/* Contact Me */}
							<button style={{borderColor: '#8a4fce'}}>Contact Me</button>

						</div>

					</div>

					{/* Divider */}
					<div className={styles.divider}></div>

					{/* Grid */}
					<div className={styles.grid}>

						{/* Experience */}
						<div className={styles.details}>
							
							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'laptop-code']}/>
							
							{/* Title */}
							<h3>Experience</h3>

							{/* Description */}
							<p>
								Approx. 6 years of experience in Game Development,
								3 years in Software Development, and 1 year in Web Development.
							</p>

						</div>

						{/* Education */}
						<div className={styles.details}>

							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'book-open']}/>
							
							{/* Title */}
							<h3>Education</h3>

							{/* Description */}
							<li>Bachelor's Degree in Engineering @ Qatar University</li>
							<li>High School Diploma @ Al Khor International School</li>

						</div>

						{/* Nationality */}
						<div className={styles.details}>
							
							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'globe-asia']}/>
							
							{/* Title */}
							<h3>Nationality</h3>

							{/* Description */}
							<p>
								Born in Indonesia 🇮🇩, raised and brought up 
								in Qatar 🇶🇦.
							</p>

						</div>

						{/* Language */}
						<div className={styles.details}>
							
							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'language']}/>
							
							{/* Title */}
							<h3>Language</h3>

							{/* Description */}
							<table>
								<tr>
									<td>English</td>
									<td>⬛⬛⬛⬛⬛</td>
								</tr>
								<tr>
									<td>Indonesian</td>
									<td>⬛⬛⬛⬛⬜</td>
								</tr>
								<tr>
									<td>Arabic</td>
									<td>⬛⬛⬜⬜⬜</td>
								</tr>
								<tr>
									<td>Korean</td>
									<td>⬛⬜⬜⬜⬜</td>
								</tr>
							</table>

						</div>

						{/* Age */}
						<div className={styles.details}>
							
							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'calendar-alt']}/>
							
							{/* Title */}
							<h3>Age</h3>

							{/* Description */}
							<p>
								Born on the 4th of May 2004 (04/05/2004) in Jakarta, Indonesia
							</p>

						</div>
						
						{/* Hobbies */}
						<div className={styles.details}>

							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'book-open']}/>
							
							{/* Title */}
							<h3>Hobbies</h3>

							{/* Description */}
							<li>Coding</li>
							<li>Watching Movies/Dramas</li>
							<li>Volleyball</li>
							<li>Video Games</li>

						</div>

					</div>

				</div>



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