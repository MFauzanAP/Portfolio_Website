/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                   Slideshow Class                                                  */
/* ------------------------------------------------------------------------------------------------------------------ */
class Slideshow extends React.Component {

	/* ==================================================== Variables =================================================== */

	/* Number of Images */
	count = 0;

	/* Current autoplay index */
	autoplay_index = 0;

	/* Bool used to reset countdown */
	reset_countdown = false;



	/* ===================================================== On Load ==================================================== */
	constructor (props) {
		super(props);

		//	Set state
		this.state = {
			page				: 0,
			loop				: props.options.loop || true,
			autoPlay			: props.options.autoPlay || true,
			autoPlayDelay			: props.options.autoPlayDelay || 5000,
			autoPlayIndicator		: props.options.autoPlayIndicator || true,
			autoPlayIndicatorPosition	: props.options.autoPlayIndicatorPosition || 'bottom'
		}
	}



	/* ==================================================== Functions =================================================== */

	/* Next Page */
	next_page () {

		//	Calculate page
		var page = this.state.page + 1 >= this.count ? (this.state.loop ? 0 : this.state.page) : this.state.page + 1;

		//	Reset countdown and update page
		this.reset_countdown = true;
		this.setState({page}, () => {

			//	Start countdown
			this.reset_countdown = false;
			this.setState({page});

		});

	}

	/* Previous Page */
	prev_page () {

		//	Calculate page
		var page = this.state.page - 1 < 0 ? (this.state.loop ? this.count - 1 : this.state.page) : this.state.page - 1;

		//	Reset countdown and update page
		this.reset_countdown = true;
		this.setState({page}, () => {

			//	Start countdown
			this.reset_countdown = false;
			this.setState({page});

		});

	}

	/* Change Page */
	change_page (page) {

		//	Reset countdown and update page
		this.reset_countdown = true;
		this.setState({page}, () => {

			//	Start countdown
			this.reset_countdown = false;
			this.setState({page});

		});

	}



	/* ==================================================== On Render =================================================== */
	render () {

		//	Store number of images
		this.count = this.props.options.images.length;

		//	Start autoplaying if the option is turned on
		if (this.state.autoPlay) {

			//	Clear all previous autplay functions
			clearInterval(this.autoplay_index); 

			//	Set new autoplay index so we can clear this function on render
			this.autoplay_index = setInterval(this.next_page.bind(this), this.state.autoPlayDelay);

		}

		//	Generate image elements
		var images = this.props.options.images;
		images = images.map((source, i) => { 

			//	Calculate offset
			var offset = (i - this.state.page) * 100;

			//	Create styles
			var style = {
				transform	: `translateX(${offset}%)`
			};

			//	Add element
			return <img key={i.toString()} style={style} src={source}/> 

		});

		//	Generate pagination
		var pagination = [];
		for (let i = 0; i < this.props.options.images.length; i++) {

			//	Generate class name
			var class_name = i == this.state.page ? 'active page' : 'page';
			
			//	Add element
			pagination.push(<div className={class_name} key={i.toString()} onClick={this.change_page.bind(this, i)}></div>);

		}

		//	Generate countdown if option is enabled and if not resetting countdown
		var countdown;
		if (this.state.autoPlayIndicator && !this.reset_countdown) {

			//	Generate class name
			var class_name = `${this.state.autoPlayIndicatorPosition} countdown`;

			//	Set countdown
			countdown = <div className={class_name} style={{animationDuration: `${this.state.autoPlayDelay}ms`}}></div>

		}

		//	Return html
		return (
			<div className="slideshow">

				{/* Slideshow */}
				{images}

				{/* Arrows */}
				<div className="left arrow" onClick={this.prev_page.bind(this)}><FontAwesomeIcon icon={['fas', 'chevron-left']}/></div>
				<div className="right arrow" onClick={this.next_page.bind(this)}><FontAwesomeIcon icon={['fas', 'chevron-right']}/></div>

				{/* Pagination */}
				<div className="pagination">{pagination}</div>

				{/* Countdown */}
				{countdown}

			</div>
		);

	}

}

export default Slideshow