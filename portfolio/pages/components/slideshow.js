/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React, { createRef, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";





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
			pause				: true,
			loop				: props.options.loop || true,
			autoPlay			: props.options.autoPlay || true,
			autoPlayDelay			: props.options.autoPlayDelay || 5000,
			autoPlayIndicator		: props.options.autoPlayIndicator || true,
			autoPlayIndicatorPosition	: props.options.autoPlayIndicatorPosition || 'bottom'
		}

		//	Store number of images
		this.count = this.props.options.images.length;

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

		//	Check if same page
		if (page == this.state.page) {

			//	If unpaused
			if (this.state.autoPlay) {

				//	Pause the slideshow
				this.state.autoPlay = false;

				//	Change icon
				document.getElementById('pagination').classList.add('pause');
				

			}
			else {

				//	Unpause the slideshow
				this.state.autoPlay = true;

				//	Change icon r

			}

		}

		//	Reset countdown and update page
		this.reset_countdown = true;
		this.setState({page}, () => {

			//	Start countdown
			this.reset_countdown = false;
			this.setState({page});

		});

	}



	/* ==================================================== On Update =================================================== */
	componentDidUpdate(prevProps, prevState) {

		//	If autoplaying and update is not from change of page
		if (this.state.autoPlay) {

			//	If element is visible on screen
			if ((this.props.event.type == 'start' || this.props.event.type == 'end') && this.state.pause) {

				//	Clear all previous autoplay functions
				clearInterval(this.autoplay_index); 

				//	Set new autoplay index so we can clear this function on render
				this.autoplay_index = setInterval(this.next_page.bind(this), this.state.autoPlayDelay);

				//	Unpause
				this.setState({pause: false});

			}

			//	If not visible
			if (this.props.event.type == 'leave' && !this.state.pause) {

				//	Clear all previous autoplay functions
				clearInterval(this.autoplay_index);

				//	Pause
				this.setState({pause: true});

			}

			//	If updating page and not paused
			if (this.reset_countdown && !this.state.pause) {

				//	Clear all previous autoplay functions
				clearInterval(this.autoplay_index); 

				//	Set new autoplay index so we can clear this function on render
				this.autoplay_index = setInterval(this.next_page.bind(this), this.state.autoPlayDelay);
				
			}

		}
		else {

			//	Clear all previous autoplay functions
			clearInterval(this.autoplay_index);

		}

	}



	/* ==================================================== On Render =================================================== */
	render () {

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

			//	Generate icon
			var icon = this.state.autoPlay ? <FontAwesomeIcon icon={['fas', 'pause']}/> : <FontAwesomeIcon icon={['fas', 'play']}/>;
			
			//	Add element
			pagination.push(
				<div className={class_name} key={i.toString()} onClick={this.change_page.bind(this, i)}>{icon}</div>
			);

		}

		//	Generate countdown if option is enabled and if not resetting countdown
		var countdown;
		if (this.state.autoPlayIndicator && !this.reset_countdown && this.state.autoPlay) {

			//	Generate class name
			var class_name = `${this.state.autoPlayIndicatorPosition} countdown`;

			//	Set countdown
			countdown = <div className={class_name} style={{animationDuration: `${this.state.autoPlayDelay}ms`}}></div>

		}

		//	Return html
		return (
			<Controller><Scene duration={500} classToggle="active"><div className="slideshow">

				{/* Slideshow */}
				{images}

				{/* Arrows */}
				<div className="left arrow" onClick={this.prev_page.bind(this)}><FontAwesomeIcon icon={['fas', 'chevron-left']}/></div>
				<div className="right arrow" onClick={this.next_page.bind(this)}><FontAwesomeIcon icon={['fas', 'chevron-right']}/></div>

				{/* Pagination */}
				<div className="pagination" id="pagination">{pagination}</div>

				{/* Countdown */}
				{countdown}

			</div></Scene></Controller>
		);

	}

}

export default Slideshow