import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import Particles from 'react-particles-js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";
import { ToastContainer } from 'react-nextjs-toast';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Slideshow from './components/slideshow';
import RadialScrollbar from './components/radial_scrollbar';

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

					{/* Navbar Background */}
					<div className={styles.navbar_background}>
						<svg data-name="Layer 1" transform="scale(-1, 1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles.shape_fill}></path>
							<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles.shape_fill}></path>
							<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shape_fill}></path>
						</svg>
					</div>

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



				{/* ===================================================== Hire Me ==================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={styles.hire_me}>

					{/* Title */}
					{/* <h1>Looking for a Web Designer?</h1> */}
					<h1>Looking for a Web Designer or Game Developer?</h1>

					{/* Meta */}
					<div className={styles.meta}>

						{/* Description */}
						<div className={styles.description}>
							<p style={{transitionDelay: '2s'}}>Are you an aspiring entrepreneur with an idea in mind, but just don't have anyone to help you accomplish it?</p>
							<p style={{transitionDelay: '2.25s'}}>Or are you an established business looking to hire a passionate new employee to work on a website / game of yours?</p>
							<p style={{transitionDelay: '2.5s'}}>
								Well if you fall into any of these categories then congrats! You've come to the right place 😊. 
								I treat all projects with passion, always putting in hard work in hopes of satisfying my clients. 
								To me, satisfactory just wont cut it. If you're interested, click the link below 👇.
							</p>
							<a href="/contact"><button>
								<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'user-plus']}></FontAwesomeIcon>
								Hire Me
							</button></a>
						</div>

						{/* Image */}
						<div className={styles.image}>
							<FontAwesomeIcon className={styles.icon} style={{width: '50px'}} icon={['fas', 'image']}></FontAwesomeIcon>
							<img></img>
						</div>

					</div>

				</div></Scene></Controller>



				{/* ==================================================== Showcase ==================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={styles.showcase}>

					{/* Background */}
					<div className={styles.background}>
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shape_fill}></path>
						</svg>
					</div>

					{/* Exclamation Mark */}
					<span className={styles.exclamation}><FontAwesomeIcon icon={['fas', 'exclamation']}/></span>

					{/* Header */}
					<div className={styles.sideline}></div>
					<h2>Latest Side Projects</h2>

					{/* Section */}
					<div className={styles.section} style={{transitionDelay: '3.75s'}}>

						{/* Meta */}
						<div className={styles.meta}>

							{/* Title */}
							<div className={styles.underline}></div>
							<h3>Snowball Project</h3>

							{/* Description */}
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id nibh eu purus dapibus venenatis quis at nisi.
							Nulla gravida mattis risus, a vehicula est aliquam in. Pellentesque a mauris id turpis ornare tincidunt at non ligula.
							Sed ligula nunc, imperdiet ac vehicula sed, scelerisque eget urna. Nunc pretium magna non magna dapibus condimentum ut non massa.
							Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vulputate volutpat semper.</p>

							{/* Call to Action */}
							<div className={styles.call_to_action}><FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'info-circle']}></FontAwesomeIcon>Learn More</div>

						</div>

						{/* Media */}
						<div className={styles.media_container}  id="media_container_1">

							{/* Slideshow */}
							<Controller><Scene duration={500} triggerElement="#media_container_1">{(progress, event) => (
								<Slideshow id={event} event={event} options={{
									images: [
										""
									]
								}}/>
							)}</Scene></Controller>

						</div>

					</div>

					{/* Section */}
					<div className={styles.section} style={{transitionDelay: '4.25s'}}>

						{/* Meta */}
						<div className={styles.meta}>

							{/* Title */}
							<div className={styles.underline}></div>
							<h3>Revision Cards Project</h3>

							{/* Description */}
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id nibh eu purus dapibus venenatis quis at nisi.
							Nulla gravida mattis risus, a vehicula est aliquam in. Pellentesque a mauris id turpis ornare tincidunt at non ligula.
							Sed ligula nunc, imperdiet ac vehicula sed, scelerisque eget urna. Nunc pretium magna non magna dapibus condimentum ut non massa.
							Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vulputate volutpat semper.</p>

							{/* Call to Action */}
							<div className={styles.call_to_action}><FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'info-circle']}></FontAwesomeIcon>Learn More</div>

						</div>

						{/* Media */}
						<div className={styles.media_container} id="media_container_2">

							{/* Slideshow */}
							<Controller><Scene duration={500} triggerElement="#media_container_2">{(progress, event) => (
								<Slideshow id={event} event={event} options={{
									images: [
										"/revision_cards_image_1.png",
										"/revision_cards_image_2.png",
										"/revision_cards_image_3.png",
										"/revision_cards_image_4.png",
										"/revision_cards_image_5.png"
									]
								}}/>
							)}</Scene></Controller>

						</div>

					</div>

					{/* Section */}
					<div className={styles.section} style={{transitionDelay: '4.75s'}}>

						{/* Meta */}
						<div className={styles.meta}>

							{/* Title */}
							<div className={styles.underline}></div>
							<h3>Top Down Project</h3>

							{/* Description */}
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id nibh eu purus dapibus venenatis quis at nisi.
							Nulla gravida mattis risus, a vehicula est aliquam in. Pellentesque a mauris id turpis ornare tincidunt at non ligula.
							Sed ligula nunc, imperdiet ac vehicula sed, scelerisque eget urna. Nunc pretium magna non magna dapibus condimentum ut non massa.
							Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vulputate volutpat semper.</p>

							{/* Call to Action */}
							<div className={styles.call_to_action}><FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'info-circle']}></FontAwesomeIcon>Learn More</div>
							
						</div>

						{/* Media */}
						<div className={styles.media_container} id="media_container_3">

							{/* Slideshow */}
							<Controller><Scene duration={500} triggerElement="#media_container_3">{(progress, event) => (
								<Slideshow id={event} event={event} options={{
									images: [
										"/top_down_project_image_1.png",
										"/top_down_project_image_2.png",
										"/top_down_project_image_3.png",
										"/top_down_project_image_4.png",
										"/top_down_project_image_5.png"
									]
								}}/>
							)}</Scene></Controller>

						</div>

					</div>

				</div></Scene></Controller>



				{/* ================================================= Career Timeline ================================================ */}
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
								Enrolled at Qatar University for a bachelors degree in Engineering with plans on migrating to Electronic Engineering.
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



				{/* ===================================================== Footer ===================================================== */}
				<Footer/>
				


				{/* ================================================== Miscellaneous ================================================= */}

				{/* Navbar */}
				<Controller><Scene classToggle="active" triggerElement="#fade_end">
					<div className="navbar_container"><Navbar pathname=""/></div>
				</Scene></Controller>
				
				{/* Toast Container */}
				<ToastContainer style={{zIndex: 3}}/>

			</div>

		</div>
	);

}

export default Home