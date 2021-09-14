import styles from '@/styles/Projects.module.scss'
import React, { useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SideNavbar from '@/components/side_navbar';
import Slideshow from "@/components/slideshow";
import { toast } from 'react-nextjs-toast';

//	Declare output function
export default function Projects () {

	/* ==================================================== Variables =================================================== */

	//	Get reference to router and router params
	const router = useRouter();
	var { project, left, right } = router.query;

	//	Projects data
	const [project_data, setProjectData] = useState(0);



	/* =================================================== Use Effect =================================================== */
	React.useEffect(async () => {

		// 	Import lottie
		import("@lottiefiles/lottie-player");

		//	Re enable scrolling
		document.querySelector('body').classList.remove('fixed');

		//	Hide navigation menu
		document.querySelector('.navigation').classList.remove('active');

		//	Get reference to router and router params
		project = router.query.project;

		//	Check if fully loaded
		if (project) {

			//	Get project data
			var data = await get_project();

			//	Generate category details
			var category_icons = {
				'Game Development'	: `<i class="fa fa-gamepad ${styles.icon}"></i>`,
				'App Development'	: `<i class="fa fa-desktop ${styles.icon}"></i>`,
				'Web Development'	: `<i class="fa fa-globe ${styles.icon}"></i>`,
				'3D Modelling'		: `<i class="fa fa-cube ${styles.icon}"></i>`,
			}
			data.data.category = category_icons[data.data.category] + (data.data.category || '');

			//	Generate tech stack list
			data.data.tech_stack = data.data.tech_stack.map((elem, index) => {

				//	Return html
				return (
					<li key={index}>{elem}</li>
				)

			})

			//	If there are links
			if (data.data.links.length) { 

				//	Generate links
				data.data.links = data.data.links.map((link, index) => {return <li><a key={index} target="_blank" rel="noreferrer" href={link.url}>{link.text}</a></li>}) 

			}
			else { 
				
				//	Set default text if there are no links
				data.data.links = <div className={styles.text}>This project has no links.</div>;

			}

			//	Escape spaces from project names
			data.left = data.left.replaceAll(' ', '_');
			data.right = data.right.replaceAll(' ', '_');

			//	Set project data
			setProjectData(data);

		}

	}, [router.isReady, router.asPath]);



	/* ==================================================== Functions =================================================== */

	//	Retrieve project data from the database
	async function get_project () {

		//	Try calling api route
		try {

			//	Call api
			var results = await fetch('/api/project/get_project', {
				method		: 'POST',
				headers		: { 'Content-Type': 'application/json' },
				body		: JSON.stringify({ name: project.replaceAll('_', ' ') })
			})

			//	Extract response
			results = await results.json();

			//	Return project data
			return results;

		} catch (e) {

			//	Print error
			console.log(e);

		}

	}

	

	/* ================================================ Output Final HTML =============================================== */
	return (
		<div className={styles.container}>

			{/* Head */}
			<Head>

				{/* Details */}
				<title>Projects | Muhammad Fauzan Aristya Putra</title>
				<meta name="description" content="Muhammad Fauzan Aristya Putra's Portfolio" />
				<link rel="icon" href="/favicon.ico" />

				{/* Font Awesome */}
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

			</Head>

			{/* Homepage */}
			<div className={styles.projects}>

				{/* Banner */}
				<div className={styles.banner}></div>

				{/* ================================================= Project Details ================================================ */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={styles.project_details}>

					{/* Anchor */}
					<a className="anchor" id="project_list"/>

					{/* Background */}
					<div className={styles.background}></div>

					{/* Breadcrumbs */}
					<div className={styles.breadcrumbs}>

						{/* Project Home */}
						<div className={styles.link}><Link href="/projects"><a>Projects</a></Link></div>

						{/* Chevron */}
						<div className={styles.divider}><FontAwesomeIcon icon={['fas', 'chevron-right']}/></div>

						{/* Project Name */}
						<div className={`${styles.link} ${styles.active}`}><Link href="/projects"><a>{project_data.data ? project_data.data.name : ''}</a></Link></div>

					</div>

					{/* Header */}
					<div className={styles.header}>{project_data.data ? project_data.data.name : ''}</div>

					{/* Meta */}
					<div className={styles.meta}>{project_data.data ? project_data.data.description.short : ''}</div>

					{/* Background End */}
					<div id="background_end"></div>

					{/* Slideshow */}
					<div className={styles.slideshow} id="slideshow"><Controller><Scene duration={500} triggerElement="#slideshow">{(progress, event) => (
						<Slideshow id={event} event={event} options={{
							images: project_data.data ? project_data.data.images : []
						}}/>
					)}</Scene></Controller></div>

					{/* Details */}
					<div className={styles.details}>

						{/* Title */}
						<div className={styles.title}>DETAILS</div>

						{/* Date */}
						<div style={{marginBottom: '10px'}}>
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'calendar-alt']}></FontAwesomeIcon>
							{project_data.data ? project_data.data.date.toString().split('T')[0] : ''}
						</div>

						{/* Company */}
						<div style={{marginBottom: '10px'}}>
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'building']}></FontAwesomeIcon>
							{project_data.data ? project_data.data.company : ''}
						</div>

						{/* Status */}
						<div style={{marginBottom: '10px'}}>
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'clock']}></FontAwesomeIcon>
							{project_data.data ? project_data.data.status : ''}
						</div>

						{/* Category */}
						<div dangerouslySetInnerHTML={{__html: project_data.data ? project_data.data.category : ''}}></div>

					</div>

					{/* Description */}
					<div className={styles.description}>

						{/* Title */}
						<div className={styles.title}>DESCRIPTION</div>

						{/* Text */}
						<div className={styles.text} dangerouslySetInnerHTML={{__html: project_data.data ? (project_data.data.description.long || 'This project has no description') : ''}}></div>

					</div>

					{/* Tech Stack */}
					<div className={styles.tech_stack}>

						{/* Title */}
						<div className={styles.title}>TECH STACK</div>

						{/* Text */}
						<div className={styles.text}>These are the technologies I used in this project</div>

						{/* List */}
						<ul className={styles.list}>{project_data.data ? project_data.data.tech_stack : ''}</ul>

					</div>

					{/* Links */}
					<div className={styles.links}>

						{/* Title */}
						<div className={styles.title}>LINKS</div>

						{/* Text */}
						<div className={styles.text}>Here are some extra resourced related to this project</div>

						{/* List */}
						<ul className={styles.list}>{project_data.data ? project_data.data.links : ''}</ul>

					</div>

				</div></Scene></Controller>



				{/* ===================================================== Footer ===================================================== */}
				<Footer/>
				


				{/* ================================================== Miscellaneous ================================================= */}

				{/* WIP Indicator */}
				<div className='wip1'>WORK IN PROGRESS</div>
				<div className='wip2'>WORK IN PROGRESS</div>

				{/* Trigger */}
				<div className={styles.trigger} id="trigger"></div>

				{/* Project Navigation */}
				<Controller><Scene classToggle={styles.active} triggerElement="#trigger"><div className={styles.project_navigation}>

					{/* Left Arrow */}
					<Link href={`/projects/${project_data.left || project}`}><a style={{opacity: project_data.left ? 1 : 0, pointerEvents: project_data.left ? 'all' : 'none'}} className={styles.arrow}><FontAwesomeIcon icon={['fas', 'chevron-left']}/></a></Link>

					{/* Right Arrow */}
					<Link href={`/projects/${project_data.right || project}`}><a style={{opacity: project_data.right ? 1 : 0, pointerEvents: project_data.right ? 'all' : 'none'}} className={styles.arrow}><FontAwesomeIcon icon={['fas', 'chevron-right']}/></a></Link>

				</div></Scene></Controller>

				{/* Navbar Background */}
				<div className={styles.navbar_background}>
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".5" className={styles.shape_fill}></path>
						<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".75" className={styles.shape_fill}></path>
						<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shape_fill}></path>
					</svg>
				</div>

				{/* Navbar */}
				<Controller><Scene classToggle="active" triggerElement="#background_end">
					<div className="navbar_container"><Navbar pathname="projects"/></div>
				</Scene></Controller>

				{/* Scrollbar */}
				<SideNavbar options={{
					sections	: [
						{
							id		: 'project_list',
							class		: styles.project_list,
							name		: 'Project Showcase',
						}
					]
				}}/>

			</div>

		</div>
	);

}