import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
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
			
				{/* Background */}
				<img src="/home_background_1.svg" className={styles.background} id="background"/>

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
						Game Developer by night.
					</div>

				</div>

				{/* Call to Action */}
				<div className={styles.call_to_action}></div>

			</div>

		</div>
	)
}
