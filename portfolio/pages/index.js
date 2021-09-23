import React, { useState } from 'react';
import styles from '@/styles/Home.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";
import { ToastContainer } from 'react-nextjs-toast';
import { motion } from 'framer-motion';
import Navbar from "@/components/navbar";
import SideNavbar from '@/components/side_navbar';
import Slideshow from '@/components/slideshow';
import ContactMe from '@/components/contact_me';
import ScrollToTop from '@/components/scroll_to_top';
import Loader from '@/components/loader';

//	Declare output function
function Home () {

	/* ==================================================== Variables =================================================== */

	//	Page variables
	const [preload, setPreload] = useState(0);
	const [projects, setProjects] = useState(0);

	//	Skeleton html
	var skeleton = [];



	/* =================================================== Use Effect =================================================== */
	React.useEffect(async () => {

		// 	Import lottie
		import("@lottiefiles/lottie-player");
		
		//	Hide navigation menu
		document.querySelector('.navigation').classList.remove('active');

		//	Check if not first time visitting page
		if (sessionStorage.getItem('home_visit')) {

			//	Get all sections
			document.querySelectorAll(`.load_animation`).forEach(() => {
				
				//	Disable load animation
				setPreload(styles.preload);

			});

		}

		//	Set cookie
		sessionStorage.setItem('home_visit', true);

		//	Generate skeleton html
		for (let i = 0; i < 5; i++) {
			
			//	Push to array
			skeleton.push(<div className={`${styles.skeleton} ${styles.section}`} key={i} style={{transitionDelay: `${0.75 + (i * 0.25)}s`}}>

				{/* Meta */}
				<div className={styles.meta}>

					{/* Title */}
					<h3>Lorem ipsum dolor sit amet</h3>

					{/* Date */}
					<div className={styles.date}>Lorem ipsum dolor</div>

					{/* Description */}
					<p>1</p>
					<p>2</p>
					<p>3</p>

				</div>

				{/* Media */}
				<div className={styles.media_container}>

				</div>

			</div>);
			
		}

		//	Add loading indicator for projects
		setProjects({length: 0, data: skeleton});

		//	Load projects
		setProjects(await get_projects());

	}, [])



	/* ==================================================== Functions =================================================== */

	//	Retrieve projects from the database
	async function get_projects () {

		//	Try calling api route
		try {

			//	Declare options
			var options = {
				limit		: 5,
				featured	: [{}]
			}

			//	Call api
			var results = await fetch('/api/project/get_projects', {
				method		: 'POST',
				headers		: { 'Content-Type': 'application/json' },
				body		: JSON.stringify(options)
			})

			//	Extract response
			results = await results.json();

			//	For each project
			var projects = [];
			results.data.forEach((project, index) => {

				//	Generate tech stack list
				var stack = project.tech_stack.map((elem, index) => {

					//	Return list item
					return (<li key={index}>{elem}</li>);

				})

				//	Return html
				projects.push(
					<div className={styles.section} key={index} style={{transitionDelay: `${0.75 + (index * 0.25)}s`}}>

						{/* Meta */}
						<div className={styles.meta}>

							{/* Title */}
							<div className={styles.underline}></div>
							<h3>{project.name}</h3>

							{/* Date */}
							<div className={styles.date}>{project.date.toString().split('T')[0]}</div>

							{/* Description */}
							<p>{project.description.short}</p>

							{/* Tech Stack */}
							<ul className={styles.tags}>{stack}</ul>

							{/* Call to Action */}
							<Link href={`/projects/${project.name.replace(' ', '_')}`}><a className={styles.call_to_action}><FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'info-circle']}/>Project Details</a></Link>

						</div>

						{/* Media */}
						<div className={styles.media_container} id={`media_container_${index}`}>

							{/* Slideshow */}
							<Controller><Scene duration={500} triggerElement={`#media_container_${index}`}>{(progress, event) => (
								<Slideshow id={event} event={event} options={{
									images: project.images
								}}/>
							)}</Scene></Controller>

						</div>

					</div>);

			})

			//	Return projects html
			return { length: results.length, data: projects };

		} catch (e) {

			//	Print error
			console.log(e);

			//	Return projects html
			return { length: 0, data: skeleton };

		}

	}



	/* ================================================ Output final html =============================================== */
	return (
		<div className={styles.container}>

			{/* Head */}
			<Head>

				{/* Details */}
				<title>Home | Muhammad Fauzan Aristya Putra</title>
				<meta name="description" content="Muhammad Fauzan Aristya Putra's Portfolio"/>
				<link rel="icon" href="/favicon.ico" />

			</Head>

			{/* Homepage */}
			<motion.div initial={{opacity: 1}} exit={{opacity: 0}} className={styles.home}>

				{/* ================================================== Landing Page ================================================== */}

				{/* Background Mask */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={`${styles.background_mask} ${preload} load_animation`} id="background_mask">

					{/* Background */}
					<div className={styles.background} id="background"></div>

					{/* Blobs */}
					<div className={`${styles.blob} ${styles.left}`}></div>
					<div className={`${styles.blob} ${styles.right}`}></div>

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
								<div className={styles.meta} id="meta">First year student at Qatar University,</div>
								<div className={styles.meta} style={{animationDelay: '3.5s'}} id="meta">Full Stack Developer by day,</div>
								<div className={styles.meta} style={{animationDelay: '4.75s'}} id="meta">Game Developer by night.</div>

							</div>
						)}
					</Scene></Controller>

					{/* Background End */}
					<div style={{position: 'absolute', bottom: "10%"}} id="fade_end"></div>

					{/* Footer */}
					<div className={styles.footer}>
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1918 258" preserveAspectRatio="none">
							<path className={styles.shape_fill} d="M0.5 257.5H1918C1184.5 257.5 732.5 0.5 0.5 0.5V257.5Z"></path>
						</svg>
					</div>

				</div></Scene></Controller>

				{/* Call to Action */}
				<Link href="/#showcase"><a className={`${styles.call_to_action} ${styles.landing_page}`} id="landing_page">
					VIEW PROJECTS
					<FontAwesomeIcon className={styles.icon} style={{marginLeft: '10px'}} icon={['fas', 'arrow-right']}></FontAwesomeIcon>
				</a></Link>



				{/* ===================================================== Hire Me ==================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={`${styles.hire_me} ${preload} load_animation`}>

					{/* Anchor */}
					<a className="anchor" id="hire_me"/>

					{/* Meta */}
					<div className={styles.meta}>

						{/* Description */}
						<div className={styles.description}>

							{/* Title */}
							<h1>Looking for a Web Designer or Game Developer?</h1>

							{/* Description */}
							<p style={{transitionDelay: '0.5s'}}>
								Are you an aspiring entrepreneur with an idea in mind but don&apos;t have anyone to help you accomplish it? 
								Or are you an established business looking to hire a passionate new employee to work on a website/game of yours?
							</p>
							<p style={{transitionDelay: '0.75s'}}>
								Well, if you fall into any of these categories, then congrats! You&apos;ve come to the right place. 
								I have a passion for creating games and websites, always putting my best foot forward and always 
								eager to learn new things. If you&apos;re interested, click the link below.
							</p>

							{/* Call to Action */}
							<Link href="/contact"><a><div className={styles.call_to_action}>
								<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'user-plus']}></FontAwesomeIcon>
								Hire Me
							</div></a></Link>

						</div>

						{/* Image */}
						<div className={styles.image}><lottie-player 
							src='./code_animation.json' 
							speed="1" 
							loop 
							autoplay
						/></div>

					</div>

				</div></Scene></Controller>



				{/* ==================================================== Showcase ==================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={`${styles.showcase} ${preload} load_animation`}>

					{/* Anchor */}
					<a className="anchor" id="showcase"/>

					{/* Background */}
					<div className={styles.background}>
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shape_fill}></path>
						</svg>
					</div>

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
									bounce		: false,
									noise		: true
								}
							}
						}}>
					</Particles>

					{/* Header */}
					<div className={styles.sideline}></div>
					<h2>Featured Side Projects</h2>

					{/* View All */}
					<Link href="/projects"><a className={styles.view_all}>View All</a></Link>

					{/* Section */}
					{projects.data}

					{/* Call to Action */}
					<Link href="/projects"><a className={styles.call_to_action}><FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'search']}/>View All</a></Link>

				</div></Scene></Controller>



				{/* ================================================= Career Timeline ================================================ */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={`${styles.career_timeline} ${preload} load_animation`}>

					{/* Anchor */}
					<a className="anchor" id="career_timeline"/>

					{/* Background */}
					<div className={styles.background}></div>

					{/* Connector */}
					<div className={styles.connectors}>
						<div className={styles.connector}></div>
						<div className={styles.connector}></div>
						<div className={styles.connector}></div>
					</div>

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
									<img alt="AKIS logo" src="/akis_logo.webp"/>
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
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'clock']}></FontAwesomeIcon>
									08/2008 - 07/2021
								</div>
								<div className={styles.divider} style={{marginBottom: '10px'}}></div>

								{/* Description */}
								<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'info-circle']}></FontAwesomeIcon>
								Description
								<div style={{height: '10px'}}></div>
								I studied at AKIS my whole school life, from 2008 to 2021, where I graduated with my AS Level grades at age 17. 
								During my time there, I consistently got among the top scores. Some of my strongest subjects included Mathematics, 
								Physics and Computer Science. For these subjects, I was able to achieve an average grade of A.
								<div className={styles.divider}></div>

								{/* Action */}
								<a href="high_school_transcript.pdf" target="_blank" rel="noreferrer"><button style={{color: '#3D3D3D', margin: '10px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'download']}></FontAwesomeIcon>
									View Transcript
								</button></a>
								<a href="https://akis.sch.qa/" target="_blank" rel="noreferrer"><button style={{color: '#3D3D3D', margin: '10px'}}>
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
									<img alt="Malvor logo" src="/malvor_logo.svg"/>
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
									06/2021 - 08/2021
								</div>
								<div className={styles.divider} style={{marginBottom: '10px'}}></div>

								{/* Description */}
								<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'info-circle']}></FontAwesomeIcon>
								Description
								<div style={{height: '10px'}}></div>
								In the last few months of high school, I applied for a local startup&apos;s data entry position and got accepted. 
								Here I was responsible for inputting lists of product data into the store database quickly and accurately.
								<div className={styles.divider}></div>

								{/* Action */}
								<a href="https://malvor.com/" target="_blank" rel="noreferrer"><button style={{color: '#3D3D3D', margin: '10px'}}>
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
									<img alt="Malvor logo" src="/malvor_logo.svg"/>
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
									07/2021 - 08/2021
								</div>
								<div className={styles.divider} style={{marginBottom: '10px'}}></div>

								{/* Description */}
								<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'info-circle']}></FontAwesomeIcon>
								Description
								<div style={{height: '10px'}}></div>
								Almost a month after starting my job at this company, my boss gave me the chance to work as a full-stack developer intern. 
								During this time, I sharpened my HTML and CSS skills and quickly learnt web development using tools like NodeJS, 
								ElasticSearch, MongoDB, etc.
								<div style={{height: '20px'}}></div>
								Some of my improvements include: 

								{/* List */}
								<ul>
									<li>Implementing a WYSIWYG editor for a more in depth data entry experience</li>
									<li>Using ElasticSearch to filter for orders by location</li>
									<li>Doing a complete overhaul of the product category system</li>
									<li>Improving the product search page</li>
									<li>Discovering and implementing new and more efficient ways of inputting data</li>
								</ul>

								{/* Link */}
								<Link href="/projects/Malvor"><a>Click here to view project details</a></Link>
								<div className={styles.divider}></div>

								{/* Skills */}
								<ul className={styles.tags}>
									<li>NodeJS</li>
									<li>ExpressJS</li>
									<li>MongoDB</li>
									<li>ElasticSearch</li>
									<li>Semantic UI</li>
									<li>Handlebars</li>
									<li>Unit Testing</li>
									<li>Lodash</li>
								</ul>
								<div className={styles.divider}></div>

								{/* Action */}
								<a href="https://malvor.com/" target="_blank" rel="noreferrer"><button style={{color: '#3D3D3D', margin: '10px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'external-link-alt']}></FontAwesomeIcon>
									View Website
								</button></a>
								<Link href="/projects/Malvor" ><a><button style={{color: '#3D3D3D', margin: '10px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'external-link-alt']}></FontAwesomeIcon>
									View Project
								</button></a></Link>

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
									<img alt="Qatar University logo" src="/qu_logo.svg"/>
								</div>

								{/* Header */}
								<h2>
									<span>08/2021</span>
									Engineering Bachelor&apos;s Degree
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
								I applied to the college of Engineering at Qatar University during my last summer at high school and got accepted. 
								Currently studying as a general engineering student with plans on majoring in Mechanical Engineering 
								and minoring in Computer Science.
								<div className={styles.divider}></div>

								{/* Action */}
								<a href="https://www.qu.edu.qa/" target="_blank" rel="noreferrer"><button style={{color: '#3D3D3D', margin: '10px'}}>
									<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['fas', 'external-link-alt']}></FontAwesomeIcon>
									View Website
								</button></a>
							</div>

							{/* Footer */}
							<div className={styles.card_footer}></div>

						</div>

					</div>

					{/* Learn More */}
					<Link href="/about"><a className={styles.call_to_action}>
						<FontAwesomeIcon className={styles.icon} style={{marginRight: '10px'}} icon={['far', 'address-card']}></FontAwesomeIcon>
						About Me
					</a></Link>

				</div></Scene></Controller>



				{/* =================================================== Contact Me =================================================== */}
				<ContactMe/>
				


				{/* ================================================== Miscellaneous ================================================= */}

				{/* Scroll to Top */}
				<ScrollToTop options={{trigger: '#fade_end'}}/>

				{/* Navbar */}
				<Controller><Scene classToggle="active" triggerElement="#fade_end">
					<div className="navbar_container"><Navbar pathname=""/></div>
				</Scene></Controller>

				{/* Scrollbar */}
				<SideNavbar options={{
					sections	: [
						{
							id		: 'hire_me',
							class		: styles.hire_me,
							name		: 'Hire Me'
						},
						{
							id		: 'showcase',
							class		: styles.showcase,
							name		: 'Showcase'
						},
						{
							id		: 'career_timeline',
							class		: styles.career_timeline,
							name		: 'Career Timeline'
						}
					]
				}}/>

				{/* WIP Indicator */}
				<div className='wip1'>WORK IN PROGRESS</div>
				<div className='wip2'>WORK IN PROGRESS</div>
				
				{/* Toast Container */}
				<ToastContainer style={{zIndex: 5}}/>

			</motion.div>

			{/* Loader */}
			<Loader/>

		</div>
	);

}

export default Home