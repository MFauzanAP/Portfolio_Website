import React, { useRef, useState } from 'react';
import styles from '@/styles/About.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import profilePicture from '@/public/profile_picture.webp';
import akisLogo from '@/public/akis_logo.webp';
import quLogo from '@/public/qu_logo.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";
import { ToastContainer } from 'react-nextjs-toast';
import { motion } from 'framer-motion';
import sanitizeHTML from 'sanitize-html';
import Navbar from "@/components/navbar";
import SideNavbar from '@/components/side_navbar';
import Slideshow from '@/components/slideshow';
import ContactMe from '@/components/contact_me';
import ScrollToTop from '@/components/scroll_to_top';
import Loader from '@/components/loader';

//	Declare output function
function About () {

	/* ==================================================== Variables =================================================== */

	//	Reference
	const ref = useRef(null);

	//	Get reference to router and router params
	const router = useRouter();

	//	Page variables
	const [preload, setPreload] = useState(0);
	const [techStack, setTechStack] = useState(0);
	var [filters, setFilters] = useState({categories: []});

	//	Store whether or not dropdown is open
	var is_dropdown_open = false;



	/* =================================================== Use Effect =================================================== */
	React.useEffect(async () => {

		// 	Import lottie
		import("@lottiefiles/lottie-player");

		//	Hide navigation menu
		document.querySelector('.navigation').classList.remove('active');

		//	Check if not first time visitting page
		if (sessionStorage.getItem('about_visit')) {

			//	Get all sections
			document.querySelectorAll(`.load_animation`).forEach(() => {
				
				//	Disable load animation
				setPreload(styles.preload);

			});

		}

		//	Set cookie
		sessionStorage.setItem('about_visit', true);

		//	Add loading indicator for tech stack
		setTechStack({length: 0, data: (
			<div className={styles.loader}>
				<i className="fa fa-spinner fa-spin"></i>
				<p>Loading Tech Stack, Hold On...</p>
			</div>
		)})

		//	Load projects
		setTechStack(await get_tech_stack());

	}, [])



	/* ==================================================== Functions =================================================== */

	//	Retrieve tech stack from the database
	async function get_tech_stack (options = {}) {

		//	Try calling api route
		try {

			//	Call api
			var results = await fetch('/api/about/get_tech_stack', {
				method		: 'POST',
				headers		: { 'Content-Type': 'application/json' },
				body		: JSON.stringify(options)
			})

			//	Extract response
			results = await results.json();

			//	For each tech stack
			var tech_stack = [];
			results.data.forEach((tech, index) => {

				//	Calculate number of years since starting tech
				var diffDate = Date.now() - Date.parse(tech.date);
				
				//	Convert difference from milliseconds to years
				var years = Math.round(diffDate / 31536000000);

				//	Return html
				tech_stack.push(
					<div className={styles.details} key={index}>

						{/* Icon */}
						<Link href={`/projects?query=${tech.name}`}><a><img alt={`${tech.name} technology logo`} className={styles.image} src={tech.image}/></a></Link>

						{/* Description */}
						<div className={styles.title}>{tech.name}</div>
						<div className={styles.description}>
							{tech.category}<br/>
							{years ? years : '<1'} Year{years > 1 ? 's' : ''} of Experience<br/>
						</div>

					</div>);

			})

			//	If there are no projects then tell the user there are no projects
			if (!tech_stack.length) {
				tech_stack = (
				<div className={styles.loader}>
					<FontAwesomeIcon icon={['fas', 'exclamation-circle']} style={{fontSize: '5em'}}/>
					<h1>404 Not Found</h1>
					<p style={{fontWeight: 400, letterSpacing: 0, margin: 0}}>Unfortunately, there are no technologies that match this filter. Please try again.</p>
				</div>);
			}

			//	Return projects html
			return { length: results.length, data: tech_stack };

		} catch (e) {

			//	Print error
			console.log(e);

			//	Return projects html
			return { length: 0, data: (
				<div className={styles.loader}>
					<FontAwesomeIcon icon={['fas', 'exclamation-circle']} style={{fontSize: '5em'}}/>
					<h1>503 Service Unavailable</h1>
					<p style={{fontWeight: 400, letterSpacing: 0, margin: 0}}>Unfortunately, we were unable to connect to the server. Please try again.</p>
				</div>
			) };

		}

	}

	//	Toggle dropdown
	function ToggleDropdown () {

		//	If document is not ready
		if (!router.isReady) return;

		//	Get reference to dropdown
		var dropdown = document.querySelector(`.${styles.dropdown}`);

		//	If there is no dropdown then exit
		if (!dropdown) return;

		//	If closed
		if (!dropdown.classList.contains(styles.active)) {

			//	Open dropdown
			dropdown.classList.add(styles.active);

			//	Subscribe events
			document.addEventListener('click', CloseDropdown);

			//	Dropdown open
			is_dropdown_open = true;

		}

		//	Else if open
		else {

			//	Close dropdown
			dropdown.classList.remove(styles.active);

			//	Unsubscribe events
			document.removeEventListener('click', CloseDropdown);

			//	Dropdown closed
			is_dropdown_open = false;

		}

	}

	//	Close dropdown
	function CloseDropdown (e) {

		//	If document is not ready
		if (!router.isReady) return;

		//	Get reference to dropdown
		var dropdown = document.querySelector(`.${styles.dropdown}`);

		//	If there is no dropdown then exit
		if (!dropdown) return;

		//	Check if open
		if (dropdown.classList.contains(styles.active) && is_dropdown_open) {

			//	If clicking outside of dropdown
			if (!dropdown.contains(e.target)) {

				//	Close dropdown
				dropdown.classList.remove(styles.active);

				//	Dropdown closed
				is_dropdown_open = false;

			}

		}
	}

	//	Toggle filter
	async function ToggleFilter (filter, type, e) {

		//	If document is not ready
		if (!router.isReady) return;

		//	Get element
		var item = e.target;

		//	If already selected
		if (item.classList.contains(styles.active)) {

			//	Deselect
			item.classList.remove(styles.active);

			//	Remove from filters list
			filters[type] = filters[type].filter((elem) => {return elem != filter});
			setFilters(filters);

			//	Add loading indicator for projects
			setTechStack({length: 0, data: (
				<div className={styles.loader}>
					<i className="fa fa-spinner fa-spin"></i>
					<p>Loading Tech Stack, Hold On...</p>
				</div>
			)})

			//	Load projects
			setTechStack(await get_tech_stack(filters));

		}

		//	If not selected
		else {

			//	Select item
			item.classList.add(styles.active);

			//	Add to filters list
			filters[type].push(filter);
			setFilters(filters);

			//	Add loading indicator for projects
			setTechStack({length: 0, data: (
				<div className={styles.loader}>
					<i className="fa fa-spinner fa-spin"></i>
					<p>Loading Tech Stack, Hold On...</p>
				</div>
			)})

			//	Load projects
			setTechStack(await get_tech_stack(filters));

		}

	}

	//	Update the project search value and refresh the search results
	async function UpdateSearch () {

		//	Get search input field
		var input = document.querySelector('#search');

		//	Get text in input field
		var search = sanitizeHTML(input.value);

		//	Try and get the clear search button
		var clear = document.querySelector(`.${styles.search_clear}`);

		//	Update clear search button
		if (clear) search ? clear.classList.add(styles.active) : clear.classList.remove(styles.active);

		//	Update search value
		filters.search = search;
		setFilters(filters);

		//	Add loading indicator for projects
		setTechStack({length: 0, data: (
			<div className={styles.loader}>
				<i className="fa fa-spinner fa-spin"></i>
				<p>Loading Tech Stack, Hold On...</p>
			</div>
		)})

		//	Call api request to fetch projects
		setTechStack(await get_tech_stack(filters));

		//	End function
		return;

	}

	//	Clear the search input field
	function ClearSearch () {

		//	Get search input field
		var input = document.querySelector('#search');

		//	Clear input field
		if (input) input.value = '';

		//	Update search
		UpdateSearch();

	}



	/* ================================================ Output final html =============================================== */
	return (
		<div className={styles.container}>

			{/* Head */}
			<Head>

				{/* Details */}
				<title>About | Muhammad Fauzan Aristya Putra</title>
				<meta name="title" content="About | Muhammad Fauzan Aristya Putra"/>
				<meta name="description" content="A personal portfolio for a first-year student at Qatar University with a passion for web design and game development. "/>
				<meta name="keywords" content="muhammad, fauzan, aristya, putra, portfolio, web development, game development, technology, html, css, javascript, react, nextjs, jquery, c#, unity, blender, python"/>
				<meta name="robots" content="index, follow"/>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta name="language" content="English"/>
				<meta name="author" content="Muhammad Fauzan Aristya Putra"/>
				<link rel="icon" href="/favicon.ico" />

				{/* Font Awesome */}
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

			</Head>

			{/* About Page */}
			<motion.div initial={{opacity: 1}} exit={{opacity: 0}} className={styles.about}>

				{/* Navbar Background */}
				<div className={styles.navbar_background}>
					<svg data-name="Layer 1" transform="scale(-1, 1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles.shape_fill}></path>
						<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles.shape_fill}></path>
						<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shape_fill}></path>
					</svg>
				</div>

				{/* ================================================== Personal Info ================================================= */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={`${styles.personal_info} ${preload} load_animation`}>

					{/* Anchor */}
					<p className="anchor" id="profile"/>

					{/* Details */}
					<div className={styles.details}>

						{/* Animation */}
						<div className={styles.animation}><lottie-player 
							src='./profile_animation.json' 
							ref={ref}
							speed="1" 
							loop 
							autoplay
						/></div>

						{/* Profile Picture */}
						<div className={styles.profile_picture}><span className={styles.blob}/><span className={styles.blob}/><Image alt="Profile picture" placeholder='blur' src={profilePicture}/></div>

						{/* Text */}
						<div className={styles.text}>

							{/* Header */}
							<div className={styles.header}>Hey, I&apos;m Fauzan</div>

							{/* Description */}
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dolor at dui hendrerit accumsan.
								Curabitur nec ante risus. Donec vel erat iaculis, volutpat ante in, porttitor arcu. Interdum et malesuada
								fames ac ante ipsum primis in faucibus. Sed vel urna condimentum, gravida tortor sit amet, molestie purus.
								Donec nisl erat, ornare sit amet auctor ac, mattis in justo. Quisque accumsan justo arcu,
								nec dapibus eros blandit ut. Aliquam convallis consectetur ante, eget ullamcorper ipsum auctor nec.
								Mauris pellentesque vel odio ac ornare. Sed sed velit at risus aliquam pellentesque.
							</p>

							{/* Resume */}
							<button><FontAwesomeIcon icon={['fas', 'download']} style={{marginRight: '10px'}}/>View Resume</button>

						</div>

					</div>

					{/* Divider */}
					<div className={styles.divider}></div>

					{/* Grid */}
					<div className={styles.grid} id="grid">

						{/* Experience */}
						<div className={styles.item}>
							
							{/* Icon */}
							<Link href='#experience'><a className={styles.icon}><FontAwesomeIcon icon={['fas', 'laptop-code']}/></a></Link>
							
							{/* Title */}
							<Link href='#experience'><a className={styles.title}>Experience</a></Link>

							{/* Underline */}
							<div className={styles.underline}></div>

							{/* Description */}
							<p>
								Approx. 6 years of experience in Game Development,
								3 years in Software Development, and 1 year in Web Development.
							</p>

						</div>

						{/* Education */}
						<div className={styles.item}>

							{/* Icon */}
							<Link href='#education'><a className={styles.icon}><FontAwesomeIcon icon={['fas', 'book-open']}/></a></Link>
							
							{/* Title */}
							<Link href='#education'><a className={styles.title}>Education</a></Link>

							{/* Underline */}
							<div className={styles.underline}></div>

							{/* Description */}
							<p>Bachelor&apos;s Degree in Engineering @ Qatar University
							High School Diploma @ Al Khor International School.</p>

						</div>

						{/* Hobbies */}
						<div className={styles.item}>

							{/* Icon */}
							<Link href='#hobbies'><a className={styles.icon}><FontAwesomeIcon icon={['fas', 'gamepad']}/></a></Link>
							
							{/* Title */}
							<Link href='#hobbies'><a className={styles.title}>Hobbies</a></Link>

							{/* Underline */}
							<div className={styles.underline}></div>

							{/* Description */}
							<p>Coding<br/>
							Watching Movies/Dramas<br/>
							Volleyball<br/>
							Video Games</p>

						</div>

						{/* Language */}
						<div className={styles.item}>
							
							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'language']}/>
							
							{/* Title */}
							<h3>Language</h3>

							{/* Underline */}
							<div className={styles.underline}></div>

							{/* Description */}
							<table><tbody>
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
							</tbody></table>

						</div>

						{/* Nationality */}
						<div className={styles.item}>
							
							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'globe-asia']}/>
							
							{/* Title */}
							<h3>Nationality</h3>

							{/* Underline */}
							<div className={styles.underline}></div>

							{/* Description */}
							<p>
								Born in Indonesia 🇮🇩, raised and brought up 
								in Qatar 🇶🇦.
							</p>

						</div>

						{/* Age */}
						<div className={styles.item}>
							
							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'calendar-alt']}/>
							
							{/* Title */}
							<h3>Birthdate</h3>

							{/* Underline */}
							<div className={styles.underline}></div>

							{/* Description */}
							<p>
								Born on the 4th of May 2004 (04/05/2004) in Jakarta, Indonesia.
							</p>

						</div>

					</div>

				</div></Scene></Controller>



				{/* =================================================== Tech Stack =================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={`${styles.tech_stack} ${preload} load_animation`}>

					{/* Anchor */}
					<p className="anchor" id="tech_stack"/>

					{/* Background */}
					<div className={styles.background}>
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className={styles.shape_fill}></path>
						</svg>
					</div>

					{/* Title */}
					<div className={styles.header}>TECHNICAL SKILLS</div>

					{/* Toolbar */}
					<div className={styles.toolbar}>

						{/* Search Results */}
						<div className={styles.search_results}>{techStack.length || 0} Technologies Found</div>

						{/* Search Tools */}
						<div className={styles.search_tools}>

							{/* Search Bar */}
							<div className={styles.search_bar}>
								<input type="text" id="search" name="search" onInput={UpdateSearch} required/>
								<label htmlFor="search">Search Tech Stack</label>
								<div className={styles.search_clear} onClick={ClearSearch}><FontAwesomeIcon icon={['fas', 'times']}/></div>
							</div>

							{/* Dropdown */}
							<div className={styles.dropdown}>

								{/* Button */}
								<div className={styles.button} onClick={ToggleDropdown}><FontAwesomeIcon icon={['fas', 'sort-amount-up']}/></div>

								{/* Menu */}
								<div className={styles.menu}>

									{/* Categories */}
									<div className={styles.section}><FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'cube']}/>Categories</div>

									{/* Items */}
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'Front End', 'categories')}>Front End</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'Back End', 'categories')}>Back End</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'Full Stack', 'categories')}>Full Stack</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'Database', 'categories')}>Database</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'Unit Testing', 'categories')}>Unit Testing</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'Utility', 'categories')}>Utility</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'Version Control', 'categories')}>Version Control</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'UI & Design', 'categories')}>UI &amp; Design</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'Game Engine', 'categories')}>Game Engine</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'Programming Language', 'categories')}>Programming Language</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, '3D Modelling', 'categories')}>3D Modelling</div>

								</div>
								
							</div>


						</div>

					</div>


					{/* Grid */}
					<div className={styles.grid}>{techStack.data}</div>

					{/* Footer */}
					<div className={styles.footer}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
							<path fill="#221e41" opacity="1" d="M0,64L0,32L160,32L160,96L320,96L320,224L480,224L480,96L640,96L640,32L800,32L800,256L960,256L960,0L1120,0L1120,96L1280,96L1280,160L1440,160L1440,0L1280,0L1280,0L1120,0L1120,0L960,0L960,0L800,0L800,0L640,0L640,0L480,0L480,0L320,0L320,0L160,0L160,0L0,0L0,0Z"></path>
						</svg>
					</div>

				</div></Scene></Controller>



				{/* =================================================== Experience =================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={`${styles.experience} ${preload} load_animation`}>

					{/* Anchor */}
					<p className="anchor" id="experience"/>

					{/* Header */}
					<div className={styles.header}>EXPERIENCE</div>

					{/* Subheader */}
					<div className={styles.subheader} id="experience_subheader">Game Development</div>

					{/* Slideshow */}
					<div className={styles.slideshow}><Slideshow options={{
							autoPlay	: false, 
							invertArrows	: true, 
							arrowColor	: 'black',
							padding		: 10, 
							maxWidth	: '700px', 
							maxHeight	: '500px', 
							itemScale	: 0.8, 
							itemOpacity	: 0.5,
							callback	: function (page) {
								var names = ['Game Development', 'App Development', 'Web Development'];
								var subheader = document.getElementById('experience_subheader');
								subheader.innerHTML = names[page];
							}}}>
						
						{/* Cards */}
						<div className={styles.card}>

							{/* Label */}
							<div className={styles.label}><FontAwesomeIcon icon={['fas', 'gamepad']}/></div>
							
							{/* Container */}
							<div className={styles.container}>
								<p>
									&emsp; My first experience with programming was with Scratch. My then middle school teacher introduced 
									me to it, and I instantly fell in love. Back then, I was always curious about how the games 
									I regularly played worked. Scratch was my gateway into the mystical world of Computer Programming, 
									and I would often spend hours after school creating games and trying to replicate many of the games 
									I often saw on the website.
								</p>
								<p>
									&emsp; Skip ahead a few months to when I first found the Unity game engine. Back then, a game I often 
									played got shut down (Fusion Fall), leading me to use my newly learnt skills to try my hand at 
									recreating this very game in Unity, the same game engine the original had used. However, back then, 
									I barely knew anything about the Unity game engine, and the only learning I did was online and 
									self-taught, so I quickly became burnt out.
								</p>
								<p>
									&emsp; However, not long after, I met a few people online that wanted to recreate the game but with 
									Nickelodeon characters instead of the original Cartoon Network ones. So, I decided to apply for the 
									job and joined the fan project, despite only having around a year of experience with Unity. 
									At first, I struggled since I was the only person working on the game itself, 
									but I got used to it with time and enjoyed the challenge. Unfortunately, after a year of work, 
									the group disbanded, and I was back to creating games solo.
								</p>
							</div>

						</div>
						<div className={styles.card}>

							{/* Label */}
							<div className={styles.label}><FontAwesomeIcon icon={['fas', 'desktop']}/></div>
							
							{/* Container */}
							<div className={styles.container}>
								<p>
									&emsp; I started creating desktop applications a couple of years back when I decided to take a break 
									from game development to work on something different. One of my first ever desktop applications was 
									a time management software where I planned on having the software try and track what type of application 
									you were running and log the hours spent on that app. The plan was to give points based on how little 
									you used a non-beneficial app and how often you did something productive. 
									However, the project didn&apos;t go far, and I stopped before I got anything meaningful done.
								</p>
								<p>
									&emsp; It wasn&apos;t until a year later, when I started my GCSEs, that I got back to working on 
									desktop apps again. This time I had planned on making a utility software that would help me revise 
									for my GCSEs. But once again, nothing much came out of this effort.

								</p>
								<p>
									&emsp; However, in my final year of high school, my chemistry teacher asked me to organize some 
									flashcards for her, but I had other plans. So I asked her if I could instead create an app that 
									people could use to revise. She agreed, and so I started to work on it. After a week of hard work, 
									I created the application, which I shared with her and my classmates. 
									You can see a few screenshots of the app
									<Link href="/projects"><a style={{color: 'blue'}}> here</a></Link>.
								</p>
							</div>

						</div>
						<div className={styles.card}>

							{/* Label */}
							<div className={styles.label}><FontAwesomeIcon icon={['fas', 'globe']}/></div>
							
							{/* Container */}
							<div className={styles.container}>
								<p>
									&emsp; I was first exposed to web development back in 9th grade as it was the subject I was studying at the time. 
									However, we only learnt the basics, and I was honestly more attracted to game development, so I quickly lost 
									interest and forgot about the whole thing. It wasn&apos;t until three years later that I picked up web development 
									again and discovered what you could do with it.
								</p>
								<p>
									&emsp; Whenever I was inputting data into the system, I noticed things that I felt could be done better for a better 
									user experience. So, I started keeping a record of all these little things for later use. Then, one morning I decided, 
									why not try and improve on this? And so, I decided I wanted to create a desktop application that could do the same job 
									but in a more user-friendly and efficient way.
								</p>
								<p>
									&emsp; During development, I would send my boss updates on the app I was working on and give my thought process behind 
									each improvement/feature. Eventually, however, he decided it would be better to have me work part-time on the actual website, 
									and so began my journey into web development.
								</p>
							</div>

						</div>

					</Slideshow></div>

				</div></Scene></Controller>



				{/* ==================================================== Education =================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={`${styles.education} ${preload} load_animation`}>

					{/* Anchor */}
					<p className="anchor" id="education"/>

					{/* Background */}
					<div className={styles.background}></div>

					{/* Header */}
					<div className={styles.header}>EDUCATION</div>

					{/* Subheader */}
					<div className={styles.subheader} id="education_subheader">Al Khor International School</div>

					{/* Slideshow */}
					<div className={styles.slideshow}><Slideshow options={{
							autoPlay		: false, 
							invertArrows		: true, 
							arrowColor		: 'white',
							paginationColor		: 'purple',
							padding			: 10, 
							maxWidth		: '700px', 
							maxHeight		: '500px', 
							itemScale		: 0.8, 
							itemOpacity		: 0.5,
							callback		: function (page) {
								var names = ['Al Khor International School', 'Qatar University'];
								var subheader = document.getElementById('education_subheader');
								subheader.innerHTML = names[page];
							}}}>
						
						{/* Cards */}
						<div className={styles.card}>

							{/* Logo */}
							<div className={styles.logo}><Image alt="AKIS logo" layout='fill' src={akisLogo}/></div>

							{/* Meta */}
							<div className={styles.meta}>August 2009 - July 2021</div>

							{/* Container */}
							<div className={styles.container}>

								{/* Description */}
								<p>
									I acquired my high school diploma from Al Khor International School after having 
									studied there for 12 years.
								</p>

							</div>

							{/* Call To Action */}
							<a target="_blank" href="high_school_transcript.pdf" className={styles.call_to_action}>
								<FontAwesomeIcon icon={['fas', 'download']} style={{marginRight: '10px'}}/>
								View Transcript
							</a>

							{/* Cover */}
							<div className={styles.cover}></div>

						</div>
						<div className={styles.card}>

							{/* Logo */}
							<div className={styles.logo}><Image alt="Qatar University logo" layout='fill' src={quLogo}/></div>

							{/* Meta */}
							<div className={styles.meta}>August 2021 - Present</div>

							{/* Container */}
							<div className={styles.container}>

								{/* Description */}
								<p>
									Currently enrolled in the college of engineering at Qatar University with
									plans on majoring in Mechanical Engineering and minoring in Computer Science.
								</p>

							</div>

							{/* Call To Action */}
							<a target="_blank" rel="noreferrer" href="https://www.qu.edu.qa/" className={styles.call_to_action}>
								<FontAwesomeIcon icon={['fas', 'external-link-alt']} style={{marginRight: '10px'}}/>
								View Website
							</a>

							{/* Cover */}
							<div className={styles.cover}></div>

						</div>

					</Slideshow></div>

				</div></Scene></Controller>



				{/* ===================================================== Hobbies ==================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={`${styles.hobbies} ${preload} load_animation`}>

					{/* Anchor */}
					<p className="anchor" id="hobbies"/>

					{/* Header */}
					<div className={styles.header}>IN MY FREE TIME</div>

					{/* Grid */}
					<div className={styles.grid}>

						{/* Coding */}
						<div className={styles.details}>

							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'code']} />

							{/* Title */}
							<div className={styles.title}>CODING</div>

							{/* Underline */}
							<div className={styles.underline}></div>

							{/* Description */}
							<div className={styles.description}>
								I enjoy coding in my spare time, often working on side projects or starting new ones 
								whenever I get bored of the old ones.
							</div>

						</div>

						{/* Watching */}
						<div className={styles.details}>

							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'film']} />

							{/* Title */}
							<div className={styles.title}>MOVIES</div>

							{/* Underline */}
							<div className={styles.underline}></div>

							{/* Description */}
							<div className={styles.description}>
							I also watch movies from time to time. My favourite genres are Action, Thriller, Mystery 
							and Horror. I also tend to watch K-Dramas whenever a new one I&apos;m interested in comes out.
							</div>

						</div>
						
						{/* Volleyball */}
						<div className={styles.details}>

							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'volleyball-ball']} />

							{/* Title */}
							<div className={styles.title}>VOLLEYBALL</div>

							{/* Underline */}
							<div className={styles.underline}></div>

							{/* Description */}
							<div className={styles.description}>
								Back in high school, I was an avid volleyball player and was part of the school volleyball team 
								when we won bronze and silver medals in under 15 and 19 national competitions.
							</div>

						</div>

						{/* Video Games */}
						<div className={styles.details}>

							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'gamepad']} />

							{/* Title */}
							<div className={styles.title}>VIDEO GAMES</div>

							{/* Underline */}
							<div className={styles.underline}></div>

							{/* Description */}
							<div className={styles.description}>
								I play video games from time to time, but nowadays, I don&apos;t play as much. Some games I 
								play are League of Legends and Minecraft.
							</div>

						</div>

					</div>

					{/* Divider */}
					<div className={styles.divider}></div>

				</div></Scene></Controller>



				{/* =================================================== Contact Me =================================================== */}
				<ContactMe/>
				


				{/* ================================================== Miscellaneous ================================================= */}

				{/* Scroll to Top */}
				<ScrollToTop options={{trigger: '#grid'}}/>

				{/* Navbar */}
				<Controller><Scene classToggle="active" triggerElement="#grid">
					<div className="navbar_container"><Navbar pathname="about"/></div>
				</Scene></Controller>

				{/* Scrollbar */}
				<SideNavbar options={{
					sections	: [
						{
							id		: 'profile',
							class		: styles.personal_info,
							name		: 'Profile'
						},
						{
							id		: 'tech_stack',
							class		: styles.tech_stack,
							name		: 'Tech Stack'
						},
						{
							id		: 'experience',
							class		: styles.experience,
							name		: 'Experience'
						},
						{
							id		: 'education',
							class		: styles.education,
							name		: 'Education'
						},
						{
							id		: 'hobbies',
							class		: styles.hobbies,
							name		: 'Hobbies'
						}
					]
				}}/>

				{/* Toast Container */}
				<ToastContainer style={{zIndex: 5}}/>

			</motion.div>

			{/* Loader */}
			<Loader/>

		</div>
	);

}

export default About