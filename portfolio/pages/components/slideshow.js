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
	is_reset_countdown = false;

	/* Bool used to stop infinite loops when updating countdown */
	updating = false;



	/* ===================================================== On Load ==================================================== */
	constructor (props) {
		super(props);

		//	Set state
		this.state = {
			page				: 0,
			pause				: false,
			visible				: false,
			loop				: props.options ? (props.options.loop !== undefined ? props.options.loop : true) : true,
			autoPlay			: props.options ? (props.options.autoPlay !== undefined ? props.options.autoPlay : true) : true,
			autoPlayDelay			: props.options ? (props.options.autoPlayDelay || 5000) : 5000,
			autoPlayIndicator		: props.options ? (props.options.autoPlayIndicator !== undefined ? props.options.autoPlayIndicator : true) : true,
			invertArrows			: props.options ? (props.options.invertArrows !== undefined ? props.options.invertArrows : false) : false,
			itemScale			: props.options ? (props.options.itemScale || 1) : 1,
			itemOpacity			: props.options ? (props.options.itemOpacity || 1) : 1,
			maxWidth			: props.options ? (props.options.maxWidth || '') : '',
			maxHeight			: props.options ? (props.options.maxHeight || '') : '',
			padding				: props.options ? (props.options.padding || 0) : 0,
			autoPlayIndicatorPosition	: props.options ? (props.options.autoPlayIndicatorPosition || 'bottom') : 'bottom'
		}

		//	Store number of images
		var image_count = (props.options && props.options.images) ? props.options.images.length : 0;
		var child_count = props.children ? (props.children.length ? props.children.length : 1) : 0;
		this.count = image_count + child_count;

	}



	/* ==================================================== Functions =================================================== */

	/* Reset Countdown */
	reset_countdown (page) {

		//	Updating
		this.updating = true;

		//	Reset countdown and update page
		this.is_reset_countdown = true;
		this.setState({page}, () => {

			//	Start countdown
			this.is_reset_countdown = false;
			this.setState({page}, () => {

				//	Finished updating
				this.updating = false;

			});

		});

	}

	/* Next Page */
	next_page (callback) {

		//	Calculate page
		var page = this.state.page + 1 >= this.count ? (this.state.loop ? 0 : this.state.page) : this.state.page + 1;

		//	Reset countdown and update page
		this.reset_countdown(page);

		//	Call callback method if there is
		if (callback) callback(page);

	}

	/* Previous Page */
	prev_page (callback) {

		//	Calculate page
		var page = this.state.page - 1 < 0 ? (this.state.loop ? this.count - 1 : this.state.page) : this.state.page - 1;

		//	Reset countdown and update page
		this.reset_countdown(page);

		//	Call callback method if there is
		if (callback) callback(page);

	}

	/* Change Page */
	change_page (page, callback) {

		//	Check if same page
		if (page == this.state.page) {

			//	If unpaused
			if (!this.state.pause) {

				//	Pause the slideshow
				this.state.pause = true;

				//	Clear all previous autoplay functions
				clearInterval(this.autoplay_index); 

			}
			else {

				//	Unpause the slideshow
				this.state.pause = false;

				//	Clear all previous autoplay functions
				clearInterval(this.autoplay_index); 

				//	Set new autoplay index so we can clear this function on render
				this.autoplay_index = setInterval(this.next_page.bind(this), this.state.autoPlayDelay);
				
			}

		}

		//	Reset countdown and update page
		this.reset_countdown(page);

		//	Call callback method if there is
		if (callback) callback(page);

	}



	/* ==================================================== On Update =================================================== */
	componentDidUpdate (prevProps, prevState) {

		//	If updating then exit
		if (this.updating) return;

		//	If autoplaying
		if (this.state.autoPlay) {

			//	If element is visible on screen
			if ((this.props.event.type == 'start' || this.props.event.type == 'end') && !this.state.visible) {

				//	Clear all previous autoplay functions
				clearInterval(this.autoplay_index); 

				//	Set new autoplay index so we can clear this function on render
				this.autoplay_index = setInterval(this.next_page.bind(this), this.state.autoPlayDelay);

				//	Visible
				this.setState({visible: true});

				//	Reset countdown
				this.reset_countdown(this.state.page);

			}

			//	If not visible
			else if (this.props.event.type == 'leave' && this.state.visible) {

				//	Clear all previous autoplay functions
				clearInterval(this.autoplay_index);

				//	Not visible
				this.setState({visible: false});

				//	Reset countdown
				this.reset_countdown(this.state.page);

			}

		}
		else {

			//	Clear all previous autoplay functions
			clearInterval(this.autoplay_index);

		}

	}



	/* ==================================================== On Render =================================================== */
	render () {

		//	Declare variable to store slide elements
		var elements;

		//	Generate slides styling
		var slide_style = {
			maxWidth	: this.state.maxWidth,
			maxHeight	: this.state.maxHeight
		}

		//	Generate image elements
		var images = this.props.options ? (this.props.options.images || []) : [];
		elements = images.map((source, i) => { 

			//	Calculate offset
			var offset = ((i - this.state.page) * 100) + ((i - this.state.page) * this.state.padding);

			//	Calculate scale
			var scale = i == this.state.page ? 1 : this.state.itemScale;

			//	Create styles
			var style = {
				pointerEvents	: i == this.state.page ? 'all' : 'none',

				transform	: `translateX(${offset}%) scale(${scale})`,

				opacity		: i == this.state.page ? 1 : this.state.itemOpacity
			};

			//	Add element
			return <img key={i.toString()} style={style} src={source}/> 

		});

		//	Add any child elements
		var children = this.props.children ? (this.props.children.length ? this.props.children : [this.props.children]) : [];
		children.forEach((element, i) => { 

			//	Calculate offset
			var offset = (((i + images.length) - this.state.page) * 100) + (((i + images.length) - this.state.page) * this.state.padding);

			//	Calculate scale
			var scale = (i + images.length) == this.state.page ? 1 : this.state.itemScale;

			//	Create styles
			var style = {
				pointerEvents	: (i + images.length) == this.state.page ? 'all' : 'none',

				transform	: `translateX(${offset}%) scale(${scale})`,

				opacity		: (i + images.length) == this.state.page ? 1 : this.state.itemOpacity
			};

			//	Add element
			elements.push(React.cloneElement(element, { style, key: i.toString() }));

		});

		//	Generate pagination
		var pagination = [];
		for (let i = 0; i < elements.length; i++) {

			//	Generate class name
			var class_name = i == this.state.page ? 'active page' : 'page';

			//	Generate icon
			var icon = (!this.state.autoPlay || this.state.pause) ? ['fas', 'play'] : ['fas', 'pause'];
			
			//	Add element
			pagination.push(
				<div className={class_name} key={i.toString()} onClick={this.change_page.bind(this, i, this.props.options.callback)}>
					<FontAwesomeIcon icon={icon}/>
				</div>
			);

		}

		//	Generate countdown if option is enabled and if not resetting countdown
		var countdown;
		if (this.state.autoPlayIndicator && !this.is_reset_countdown && this.state.autoPlay && !this.state.pause) {

			//	Generate class name
			var class_name = `${this.state.autoPlayIndicatorPosition} countdown`;

			//	Set countdown
			countdown = <div className={class_name} style={{animationDuration: `${this.state.autoPlayDelay}ms`}}></div>

		}

		//	Declare slideshow content
		var content = (
			<div className="slideshow">

				{/* Slideshow */}
				<div className="slides" style={slide_style}>
					{elements}
				</div>

				{/* Arrows */}
				<div className={`left ${this.state.invertArrows ? 'inverted' : ''} arrow`} onClick={this.prev_page.bind(this, this.props.options.callback)}><FontAwesomeIcon icon={['fas', 'chevron-left']}/></div>
				<div className={`right ${this.state.invertArrows ? 'inverted' : ''} arrow`} onClick={this.next_page.bind(this, this.props.options.callback)}><FontAwesomeIcon icon={['fas', 'chevron-right']}/></div>

				{/* Pagination */}
				<div className="pagination" id="pagination">{pagination}</div>

				{/* Countdown */}
				{countdown}

			</div>);

		//	Return html when there is autoplay
		if (this.state.autoPlay) return (
			<Controller><Scene duration={500} classToggle="active">{content}</Scene></Controller>
		);

		//	Return html if there is no autoplay
		return (content);

	}

}

export default Slideshow