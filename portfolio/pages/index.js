import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

//	Declare constants
const num_circles = 5;

//	Declare output function
function Home() {

	/* =============================================== Generate circles ============================================== */

	//	Declare array to hold values
	var circles = [];

	//	For loop to generate circles
	for (let i = 0; i < num_circles; i++) {

		//	Generate random size and position
		let size = (Math.floor(Math.random() * 50) + 1) * 15;
		let x = (Math.floor(Math.random() * 100));
		let y = (Math.floor(Math.random() * 100));

		//	Create style
		let style = {
			width		: `${size}px`,
			height		: `${size}px`,
			left		: `${x}%`,
			top		: `${y}%`
		}

		//	Add to array
		circles.push(<div className={styles.circle} style={style}></div>);

	}



	/* ================================================ Output final html =============================================== */
	return (
		<div className={styles.container}>

			{/* Head */}
			<Head>

				{/* Details */}
				<title>Portfolio</title>
				<meta name="description" content="Muhammad Fauzan Aristya Putra's Portfolio" />
				<link rel="icon" href="/favicon.ico" />
				<link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet'></link>

			</Head>

			{/* Homepage */}
			<div className={styles.home}>

				{/* Background Mask */}
				<div className={styles.background_mask} id="background_mask">

					{/* Background */}
					<div className={styles.background} id="background"></div>

					{/* Background Circles */}
					{circles}

				</div>

				{/* Logo */}
				<img className={styles.logo} src="/logo.svg"/>

				{/* Welcome Text */}
				<div className={styles.welcome_text} id="welcome-text">

					{/* Title */}
					<div className={styles.title} id="title">MUHAMMAD FAUZAN ARISTYA PUTRA</div>

					{/* Underline */}
					<div className={styles.underline} id="underline"></div>

					{/* Meta */}
					<div className={styles.meta} id="meta">
						Undergraduate student at Qatar University, 
						<br/>
						Full Stack Developer by day, 
						<br/>
						{/* Game Developer by night. */}
					</div>

				</div>

				{/* Call to Action */}
				<div className={styles.call_to_action}>VIEW PROJECTS</div>

			</div>

		</div>
	);

}

export default Home