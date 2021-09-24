/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                       Imports                                                      */
/* ------------------------------------------------------------------------------------------------------------------ */
import React from 'react';
import { motion } from 'framer-motion';





/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                    Loader Class                                                    */
/* ------------------------------------------------------------------------------------------------------------------ */
class Loader extends React.Component {

	/* ==================================================== On Render =================================================== */
	render () {

		//	Return html
		return (
			<motion.div 
					className="loader" 
					exit="initial" 
					initial="initial" 
					animate="animate" 
					variants={{
						animate		: {
							transform	: 'scale(0)',
							transition	: {
								duration	: 1,
								ease		: [0.87, 0, 0.13, 1],
							},
						},
						initial		: {
							transform	: 'scale(1)',
							transition	: {
								duration	: 1,
								ease		: [0.87, 0, 0.13, 1],
							},
						}
					}} 
					onAnimationStart={() => {document.querySelector('body').classList.add('fixed');}}
					onAnimationComplete={() => {document.querySelector('body').classList.remove('fixed');}}>

				{/* Sections */}
				<div className="blob">

					{/* Indicators */}
					<motion.div className="indicators" exit="initial" initial="initial" animate="animate" variants={{
							animate		: {
								opacity		: 0
							},
							initial		: {
								opacity		: 1,
								transition: {
									duration	: 0.5,
									ease		: [0.87, 0, 0.13, 1],
								},
							}
						}}>
						<div className="indicator"></div>
						<div className="indicator"></div>
						<div className="indicator"></div>
					</motion.div>

				</div>

			</motion.div>
		);

	}

}

export default Loader