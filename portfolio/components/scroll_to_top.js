/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";





/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                  ScrollToTop Class                                                 */
/* ------------------------------------------------------------------------------------------------------------------ */
class ScrollToTop extends React.Component {

	/* ===================================================== On Load ==================================================== */
	constructor (props) {
		super(props);

		//	Set state
		this.state = {
			trigger				: props.options ? (props.options.trigger || 'scroll_to_top') : 'scroll_to_top',
		}

	}



	/* ==================================================== On Render =================================================== */
	render () {

		//	Return html
		return (
			<Controller><Scene classToggle="active" reverse={true} triggerElement={this.state.trigger}><div className="scroll_to_top">

				{/* Anchor */}
				<p className="anchor" id="scroll_to_top"></p>

				{/* Link */}
				<a href="#scroll_to_top" className="link">

					{/* Icon */}
					<FontAwesomeIcon icon={['fas', 'chevron-up']}/>

					{/* Text */}
					<div className="text">Scroll To Top</div>

				</a>

			</div></Scene></Controller>
		);

	}

}

export default ScrollToTop