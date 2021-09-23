import '../styles/globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React from 'react';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { AnimatePresence } from 'framer-motion';
import Footer from "@/components/footer";

//      Import brand icons
import { fab } from '@fortawesome/free-brands-svg-icons';

//      Import regular icons
import { far } from '@fortawesome/free-regular-svg-icons';

//      Import solid icons
import { fas } from '@fortawesome/free-solid-svg-icons';

//      Dont import css since its already done above
config.autoAddCss = false;

//      Add to library
library.add(
	fab,
	far,
	fas
);

function MyApp({ Component, pageProps, router }) {

	/* ================================================ Output final html =============================================== */
	return (
		<div style={{overflowX: 'hidden'}}>

			{/* Main Body */}
			<AnimatePresence exitBeforeEnter><Component key={router.route} {...pageProps} /></AnimatePresence>

			{/* Footer */}
			<Footer/>
			
		</div>
	);

}

export default MyApp
