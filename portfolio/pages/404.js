import styles from '../styles/Error.module.scss'
import Head from 'next/head'
import Lottie from 'react-lottie';
import animation from '../public/404_animation.json';
import Navbar from "./components/navbar";
import Footer from "./components/footer";

//	Declare output function
function Error () {

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
					<div className={styles.animation}><Lottie options={{
						loop			: true,
						autoPlay		: true,
						animationData		: animation,
						rendererSettings	: {
							className		: styles.player,
							progressiveLoad		: true
						}
					}}/></div>

					{/* Header */}
					<div className={styles.header}>PAGE NOT FOUND</div>

					{/* Description */}
					<div className={styles.description}>
						Unfortunately this page does not exist. Please click the link <br/> below to return home.
					</div>

					{/* Call to Action */}
					<a href='/' className={styles.call_to_action}>Return Home</a>

				</div>



				{/* ===================================================== Footer ===================================================== */}
				<Footer/>
				


				{/* ================================================== Miscellaneous ================================================= */}

				{/* Navbar */}
				<div className="navbar_container"><Navbar pathname="error"/></div>

			</div>

		</div>
	);

}

export default Error