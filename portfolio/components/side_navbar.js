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

	//	Variable to store whether to show the progress bar
	active = false;

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

		//	Declare temporary variables
		var top = 0;
		var bot = 0;

		//	Reset active
		this.active = true;

		//	Update href
		this.href = window.location.pathname.replace('/', '').replace('\\', '');

		//	Calculate scroll position
		var scroll_pos = document.body.scrollTop + (window.innerHeight / 2);

		//	Calculate scroll position for each section
		this.progresses = this.props.options.sections.map((section, index) => {

			//	Get element
			var element = document.querySelector(`.${section.class}`);

			//	If element is not found then skip
			if (!element) return;

			//	Get section start and end
			var start = element.getBoundingClientRect().top;
			var height = element.getBoundingClientRect().height;

			//	Store top and bottom of sections
			if (index == 0) top = start;
			if (index == this.props.options.sections.length - 1) bot = start + height;

			//	Return progress
			return Math.min(Math.max((scroll_pos - start) / height, 0), 1);

		});

		//	If scroll position is out of bounds then hide navbar
		if (scroll_pos < top || scroll_pos > bot) this.active = false;

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
		return (<div className="scrollbar" style={{opacity: this.active ? '1' : '0', pointerEvents: this.active ? 'all' : 'none'}}>

				{/* Container */}
				<div className="container">{links}</div>
					
			</div>);

	}

}

export default SideNavbar