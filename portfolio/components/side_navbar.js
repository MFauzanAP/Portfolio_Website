/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React from 'react';
import Link from 'next/link';





/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                  Side Navbar Class                                                 */
/* ------------------------------------------------------------------------------------------------------------------ */
class SideNavbar extends React.Component {

	/* ==================================================== Variables =================================================== */

	//	Variable to hold scroll progress of each section
	progresses = [];

	//	Variable to hold href
	href = '';



	/* ===================================================== On Load ==================================================== */
	constructor (props) {
		super(props);

		//	Set state
		this.state = {
			scrolled			: 0
		}

		//	Bind function
		this.UpdateScroll.bind(this);
	}



	/* ==================================================== On Mount ==================================================== */
	componentDidMount () {

		//	Add event listener for scroll event
		window.addEventListener('scroll', this.UpdateScroll.bind(this));

		//	Update scroll
		this.UpdateScroll();

	}



	/* =================================================== On Unmount =================================================== */
	componentWillUnmount () {

		//	Remove event listener for scroll event
		window.removeEventListener('scroll', this.UpdateScroll.bind(this));
		
	}



	/* ==================================================== Functions =================================================== */

	//	Function to update scroll
	UpdateScroll () {

		//	Update href
		this.href = window.location.pathname.replace('/', '').replace('\\', '');

		//	Calculate scroll position
		var scroll_pos = document.body.scrollTop + (window.innerHeight / 2);

		//	Calculate scroll position for each section
		this.progresses = this.props.options.sections.map(section => {

			//	Get element
			var element = document.querySelector(`.${section.class}`);

			//	If element is not found then skip
			if (!element) return;

			//	Get section start and end
			var start = element.getBoundingClientRect().top;
			var height = element.getBoundingClientRect().height;

			//	Return progress
			return Math.min(Math.max((scroll_pos - start) / height, 0), 1);

		});

		//	Set state
		this.setState({scrolled: scroll_pos});

	}

	/* ==================================================== On Render =================================================== */
	render () {

		//	Generate section links
		var links = this.props.options.sections.map((section, index) => {

			//	Get progress
			var progress = this.progresses[index];

			//	Calculate class
			var class_name = progress == 1 ? `pass` : (progress == 0 ? `` : `active`);

			//	Calculate style
			var style = {backgroundPosition: `0 ${100 - (progress * 100)}%`};

			//	Add link to list of links
			return (<Link key={index} href={`/${this.href}#${section.id}`}><a className={class_name} style={style}>

					<div className="text">{section.name}</div>

				</a></Link>);

		});

		//	Return html
		return (<div className="scrollbar">

				{/* Container */}
				<div className="container">{links}</div>
					
			</div>);

	}

}

export default SideNavbar