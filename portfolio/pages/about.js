import React, { useRef } from 'react';
import styles from '../styles/About.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profilePicture from '../public/profile_picture.png';
import htmlLogo from '../public/html_logo.png';
import cssLogo from '../public/css_logo.png';
import jsLogo from '../public/js_logo.png';
import sassLogo from '../public/sass_logo.png';
import jqueryLogo from '../public/jquery_logo.png';
import reactLogo from '../public/react_logo.png';
import nextLogo from '../public/next_logo.png';
import nodeLogo from '../public/node_logo.png';
import expressLogo from '../public/express_logo.png';
import mongodbLogo from '../public/mongodb_logo.png';
import elasticsearchLogo from '../public/elasticsearch_logo.png';
import handlebarsLogo from '../public/handlebars_logo.png';
import chaiLogo from '../public/chai_logo.png';
import lodashLogo from '../public/lodash_logo.png';
import githubLogo from '../public/github_logo.png';
import figmaLogo from '../public/figma_logo.png';
import unityLogo from '../public/unity_logo.png';
import csharpLogo from '../public/csharp_logo.png';
import vbLogo from '../public/vb_logo.png';
import pythonLogo from '../public/python_logo.png';
import blenderLogo from '../public/blender_logo.png';
import asepriteLogo from '../public/aseprite_logo.png';
import photoshopLogo from '../public/photoshop_logo.png';
import akisLogo from '../public/akis_logo.png';
import quLogo from '../public/qu_logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";
import { ToastContainer } from 'react-nextjs-toast';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Slideshow from '../components/slideshow';
import ContactMe from '../components/contact_me';

