import React, { useRef } from 'react';
import styles from '@/styles/Error.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer } from 'react-nextjs-toast';
import { motion } from 'framer-motion';
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
				<meta name="title" content="Page Not Found | Muhammad Fauzan Aristya Putra"/>
				<meta name="description" content="A personal portfolio for a first-year student at Qatar University with a passion for web design and game development. "/>
				<meta name="keywords" content="muhammad, fauzan, aristya, putra, portfolio, web development, game development, technology, html, css, javascript, react, nextjs, jquery, c#, unity, blender, python"/>
				<meta name="robots" content="index, follow"/>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
				<meta name="language" content="English"/>
				<meta name="author" content="Muhammad Fauzan Aristya Putra"/>
				<link rel="icon" href="/favicon.ico" />

			</Head>

			{/* Homepage */}
			<motion.div initial={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0}} className={styles.error}>

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

				{/* Navbar */}
				<div className="navbar_container"><Navbar pathname="error"/></div>

				{/* Toast Container */}
				<ToastContainer style={{zIndex: 5}}/>

			</motion.div>

			{/* Loader */}
			<Loader/>

		</div>
	);

}

export default Error