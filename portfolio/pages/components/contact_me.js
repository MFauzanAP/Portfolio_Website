/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React from 'react';
import Lottie from 'react-lottie';
import contactAnimation from '../../public/contact_animation.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";





/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                  Contact Me Class                                                  */
/* ------------------------------------------------------------------------------------------------------------------ */
class ContactMe extends React.Component {

	/* ==================================================== On Render =================================================== */
	render () {
		return (
		<Controller><Scene classToggle='active' reverse={false}><div className='contact_me'>

			{/* Animation */}
			<div className='animation'><Lottie options={{
				loop			: true,
				autoPlay		: true,
				animationData		: contactAnimation,
				rendererSettings	: {
					progressiveLoad		: true
				}
			}}/></div>

			{/* Description */}
			<div className="description">
			
				{/* Header */}
				<div className='meta'>Interested?</div>

				{/* Call to Action */}
				<a href='/contact' className='call_to_action'>
					LET'S WORK TOGETHER
					<FontAwesomeIcon style={{marginLeft: '10px'}} icon={['fas', 'arrow-right']}/>
				</a>

			</div>
			
			{/* Load Animation */}
			<div className='load_animation'>
				<span className='load'></span>
				<span className='load'></span>
				<span className='load'></span>
				<span className='load'></span>
			</div>

		</div></Scene></Controller>)
	}

}

export default ContactMe