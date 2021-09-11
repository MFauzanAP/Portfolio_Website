import styles from '../styles/Projects.module.scss'
import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SideNavbar from '../components/side_navbar';
import Accordion from "../components/accordion";
import { toast } from 'react-nextjs-toast';

//	Declare output function
export default function Projects () {

	/* ==================================================== Variables =================================================== */

	//	Projects data
	const [projects, setProjects] = useState(0);



	/* =================================================== Use Effect =================================================== */
	React.useEffect(async () => {

		// 	Import lottie
		import("@lottiefiles/lottie-player");

		//	Re enable scrolling
		document.querySelector('body').classList.remove('fixed');

		//	Hide navigation menu
		document.querySelector('.navigation').classList.remove('active');

		//	Load projects
		setProjects(await get_projects());

	}, []);



	/* ==================================================== Functions =================================================== */

	//	Retrieve projects from the database
	async function get_projects () {

		//	Try calling api route
		try {

			//	Call api
			var results = await fetch('/api/project/get_projects', {
				method		: 'GET',
				headers		: { 'Content-Type': 'application/json' }
			})

			//	Extract response
			results = await results.json();

			//	For each project
			var projects = results.map(project => {

				//	Return html
				return `<div class=${styles.card}>
						<div class=${styles.background}><img src=${project.images[0]}/></div>
						<div class=${styles.title}>${project.name}</div>
						<div class=${styles.description}>${project.description.short}</div>
						<div class=${styles.call_to_action}>LEARN MORE</div>
					</div>`;

			})

			//	Concatenate projects into one string
			projects = projects.join('');

			//	Return projects html
			return projects;

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

			</Head>

			{/* Homepage */}
			<div className={styles.projects}>

				{/* Navbar Background */}
				<div className={styles.navbar_background}>
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".5" className={styles.shape_fill}></path>
						<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".75" className={styles.shape_fill}></path>
						<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shape_fill}></path>
					</svg>
				</div>

				{/* ================================================== Project List ================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={styles.project_list}>

					{/* Anchor */}
					<a className="anchor" id="project_list"/>

					{/* Header */}
					<div className={styles.header}>PROJECT SHOWCASE</div>

					{/* Meta */}
					<div className={styles.meta}>
						First year undergraduate student at Qatar University, skilled in full stack 
						web development and game design.
					</div>

					{/* Toolbar */}
					<div className={styles.toolbar}>

						{/* Search Results */}
						<div className={styles.search_results}>100 Projects Found</div>

						{/* Search Tools */}
						<div className={styles.search_tools}>

							{/* Search Bar */}
							<div className={styles.search_bar}>
								<input type="text" id="search" name="search" required/>
								<label htmlFor="search">Search Projects</label>
							</div>

							{/* Sort By Dropdown */}
							<div className={styles.dropdown}></div>

							{/* Filter By Dropdown */}
							<div className={styles.dropdown}></div>

						</div>

					</div>

					{/* Grid */}
					<div className={styles.grid} dangerouslySetInnerHTML={{__html: projects}}>

					</div>

					{/* Background End */}
					<div id="background_end"></div>

				</div></Scene></Controller>



				{/* ===================================================== Footer ===================================================== */}
				<Footer/>
				


				{/* ================================================== Miscellaneous ================================================= */}

				{/* WIP Indicator */}
				<div className='wip1'>WORK IN PROGRESS</div>
				<div className='wip2'>WORK IN PROGRESS</div>

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