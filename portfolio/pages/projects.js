import styles from '@/styles/Projects.module.scss'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";
import { ToastContainer } from 'react-nextjs-toast';
import sanitizeHTML from 'sanitize-html';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTop from '@/components/scroll_to_top';

//	Declare output function
export default function Projects () {

	/* ==================================================== Variables =================================================== */

	//	Get reference to router and router params
	const router = useRouter();
	const { query } = router.query;

	//	Page variables
	const [projects, setProjects] = useState(0);
	var [page, setPage] = useState(1);
	var [filters, setFilters] = useState({categories: [], status: [], featured: []});

	//	Store whether or not dropdown is open
	var is_dropdown_open = false;



	/* =================================================== Use Effect =================================================== */
	React.useEffect(async () => {

		// 	Import lottie
		import("@lottiefiles/lottie-player");

		//	Re enable scrolling
		document.querySelector('body').classList.remove('fixed');

		//	Hide navigation menu
		document.querySelector('.navigation').classList.remove('active');

		//	Update search value
		document.querySelector('#search').value = query || '';
		await UpdateSearch();

		//	Ensure search input matches query
		if (document.querySelector('#search').value != query) document.querySelector('#search').value = query || '';

		//	Try and get the clear search button
		var clear = document.querySelector(`.${styles.search_clear}`);

		//	Update clear search button
		if (clear) query ? clear.classList.add(styles.active) : clear.classList.remove(styles.active);

	}, [router.isReady]);



	/* ==================================================== Functions =================================================== */

	//	Retrieve projects from the database
	async function get_projects (options = {}) {

		//	Try calling api route
		try {

			//	Add page to options
			options.page = page;

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

				//	Declare category html
				var category_html = {
					'Game Development'	: (<div className={styles.tag}><i className="fa fa-gamepad"></i></div>),
					'App Development'	: (<div className={styles.tag}><i className="fa fa-desktop"></i></div>),
					'Web Development'	: (<div className={styles.tag}><i className="fa fa-globe"></i></div>),
					'3D Modelling'		: (<div className={styles.tag}><i className="fa fa-cube"></i></div>),
				}

				//	Generate class names
				var featured = project.featured ? styles.featured : '';
				var category = category_html[project.category];

				//	Return html
				projects.push(
					<div className={styles.card} key={index}>
						<div className={styles.background}><img src={project.images[0]}/></div>
						<div className={featured}><i className="fa fa-star"></i></div>
						{category}
						<div className={styles.title}>{project.name}</div>
						<div className={styles.description}>{project.description.short}</div>
						<Link href={`/projects/${project.name.replaceAll(' ', '_')}`}><a className={styles.call_to_action}>LEARN MORE</a></Link>
					</div>);

			})

			//	If there are no projects then tell the user there are no projects
			if (!projects.length) {
				projects = (
				<div className={styles.loader}>
					<FontAwesomeIcon icon={['fas', 'exclamation-circle']} style={{fontSize: '5em'}}/>
					<h1>404 Not Found</h1>
					<p style={{fontWeight: 400, letterSpacing: 0, margin: 0}}>Unfortunately, there are no projects that match this filter. Please try again.</p>
				</div>);
			}

			//	Else if there are projects then add pagination
			else {

				//	Calculate number of pages to show
				var num_pages = Math.ceil(results.length / 9);

				//	Declare variable to hold page html
				var pages = [];

				//	For loop to generate pages
				for (let i = 0; i < num_pages; i++) {
					
					//	Add this page to pages list
					pages.push(<div className={`${styles.page} ${i + 1 == page ? styles.active : ''}`} onClick={(e) => {ChangePage(i + 1)}} key={i}></div>);
					
				}

				//	Add html
				projects.push(
					<div className={styles.pagination} key={'pagination'}>{pages}</div>
				);

			}

			//	Return projects html
			return { length: results.length, data: projects };

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

	//	Change page
	async function ChangePage (new_page) {

		//	Change page
		page = new_page;
		setPage(page);

		//	Add page to url
		router.push({pathname: router.pathname, page: page});

		//	Add loading indicator for projects
		setProjects({length: 0, data: (
			<div className={styles.loader}>
				<i className="fa fa-spinner fa-spin"></i>
				<p>Loading Projects, Hold On...</p>
			</div>
		)})

		//	Load projects
		setProjects(await get_projects());

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
			setProjects({length: 0, data: (
				<div className={styles.loader}>
					<i className="fa fa-spinner fa-spin"></i>
					<p>Loading Projects, Hold On...</p>
				</div>
			)})

			//	Load projects
			setProjects(await get_projects(filters));

		}

		//	If not selected
		else {

			//	Select item
			item.classList.add(styles.active);

			//	Add to filters list
			filters[type].push(filter);
			setFilters(filters);

			//	Add loading indicator for projects
			setProjects({length: 0, data: (
				<div className={styles.loader}>
					<i className="fa fa-spinner fa-spin"></i>
					<p>Loading Projects, Hold On...</p>
				</div>
			)})

			//	Load projects
			setProjects(await get_projects(filters));

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
		setProjects({length: 0, data: (
			<div className={styles.loader}>
				<i className="fa fa-spinner fa-spin"></i>
				<p>Loading Projects, Hold On...</p>
			</div>
		)})

		//	Call api request to fetch projects
		setProjects(await get_projects(filters));

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

					{/* Disclaimer */}
					<div className={styles.disclaimer}>
						This list does not represent all my projects. Some have no documentation or are lost.
					</div>

					{/* Toolbar */}
					<div className={styles.toolbar}>

						{/* Search Results */}
						<div className={styles.search_results}>{projects.length || 0} Projects Found</div>

						{/* Search Tools */}
						<div className={styles.search_tools}>

							{/* Search Bar */}
							<div className={styles.search_bar}>
								<input type="text" id="search" name="search" onInput={UpdateSearch} required/>
								<label htmlFor="search">Search Projects</label>
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
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'Web Development', 'categories')}>Web Development</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'Game Development', 'categories')}>Game Development</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'App Development', 'categories')}>App Development</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, '3D Modelling', 'categories')}>3D Modelling</div>

									{/* Status */}
									<div className={styles.section}><FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'clock']}/>Status</div>

									{/* Items */}
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'Complete', 'status')}>Complete</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'In Progress', 'status')}>In Progress</div>
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'Incomplete', 'status')}>Incomplete</div>

									{/* Featured */}
									<div className={styles.section}><FontAwesomeIcon style={{marginRight: '10px'}} icon={['fas', 'star']}/>Featured</div>

									{/* Items */}
									<div className={styles.item} onClick={ToggleFilter.bind(this, 'Featured', 'featured')}>Featured</div>

								</div>
								
							</div>

						</div>

					</div>

					{/* Background End */}
					<div id="background_end"></div>

					{/* Grid */}
					<div className={styles.grid}>{projects.data}</div>

				</div></Scene></Controller>



				{/* ===================================================== Footer ===================================================== */}
				<Footer/>
				


				{/* ================================================== Miscellaneous ================================================= */}

				{/* Scroll to Top */}
				<ScrollToTop options={{trigger: '#background_end'}}/>

				{/* WIP Indicator */}
				<div className='wip1'>WORK IN PROGRESS</div>
				<div className='wip2'>WORK IN PROGRESS</div>

				{/* Navbar */}
				<Controller><Scene classToggle="active" triggerElement="#background_end">
					<div className="navbar_container"><Navbar pathname="projects"/></div>
				</Scene></Controller>

				{/* Toast Container */}
				<ToastContainer style={{zIndex: 5}}/>

			</div>

		</div>
	);

}