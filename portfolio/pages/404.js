import React, { useRef } from 'react';
import styles from '@/styles/Error.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer } from 'react-nextjs-toast';
import Navbar from "@/components/navbar";
import ScrollToTop from '@/components/scroll_to_top';
import Loader from '@/components/loader';

//	Declare output function
function Error () {

	/* ==================================================== Variables =================================================== */

	//	Reference
	const ref = useRef(null);



	/* =================================================== Use Effect =================================================== */
	React.useEffect(() => {

		// 	Import lottie
		import("@lottiefiles/lottie-player");

		//	Re enable scrolling
		document.querySelector('body').classList.remove('fixed');

		//	Hide navigation menu
		document.querySelector('.navigation').classList.remove('active');

	}, [])


	
	/* ================================================ Output final html =============================================== */
	return (
		<div className={styles.container}>

			{/* Head */}
			<Head>

				{/* Details */}
				<title>Page Not Found | Muhammad Fauzan Aristya Putra</title>
				<meta name="description" content="Muhammad Fauzan Aristya Putra's Portfolio" />
				<link rel="icon" href="/favicon.ico" />

			</Head>

			{/* Homepage */}
			<div className={styles.error}>

				{/* ====================================================== Body ====================================================== */}
				<div className={styles.body}>

					{/* Animation */}
					<div className={styles.animation}><lottie-player 
							src='/404_animation.json' 
							ref={ref}
							speed="1" 
							loop 
							autoplay
					/></div>

					{/* Header */}
					<div className={styles.header}>PAGE NOT FOUND</div>

					{/* Description */}
					<div className={styles.description}>
						Unfortunately, this page does not exist. Please click the link <br/> below to return home.
					</div>

					{/* Call to Action */}
					<Link href='/'><a className={styles.call_to_action}>Return Home</a></Link>

				</div>
				


				{/* ================================================== Miscellaneous ================================================= */}

				{/* Scroll to Top */}
				<ScrollToTop/>

				{/* WIP Indicator */}
				<div className='wip1'>WORK IN PROGRESS</div>
				<div className='wip2'>WORK IN PROGRESS</div>

				{/* Navbar */}
				<div className="navbar_container"><Navbar pathname="error"/></div>

				{/* Toast Container */}
				<ToastContainer style={{zIndex: 5}}/>

				{/* Loader */}
				<Loader/>

			</div>

		</div>
	);

}

export default Error