/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                   Slideshow Class                                                  */
/* ------------------------------------------------------------------------------------------------------------------ */
class Slideshow extends React.Component {

	/* ===================================================== On Load ==================================================== */
	constructor (props) {
		super(props);

		//	Set state
		this.state = {
			page		: 0
		}
	}



	/* ==================================================== Functions =================================================== */

	/* Change Page */
	change_page (page) {

		//	Update state
		console.log('change page');
		this.setState({page});

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
			
			//	Add element
			pagination.push(<div className={class_name} key={i.toString()} onClick={this.change_page.bind(this, i)}></div>);

		}

		//	Return html
		return (
			<div className="slideshow">

				{/* Slideshow */}
				{images}

				{/* Arrows */}
				<div className="left arrow"><FontAwesomeIcon icon={['fas', 'chevron-left']}/></div>
				<div className="right arrow"><FontAwesomeIcon icon={['fas', 'chevron-right']}/></div>

				{/* Pagination */}
				<div className="pagination">

					{/* Pages */}
					{pagination}

				</div>

			</div>
		);

	}

}

export default Slideshow