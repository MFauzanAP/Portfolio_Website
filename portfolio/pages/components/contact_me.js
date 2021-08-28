/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React from 'react';
import Link from 'next/link';
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
				<Link href='/contact'><a className='call_to_action'>
					LET&apos;S WORK TOGETHER
					<FontAwesomeIcon style={{marginLeft: '10px'}} icon={['fas', 'arrow-right']}/>
				</a></Link>

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