//	Declare output function
function Home () {

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
				<title>About | Muhammad Fauzan Aristya Putra</title>
				<meta name="description" content="Muhammad Fauzan Aristya Putra's Portfolio" />
				<link rel="icon" href="/favicon.ico" />

			</Head>

			{/* About Page */}
			<div className={styles.about}>

				{/* Navbar Background */}
				<div className={styles.navbar_background}>
					<svg data-name="Layer 1" transform="scale(-1, 1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles.shape_fill}></path>
						<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles.shape_fill}></path>
						<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shape_fill}></path>
					</svg>
				</div>

				{/* ================================================== Personal Info ================================================= */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={styles.personal_info}>

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
						<div className={styles.profile_picture}><Image placeholder='blur' src={profilePicture}/></div>

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
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={styles.tech_stack}>

					{/* Anchor */}
					<a id="tech_stack"/>

					{/* Background */}
					<div className={styles.background}>
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className={styles.shape_fill}></path>
						</svg>
					</div>

					{/* Title */}
					<div className={styles.header}>TECHNICAL SKILLS</div>

					{/* Grid */}
					<div className={styles.grid}>
						
						{/* Skills */}
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={htmlLogo}/></div>

							{/* Description */}
							<div className={styles.title}>HTML</div>
							<div className={styles.description}>
								Web Development<br/>
								3 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={cssLogo}/></div>

							{/* Description */}
							<div className={styles.title}>CSS</div>
							<div className={styles.description}>
								Web Development<br/>
								3 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={jsLogo}/></div>

							{/* Description */}
							<div className={styles.title}>JavaScript</div>
							<div className={styles.description}>
								Web Development<br/>
								3 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={sassLogo}/></div>

							{/* Description */}
							<div className={styles.title}>Sass</div>
							<div className={styles.description}>
								Front End<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={jqueryLogo}/></div>

							{/* Description */}
							<div className={styles.title}>jQuery</div>
							<div className={styles.description}>
								Front End<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={reactLogo}/></div>

							{/* Description */}
							<div className={styles.title}>ReactJS</div>
							<div className={styles.description}>
								Front End<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={nextLogo}/></div>

							{/* Description */}
							<div className={styles.title}>NextJS</div>
							<div className={styles.description}>
								Full Stack<br/>
								1 Year of Experience<br/>
							</div>
						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={nodeLogo}/></div>

							{/* Description */}
							<div className={styles.title}>NodeJS</div>
							<div className={styles.description}>
								Back End<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={expressLogo}/></div>

							{/* Description */}
							<div className={styles.title}>ExpressJS</div>
							<div className={styles.description}>
								Back End<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={mongodbLogo}/></div>

							{/* Description */}
							<div className={styles.title}>MongoDB</div>
							<div className={styles.description}>
								Database<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={elasticsearchLogo}/></div>

							{/* Description */}
							<div className={styles.title}>ElasticSearch</div>
							<div className={styles.description}>
								Database<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={handlebarsLogo}/></div>

							{/* Description */}
							<div className={styles.title}>Handlebars</div>
							<div className={styles.description}>
								Front End<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={chaiLogo}/></div>

							{/* Description */}
							<div className={styles.title}>ChaiJS</div>
							<div className={styles.description}>
								Unit Testing<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={lodashLogo}/></div>

							{/* Description */}
							<div className={styles.title}>Lodash</div>
							<div className={styles.description}>
								Utility<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={githubLogo}/></div>

							{/* Description */}
							<div className={styles.title}>GitHub</div>
							<div className={styles.description}>
								Version Control<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={figmaLogo}/></div>

							{/* Description */}
							<div className={styles.title}>Figma</div>
							<div className={styles.description}>
								UI &amp; Design<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={unityLogo}/></div>

							{/* Description */}
							<div className={styles.title}>Unity3D</div>
							<div className={styles.description}>
								Game Engine<br/>
								6 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={csharpLogo}/></div>

							{/* Description */}
							<div className={styles.title}>C#</div>
							<div className={styles.description}>
								Programming Language<br/>
								6 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={vbLogo}/></div>

							{/* Description */}
							<div className={styles.title}>VB.net</div>
							<div className={styles.description}>
								Programming Language<br/>
								3 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={pythonLogo}/></div>

							{/* Description */}
							<div className={styles.title}>Python</div>
							<div className={styles.description}>
								Programming Language<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={blenderLogo}/></div>

							{/* Description */}
							<div className={styles.title}>Blender</div>
							<div className={styles.description}>
								3D Modelling<br/>
								5 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={asepriteLogo}/></div>

							{/* Description */}
							<div className={styles.title}>Aseprite</div>
							<div className={styles.description}>
								UI &amp; Design<br/>
								2 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<div className={styles.image}><Image src={photoshopLogo}/></div>

							{/* Description */}
							<div className={styles.title}>Photoshop</div>
							<div className={styles.description}>
								UI &amp; Design<br/>
								2 Years of Experience<br/>
							</div>

						</div>

					</div>

					{/* Footer */}
					<div className={styles.footer}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
							<path fill="#221e41" opacity="1" d="M0,64L0,32L160,32L160,96L320,96L320,224L480,224L480,96L640,96L640,32L800,32L800,256L960,256L960,0L1120,0L1120,96L1280,96L1280,160L1440,160L1440,0L1280,0L1280,0L1120,0L1120,0L960,0L960,0L800,0L800,0L640,0L640,0L480,0L480,0L320,0L320,0L160,0L160,0L0,0L0,0Z"></path>
						</svg>
					</div>

				</div></Scene></Controller>



				{/* =================================================== Experience =================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={styles.experience}>

					{/* Anchor */}
					<a id="experience"/>

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
									&emsp; My first experience with programming was with Scratch. My then middle school teacher
									introduced me to it, and I instantly fell in love. Back then I was always curious about
									how the games I regularly played worked. Scratch was my gateway into the mystical world
									of Computer Programming, and I would often spend hours after school creating games as well
									as trying to replicate many of the games I often saw on the website.
								</p>
								<p>
									&emsp; Skip ahead a few months to when I first found the Unity game engine. Back then a game I used to
									often play had been shutdown (Fusion Fall), leading me to use my newly learnt skills to try my hand
									at recreating this very game in Unity, the same game engine in which it had been built with. 
									However back then I knew barely anything about the Unity game engine and the only learning I did was
									online and self taught and so I quickly became burnt out.
								</p>
								<p>
									&emsp; However not long after, I met a few people online that wanted to recreate the game but with
									Nickelodeon characters instead of the original Cartoon Network ones. I decided to apply for the job and
									joined the fan project, despite only having around a year of experience with Unity. At first I struggled
									since I was the only person working on the game itself, but with time I got used to it and actually
									enjoyed the challenge. Unfortunately after a year of work, the group disbanded and I was back to
									creating games solo.
								</p>
							</div>

						</div>
						<div className={styles.card}>

							{/* Label */}
							<div className={styles.label}><FontAwesomeIcon icon={['fas', 'mobile']}/></div>
							
							{/* Container */}
							<div className={styles.container}>
								<p>
									&emsp; I first started creating desktop applications a couple of years back when I decided
									to take a break from game development to work on something different. One of my first ever desktop 
									applications was a time management software where I planned on having the software try and track
									what type of application you were running and log the hours spent on that app. The plan was to give
									points based on how little you used a non-beneficial app and how often you did something productive. 
									However the project didn&apos;t go far and I stopped before I got anything meaningful done.
								</p>
								<p>
									&emsp; It wasn&apos;t until a year later when I started my GCSEs that I got back to working on desktop apps
									again. This time I had planned on making a utility software that would help me revise for my GCSEs. But 
									again this project didn&apos;t go far as it was too much to work and I had to focus on my GCSEs.
								</p>
								<p>
									&emsp; However in my final year, my chemistry teacher had asked me to organize some flash cards for her, 
									but I had other plans in mind. I asked her if I could instead create an app for her that people could use 
									to revise. She agreed and so I started to work on it. After a week of hard work, I had managed to create
									the application which I then shared with her and my classmates. You can see a few screenshots of the app
									<a style={{color: 'blue'}} href="/projects"> here</a>.
								</p>
							</div>

						</div>
						<div className={styles.card}>

							{/* Label */}
							<div className={styles.label}><FontAwesomeIcon icon={['fas', 'globe']}/></div>
							
							{/* Container */}
							<div className={styles.container}>
								<p>
									&emsp; I was first exposed to web development back in 9th grade as it was the subject I was studying at 
									the time. However we only did very basic work and I was honestly more attracted to game development, 
									so I quickly lost interest and forgot about the whole thing. It wasn&apos;t until I got a job as a Data Entry 
									Operator at Malvor that my interest in web development grew.
								</p>
								<p>
									&emsp; Whenever I was entering data into the system, I always noticed things that I felt could be done better 
									for a better user expereience. And so I decided I wanted to try creating a desktop application that could 
									do the same job but be more user-friendly and easier to use. During development, I would send my boss 
									updates on the app I was working on as well as suggesting some of the things I found that could be improved. 
									Eventually however, he decided it would be better to instead have me work on the actual website and so a week 
									later, I started interning as a Full Stack Developer, despite being very new to web development.
								</p>
							</div>

						</div>

					</Slideshow></div>

				</div></Scene></Controller>



				{/* ==================================================== Education =================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={styles.education}>

					{/* Anchor */}
					<a id="education"/>

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
							paginationColor		: 'black',
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
							<div className={styles.logo}><Image layout='fill' src={akisLogo}/></div>

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
							<div className={styles.logo}><Image layout='fill' src={quLogo}/></div>

							{/* Meta */}
							<div className={styles.meta}>August 2021 - Present</div>

							{/* Container */}
							<div className={styles.container}>

								{/* Description */}
								<p>
									Currently enrolled in the college of engineering at Qatar University.
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
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={styles.hobbies}>

					{/* Anchor */}
					<a id="hobbies"/>

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
								I enjoy coding in my spare time, often working on my side projects or starting new ones 
								whenever I get bored of my old projects.
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
								Favourite movie genres are Action, Horror, Thriller and Mystery. 
								I also watch k-dramas from time to time.
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
								I play casual volleyball often with my friends, usually playing 
								as the setter.
							</div>

						</div>

						{/* Watching */}
						<div className={styles.details}>

							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'gamepad']} />

							{/* Title */}
							<div className={styles.title}>VIDEO GAMES</div>

							{/* Underline */}
							<div className={styles.underline}></div>

							{/* Description */}
							<div className={styles.description}>
								Some games I play are League of Legends, Minecraft and Satisfactory.
							</div>

						</div>

					</div>

					{/* Divider */}
					<div className={styles.divider}></div>

				</div></Scene></Controller>



				{/* =================================================== Contact Me =================================================== */}
				<ContactMe/>



				{/* ===================================================== Footer ===================================================== */}
				<Footer/>
				


				{/* ================================================== Miscellaneous ================================================= */}

				{/* Navbar */}
				<Controller><Scene classToggle="active" triggerElement="#grid">
					<div className="navbar_container"><Navbar pathname="about"/></div>
				</Scene></Controller>

				{/* WIP Indicator */}
				<div className='wip1'>WORK IN PROGRESS</div>
				<div className='wip2'>WORK IN PROGRESS</div>

				{/* Toast Container */}
				<ToastContainer style={{zIndex: 3}}/>

			</div>

		</div>
	);

}

export default Home