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

	}



	/* =================================================== On Unmount =================================================== */
	componentWillUnmount () {

		//	Remove event listener for scroll event
		window.removeEventListener('scroll', this.UpdateScroll.bind(this));
		
	}



	/* ==================================================== Functions =================================================== */

	//	Function to update scroll
	UpdateScroll () {

		//	Calculate scroll position
		var scroll_pos = document.body.scrollTop + (window.innerHeight / 2);

		//	Calculate scroll position for each section
		this.progresses = this.props.options.sections.map(section => {

			//	Get section start and end
			var start = document.getElementsByClassName(section.class)[0].getBoundingClientRect().top;
			var height = document.getElementsByClassName(section.class)[0].getBoundingClientRect().height;

			//	Return progress
			return Math.min(Math.max((scroll_pos - start) / height, 0), 1);

		});

		//	Set state
		this.setState({scrolled: scroll_pos});

	}

	/* ==================================================== On Render =================================================== */
	render () {

		console.log(this.progresses);

		//	Generate section links
		var links = this.props.options.sections.map((section, index) => {

			//	Get progress
			var progress = this.progresses[index];

			//	Calculate class
			var class_name = progress == 1 ? `pass` : (progress == 0 ? `` : `active`);

			//	Calculate style
			var style = {backgroundPosition: `0 ${100 - (progress * 100)}%`};

			//	Add link to list of links
			return (<Link key={index} href={`/#${section.id}`}><a className={class_name} style={style}>

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