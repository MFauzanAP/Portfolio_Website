/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React, { createRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";
import { Router } from 'next/router';





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

	//	Reference to slides
	slide_ref = createRef();

	//	Variable to check if component is mounted
	isMounted = false;

	//	Variables to hold touch data
	touchX = null;
	touchY = null;
	diffX = 0;
	diffY = 0;



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
			arrowColor			: props.options ? (props.options.arrowColor || 'white') : 'white',
			paginationColor			: props.options ? (props.options.paginationColor || 'purple') : 'purple',
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

		//	On route change
		Router.events.on('routeChangeComplete', (url) => {

			//	Reset state
			this.setState({
				page		: 0,
				pause		: false
			});

		})

	}



	/* ==================================================== On Mount ==================================================== */
	componentDidMount () {

		//	Register events
		document.addEventListener('touchstart', this.HandleTouchStart.bind(this), false);
		document.addEventListener('touchmove', this.HandleTouchMove.bind(this), false);
		document.addEventListener('touchend', this.HandleTouchEnd.bind(this), false);

	}



	/* ===================================================== Unmount ==================================================== */
	componentWillUnmount () {

		//	Stop all autoplay
		clearInterval(this.autoplay_index);

		//	Unsubscribe events
		document.removeEventListener('touchstart', this.HandleTouchStart.bind(this));
		document.removeEventListener('touchmove', this.HandleTouchMove.bind(this));
		document.removeEventListener('touchend', this.HandleTouchEnd.bind(this));

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
	next_page (callback, user = false) {

		//	Calculate page
		var page = this.state.page + 1 >= this.count ? (this.state.loop ? 0 : this.state.page) : this.state.page + 1;

		//	Check if user input
		if (user) {

			//	Pause and clear all previous autoplay functions
			this.setState({pause: true});
			clearInterval(this.autoplay_index);

		}

		//	Reset countdown and update page
		this.reset_countdown(page);

		//	Call callback method if there is
		if (callback) callback(page);

	}

	/* Previous Page */
	prev_page (callback, user = false) {

		//	Calculate page
		var page = this.state.page - 1 < 0 ? (this.state.loop ? this.count - 1 : this.state.page) : this.state.page - 1;

		//	Check if user input
		if (user) {

			//	Pause and clear all previous autoplay functions
			this.setState({pause: true});
			clearInterval(this.autoplay_index);
			
		}

		//	Reset countdown and update page
		this.reset_countdown(page);

		//	Call callback method if there is
		if (callback) callback(page);

	}

	/* Change Page */
	change_page (page, callback, user = false) {

		//	Check if same page
		if (page == this.state.page) {

			//	If unpaused
			if (!this.state.pause) {

				//	Pause the slideshow
				this.setState({pause: true});

				//	Clear all previous autoplay functions
				clearInterval(this.autoplay_index); 

			}
			else {

				//	Unpause the slideshow
				this.setState({pause: false});

				//	Clear all previous autoplay functions
				clearInterval(this.autoplay_index); 

				//	Set new autoplay index so we can clear this function on render
				this.autoplay_index = setInterval(this.next_page.bind(this), this.state.autoPlayDelay);
				
			}

		}
		else if (user) {

			//	Pause and clear all previous autoplay functions
			this.setState({pause: true});
			clearInterval(this.autoplay_index);
			
		}

		//	Reset countdown and update page
		this.reset_countdown(page);

		//	Call callback method if there is
		if (callback) callback(page);

	}

	//	Function called on touch start
	HandleTouchStart (e) {

		//	Get slides
		var slides = this.slide_ref.current;

		//	If unable to get slides then exit
		if (!slides) return;

		//	If clicks are outside of slides then exit
		if (!slides.contains(e.target)) return;

		//	Get touch position
		var touch = e.touches[0];

		//	Store touch data
		this.touchX = touch.clientX;
		this.touchY = touch.clientY;

	}

	//	Function called to handle touch move
	HandleTouchMove (e) {

		//	Get slides
		var slides = this.slide_ref.current;

		//	If unable to get slides then exit
		if (!slides) return;

		//	If touch data is empty then return
		if (!this.touchX || !this.touchY) return;

		//	Get current touch position
		var x = e.touches[0].clientX;
		var y = e.touches[0].clientY;

		//	Calculate the difference between the touch positions
		this.diffX = this.touchX - x;
		this.diffY = this.touchY - y;

		//	Calculate offset
		var offset = this.state.page * -100;

		//	If not swiping up or down
		if (Math.abs(this.diffX) > Math.abs(this.diffY)) {

			//	If swiping left
			if (this.diffX > 0) {

				//	Move slides by diffX
				slides.style.transform = `translateX(${Math.min(0, Math.max(-100 * (this.count - 1), offset - (this.diffX / 2)))}%)`;
				slides.style.transition = `none`;

			}

			//	If swiping right
			if (this.diffX < 0) {

				//	Move slides by diffX
				slides.style.transform = `translateX(${Math.min(0, Math.max(-100 * (this.count - 1), offset + Math.abs(this.diffX / 2)))}%)`;
				slides.style.transition = `none`;

			}

		}

	}

	//	Function called to handle touch end
	HandleTouchEnd (e) {

		//	Get slides
		var slides = this.slide_ref.current;

		//	If unable to get slides then exit
		if (!slides) return;

		//	If touch data is empty then return
		if (Math.abs(this.diffX) < 50) return;

		//	Calculate offset
		var offset = this.state.page * -100;

		//	Calculate final offset
		var final_offset = this.diffX > 0 ? offset - (this.diffX / 2) : offset + Math.abs(this.diffX / 2);

		//	If not swiping up or down and if swipe duration is long enough
		if (Math.abs(this.diffX) > Math.abs(this.diffY)) {

			//	Calculate which page to snap to
			var page = Math.round(final_offset / -100);

			//	Clamp page
			page = Math.max(0, Math.min(this.count - 1, page));

			//	Snap to this page
			slides.style.transform = `translateX(-${page * 100}%)`;
			slides.style.transition = 'transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99) 0s';

			//	Change page
			this.setState({page, pause: true});
			clearInterval(this.autoplay_index);

		}

		//	Reset touch data
		this.touchX = null;
		this.touchY = null;
		this.diffX = 0;
		this.diffY = 0;

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

		//	Update image count
		var image_count = (this.props.options && this.props.options.images) ? this.props.options.images.length : 0;
		var child_count = this.props.children ? (this.props.children.length ? this.props.children.length : 1) : 0;
		this.count = image_count + child_count;

	}



	/* ==================================================== On Render =================================================== */
	render () {

		//	Declare variable to store slide elements
		var elements;

		//	Get callback
		var callback = this.props.options ? this.props.options.callback : null;

		//	Generate image elements
		var images = this.props.options ? (this.props.options.images || []) : [];
		elements = images.map((source, i) => { 

			//	Calculate scale
			var scale = i == this.state.page ? 1 : this.state.itemScale;

			//	Create styles
			var style = {
				pointerEvents	: i == this.state.page ? 'all' : 'none',

				width		: '100%',
				height		: '100%',
				flex		: `1 0 100%`,

				transform	: `scale(${scale})`,

				transition	: 'transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99) 0s',

				opacity		: i == this.state.page ? 1 : this.state.itemOpacity
			};

			//	Add element
			return <div key={i.toString()} style={style}><Image layout='fill' placeholder='blur' blurDataURL={source} src={source}/></div>

		});

		//	Add any child elements
		var children = this.props.children ? (this.props.children.length ? this.props.children : [this.props.children]) : [];
		children.forEach((element, i) => { 

			//	Calculate scale
			var scale = (i + images.length) == this.state.page ? 1 : this.state.itemScale;

			//	Create styles
			var style = {
				pointerEvents	: (i + images.length) == this.state.page ? 'all' : 'none',

				flex		: `1 0 100%`,

				transform	: `scale(${scale})`,

				opacity		: (i + images.length) == this.state.page ? 1 : this.state.itemOpacity
			};

			//	Add element
			elements.push(React.cloneElement(element, { style, key: i.toString() }));

		});

		//	Keep track of number of elements
		this.count = elements.length;

		//	Generate pagination
		var pagination = [];
		for (let i = 0; i < elements.length; i++) {

			//	Generate class name
			var class_name = i == this.state.page ? `active page ${this.state.paginationColor}` : `page ${this.state.paginationColor}`;

			//	Generate icon
			var icon = (!this.state.autoPlay || this.state.pause) ? ['fas', 'play'] : ['fas', 'pause'];
			
			//	Add element
			pagination.push(
				<div className={class_name} key={i.toString()} onClick={this.change_page.bind(this, i, callback, true)}>
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

		//	Calculate offset
		var offset = this.state.page * 100;

		//	Generate slides styling
		var slide_style = {
			maxWidth	: this.state.maxWidth,
			maxHeight	: this.state.maxHeight,
			
			transform	: `translateX(-${offset}%)`,

			transition	: 'transform 400ms cubic-bezier(0.42, 0.65, 0.27, 0.99) 0s',
		}

		//	Declare slideshow content
		var content = (
			<div className="slideshow">

				{/* Slideshow */}
				<div className="slides" style={slide_style} ref={this.slide_ref}>
					{elements}
				</div>

				{/* Arrows */}
				<div className={`left ${this.state.invertArrows ? 'inverted' : ''} ${this.state.arrowColor} arrow`} onClick={this.prev_page.bind(this, callback, true)}><FontAwesomeIcon icon={['fas', 'chevron-left']}/></div>
				<div className={`right ${this.state.invertArrows ? 'inverted' : ''} ${this.state.arrowColor} arrow`} onClick={this.next_page.bind(this, callback, true)}><FontAwesomeIcon icon={['fas', 'chevron-right']}/></div>

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