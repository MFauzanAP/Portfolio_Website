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
							<p>Bachelor's Degree in Engineering @ Qatar University
							High School Diploma @ Al Khor International School.</p>

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

						{/* Age */}
						<div className={styles.details}>
							
							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'calendar-alt']}/>
							
							{/* Title */}
							<h3>Age</h3>

							{/* Description */}
							<p>
								Born on the 4th of May 2004 (04/05/2004) in Jakarta, Indonesia.
							</p>

						</div>
						
						{/* Hobbies */}
						<div className={styles.details}>

							{/* Icon */}
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'volleyball-ball']}/>
							
							{/* Title */}
							<h3>Hobbies</h3>

							{/* Description */}
							<p>Coding<br/>
							Watching Movies/Dramas<br/>
							Volleyball<br/>
							Video Games</p>

						</div>

					</div>

				</div>



				{/* =================================================== Tech Stack =================================================== */}
				<div className={styles.tech_stack}>

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
							<img src="html_logo.png"/>

							{/* Description */}
							<div className={styles.title}>HTML</div>
							<div className={styles.description}>
								Web Development<br/>
								3 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="css_logo.png"/>

							{/* Description */}
							<div className={styles.title}>CSS</div>
							<div className={styles.description}>
								Web Development<br/>
								3 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="js_logo.png"/>

							{/* Description */}
							<div className={styles.title}>JavaScript</div>
							<div className={styles.description}>
								Web Development<br/>
								3 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="sass_logo.png"/>

							{/* Description */}
							<div className={styles.title}>Sass</div>
							<div className={styles.description}>
								Front End<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="jquery_logo.png"/>

							{/* Description */}
							<div className={styles.title}>jQuery</div>
							<div className={styles.description}>
								Front End<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="react_logo.png"/>

							{/* Description */}
							<div className={styles.title}>ReactJS</div>
							<div className={styles.description}>
								Front End<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="next_logo.png"/>

							{/* Description */}
							<div className={styles.title}>NextJS</div>
							<div className={styles.description}>
								Full Stack<br/>
								1 Year of Experience<br/>
							</div>
						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="node_logo.png"/>

							{/* Description */}
							<div className={styles.title}>NodeJS</div>
							<div className={styles.description}>
								Back End<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="express_logo.png"/>

							{/* Description */}
							<div className={styles.title}>ExpressJS</div>
							<div className={styles.description}>
								Back End<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="mongodb_logo.png"/>

							{/* Description */}
							<div className={styles.title}>MongoDB</div>
							<div className={styles.description}>
								Database<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="elasticsearch_logo.png"/>

							{/* Description */}
							<div className={styles.title}>ElasticSearch</div>
							<div className={styles.description}>
								Database<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="handlebars_logo.png"/>

							{/* Description */}
							<div className={styles.title}>Handlebars</div>
							<div className={styles.description}>
								Front End<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="chai_logo.png"/>

							{/* Description */}
							<div className={styles.title}>ChaiJS</div>
							<div className={styles.description}>
								Unit Testing<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="lodash_logo.png"/>

							{/* Description */}
							<div className={styles.title}>Lodash</div>
							<div className={styles.description}>
								Utility<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="github_logo.png"/>

							{/* Description */}
							<div className={styles.title}>GitHub</div>
							<div className={styles.description}>
								Version Control<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="figma_logo.png"/>

							{/* Description */}
							<div className={styles.title}>Figma</div>
							<div className={styles.description}>
								UI &amp; Design<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="unity_logo.png"/>

							{/* Description */}
							<div className={styles.title}>Unity3D</div>
							<div className={styles.description}>
								Game Engine<br/>
								6 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="csharp_logo.png"/>

							{/* Description */}
							<div className={styles.title}>C#</div>
							<div className={styles.description}>
								Programming Language<br/>
								6 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="vb_logo.png"/>

							{/* Description */}
							<div className={styles.title}>VB.net</div>
							<div className={styles.description}>
								Programming Language<br/>
								3 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="python_logo.png"/>

							{/* Description */}
							<div className={styles.title}>Python</div>
							<div className={styles.description}>
								Programming Language<br/>
								1 Year of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="blender_logo.png"/>

							{/* Description */}
							<div className={styles.title}>Blender</div>
							<div className={styles.description}>
								3D Modelling<br/>
								5 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="aseprite_logo.png"/>

							{/* Description */}
							<div className={styles.title}>Aseprite</div>
							<div className={styles.description}>
								UI &amp; Design<br/>
								2 Years of Experience<br/>
							</div>

						</div>
						<div className={styles.details}>

							{/* Icon */}
							<img src="photoshop_logo.png"/>

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

				</div>



				{/* =================================================== Experience =================================================== */}
				<div className={styles.experience}>

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
									However the project didn't go far and I stopped before I got anything meaningful done.
								</p>
								<p>
									&emsp; It wasn't until a year later when I started my GCSEs that I got back to working on desktop apps
									again. This time I had planned on making a utility software that would help me revise for my GCSEs. But 
									again this project didn't go far as it was too much to work and I had to focus on my GCSEs.
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
									so I quickly lost interest and forgot about the whole thing. It wasn't until I got a job as a Data Entry 
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

				</div>



				{/* ==================================================== Education =================================================== */}
				<div className={styles.education}>

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
							<div className={styles.logo}><img src='/akis_logo.svg'/></div>

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

						</div>
						<div className={styles.card}>

							{/* Logo */}
							<div className={styles.logo}><img src='/qu_logo.svg'/></div>

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
							<a target="_blank" href="https://www.qu.edu.qa/" className={styles.call_to_action}>
								<FontAwesomeIcon icon={['fas', 'external-link-alt']} style={{marginRight: '10px'}}/>
								View Website
							</a>

						</div>

					</Slideshow></div>

				</div>



				{/* ===================================================== Hobbies ==================================================== */}
				<div className={styles.hobbies}>

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
								as setter.
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
								Games I play are League of Legends, Minecraft and Satisfactory.
							</div>

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