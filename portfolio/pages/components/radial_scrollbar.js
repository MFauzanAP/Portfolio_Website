/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React, { createRef, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





/* ------------------------------------------------------------------------------------------------------------------ */
/*                                               Radial Scrollbar Class                                               */
/* ------------------------------------------------------------------------------------------------------------------ */
class RadialScrollbar extends React.Component {

	/* ==================================================== Variables =================================================== */

	/* Pi */
	pi = 3.1419;

	/* Number of Images */
	count = 0;

	/* Circumference (Calculated) */
	circumference = 0;



	/* ===================================================== On Load ==================================================== */
	constructor (props) {
		super(props);

		//	Set state
		this.state = {
			section				: 0,
			radius				: props.options.radius || 75,
			spacing				: props.options.spacing || 50,
			marker_radius			: props.options.marker_radius || 5,
			border_thickness		: props.options.border_thickness || 2,
		}

		//	Store number of images
		this.count = this.props.options.sections.length;

		//	Bind methods
		this.generate_sections.bind(this);

	}



	/* ==================================================== Functions =================================================== */

	/* Generate sections */
	generate_sections () {

		//	Calculate circumference
		this.circumference = 2 * this.pi * this.state.radius;

		//	Declare variable to hold section position
		var pos = -this.state.spacing;
		
		//	Loop through each section
		var sections = this.props.options.sections.map((text, i) => { 

			//	Calculate position on circumference
			pos = pos + this.state.spacing + this.state.marker_radius;

			//	Calculate the coordinate
			var coord = this.circumference_to_coord(pos);

			//	Create styles
			var style = {
				width		: `${(this.state.marker_radius * 2) + this.state.border_thickness}px`,
				height		: `${(this.state.marker_radius * 2) + this.state.border_thickness}px`,
				top		: `calc(50% - ${this.state.marker_radius * 2}px)`,
				left		: `calc(50% - ${this.state.marker_radius * 2}px)`,

				transform	: `translate(${coord.x}px, ${coord.y}px)`,
			};

			//	Add element
			return (
				<div className="section" key={i.toString()} style={style}>
					<div className="container">
						<div className="text">{text}</div>
					</div>
				</div> 
			);

		});

		//	Return sections
		return sections;

	}

	/* Convert length on circumference to coordinate */
	circumference_to_coord (pos) {

		//	Calculate angle
		var angle = (pos / this.circumference) * 2 * this.pi;

		//	Calculate coords
		var x = Math.cos(angle) * this.state.radius;
		var y = Math.sin(angle) * this.state.radius;
		x += this.state.border_thickness;
		y += this.state.border_thickness;

		//	Return coords
		return {x, y};

	}
	


	/* ===================================================== On Add ===================================================== */
	componentDidMount () {

		//

	}


	/* ==================================================== On Update =================================================== */
	componentDidUpdate (prevProps, prevState) {

		//

	}



	/* ==================================================== On Render =================================================== */
	render () {

		//	Generate sections
		var sections = this.generate_sections();

		//	Generate circle styling
		var style = {
			width		: `${this.state.radius * 2}px`,
			height		: `${this.state.radius * 2}px`,
			top		: `calc(50% - ${this.state.radius}px)`,
			left		: `-${this.state.radius}px`,
		};

		//	Return html
		return (
			<div className="radial_scrollbar" style={style}>

				{/* Container */}
				<div className="container">

					{/* Secondary Color */}
					<div className="secondary"></div>

					{/* Sections */}
					{sections}

				</div>

			</div>
		);

	}

}

export default RadialScrollbar