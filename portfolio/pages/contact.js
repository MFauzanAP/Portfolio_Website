import styles from '@/styles/Contact.module.scss'
import React, { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Controller, Scene } from "react-scrollmagic";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SideNavbar from '@/components/side_navbar';
import Accordion from "@/components/accordion";
import { toast } from 'react-nextjs-toast';

//	Declare output function
function Contact () {

	/* ==================================================== Variables =================================================== */

	//	Preloading
	const [preload, setPreload] = useState(0);



	/* =================================================== Use Effect =================================================== */
	React.useEffect(() => {

		// 	Import lottie
		import("@lottiefiles/lottie-player");

		//	Re enable scrolling
		document.querySelector('body').classList.remove('fixed');

		//	Hide navigation menu
		document.querySelector('.navigation').classList.remove('active');

		//	Check if not first time visitting page
		if (sessionStorage.getItem('contact_visit')) {

			//	Get all sections
			document.querySelectorAll(`.load_animation`).forEach(() => {
				
				//	Disable load animation
				setPreload(styles.preload);

			});

		}

		//	Set cookie
		sessionStorage.setItem('contact_visit', true);

	})



	/* ==================================================== Functions =================================================== */
	const sendEmail = async (event) => {

		//	Stop page from refreshing
		event.preventDefault();

		//	Show loading indicator
		event.target.button.className = `${styles.loading} ${styles.call_to_action}`;
		event.target.button.innerHTML = `<i class="fa fa-spinner fa-spin"></i>`;

		//	Extract data from form
		var data = {
			name		: event.target.name.value,
			email		: event.target.email.value,
			subject		: event.target.subject.value,
			message		: event.target.message.value,
			cc		: event.target.cc.checked
		}

		//	Try sending api call to send email
		try {

			//	Send api request and wait for response
			var result = await fetch('/api/email', {
				method		: 'POST',
				headers		: { 'Content-Type': 'application/json' },
				body		: JSON.stringify(data)
			})

			//	Extract response json
			result = await result.json();

			//	Hide loading indicator
			event.target.button.className = styles.call_to_action;
			event.target.button.innerHTML = `SUBMIT`;

			//	If the email was successfully sent
			if (result.type == 'success') {

				//	Show toast
				toast.notify(`Email Sent Successfully!`, {
					duration	: 2,
					title		: 'Success',
				});

			}

			//	If failed to send email
			else if (result.type == 'failure') {

				//	Show toast
				toast.notify(`Email Failed to Send`, {
					duration	: 2,
					title		: 'Error',
				});
				
			}

		} catch (e) {

			//	Output errors
			console.log(e);

		}

	}



	/* ================================================ Output final html =============================================== */
	return (
		<div className={styles.container}>

			{/* Head */}
			<Head>

				{/* Details */}
				<title>Contact | Muhammad Fauzan Aristya Putra</title>
				<meta name="description" content="Muhammad Fauzan Aristya Putra's Portfolio" />
				<link rel="icon" href="/favicon.ico" />

				{/* Font Awesome */}
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

			</Head>

			{/* Homepage */}
			<div className={styles.contact}>

				{/* Navbar Background */}
				<div className={styles.navbar_background}>
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".5" className={styles.shape_fill}></path>
						<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".75" className={styles.shape_fill}></path>
						<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shape_fill}></path>
					</svg>
				</div>

				{/* ======================================================= Map ====================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={`${styles.map} ${preload} load_animation`}>

					{/* Anchor */}
					<a className="anchor" id="contact_details"/>

					{/* Background */}
					<div className={styles.background}></div>

					{/* Animation */}
					<div className={styles.animation}><lottie-player 
						src='./world_animation.json'
						speed="1" 
						loop 
						autoplay
					/></div>

					{/* Description */}
					<div className={styles.description}>

						{/* Title */}
						<div className={styles.title}>CONTACT ME</div>

						{/* Email */}
						<div className={styles.details}>
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'envelope']}/>
							<span className={styles.bold}>Email - </span>
							<span className={styles.text}>muhammadfauzanaristyaputra@gmail.com</span>
						</div>

						{/* Address */}
						<div className={styles.details}>
							<FontAwesomeIcon className={styles.icon} icon={['fas', 'map-marker-alt']}/>
							<span className={styles.bold}>Address - </span>
							<span className={styles.text}>Al Khor Community, Al Khor, Qatar</span>
						</div>

						{/* Social Media */}
						<ul className={styles.social_media}>
							<a href="https://github.com/MFauzanAP" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'github']}/></li></a>
							<a href="https://linkedin.com/in/muhammad-fauzan-6256441b4" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'linkedin']}/></li></a>
							<a href="https://www.instagram.com/fow_zen/" target="_blank" rel="noreferrer"><li><FontAwesomeIcon icon={['fab', 'instagram']}/></li></a>
						</ul>
						
					</div>

					{/* Map */}
					<div className={styles.map}><iframe src="https://maps.google.com/maps?q=Al%20Khor%20Community&amp;z=15&amp;ie=UTF8&amp;output=embed"/></div>

					{/* Background End */}
					<div style={{position: 'absolute', bottom: "10%"}} id="background_end"></div>

					{/* Divider */}
					<div className={styles.divider}>
						<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
							<path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className={styles.shape_fill}></path>
						</svg>
					</div>

				</div></Scene></Controller>



				{/* ======================================================= FAQ ====================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={`${styles.faq} ${preload} load_animation`}>

					{/* Anchor */}
					<a className="anchor" id="faq"/>

					{/* Title */}
					<div className={styles.title}>Frequently Asked Questions</div>

					{/* Content */}
					<div className={styles.content}>

						{/* Animation */}
						<div className={styles.animation}><lottie-player 
							src='./faq_animation.json'
							speed="1" 
							loop 
							autoplay
						/></div>

						{/* Description */}
						<div className={styles.description}>
							
							{/* Accordions */}
							<div className={styles.accordion}><Accordion options={{title: 'Are you available for full time work?'}}>
								<p>
									Yes. Although I&apos;m a student, I regularly spend north of 6 hours a day working on code. 
									However, this number may fluctuate throughout the year due to exams and such.
								</p>
								<p>
									If you would like to check out how often I work, or if you&apos;re curious about the
									quality of my code, please feel free to visit 
									<a href="https://github.com/MFauzanAP" target="_blank" rel="noreferrer"> my GitHub page.</a>
								</p>
							</Accordion></div>
							<div className={styles.accordion} style={{transitionDelay: '1.95s'}}><Accordion options={{title: 'What services do you offer?'}}>
								<p>
									Currently, I&apos;m open to game development or web design requests. Prices for these services will be decided 
									after contact and differ depending on the project&apos;s size, but a rough estimate would be around 50-100 USD 
									per hour. However, please note that I may not be able to accept all requests since I may be busy with school 
									during that time.
								</p>
								<p>
									If you would like to learn more, please send me a message through the <Link href="#contact_form"><a>form below </a></Link>
									or click here to <Link href="/projects"><a>check out my other projects.</a></Link>
								</p>
							</Accordion></div>
							<div className={styles.accordion} style={{transitionDelay: '2.15s'}}><Accordion options={{title: 'How often are you available?'}}>
								<p>
									It depends on my current situation and whether or not I have exams/other projects. 
									However, I&apos;m usually free, so don&apos;t be afraid to reach out to me.
								</p>
								<p>
									But do note that if I am unavailable, I will notify you through email.
								</p>
							</Accordion></div>
							<div className={styles.accordion} style={{transitionDelay: '2.35s'}}><Accordion options={{title: 'What game engine do you use?'}}>
								<p>
									Currently I use the Unity game engine since it&apos;s what I started out with, but I&apos;m always open 
									to learning new things.
								</p>
							</Accordion></div>
							<div className={styles.accordion} style={{transitionDelay: '2.55s'}}><Accordion options={{title: 'Are you fluent in (@.) language or tool?'}}>
								<p>
									Click here to <Link href="/about#tech_stack"><a>view a list of the languages and tools I use. </a></Link>
								</p>
							</Accordion></div>

						</div>

					</div>

				</div></Scene></Controller>



				{/* ================================================== Contact Form ================================================== */}
				<Controller><Scene classToggle={styles.active} reverse={false}><div className={`${styles.contact_form} ${preload} load_animation`}>

					{/* Anchor */}
					<a className="anchor" id="contact_form"/>

					{/* Divider */}
					<div className={styles.divider}><div className={styles.connectors}>
						<div className={styles.connector}></div>
						<div className={styles.connector}></div>
						<div className={styles.connector}></div>
					</div></div>

					{/* Content */}
					<div className={styles.content}>

						{/* Animation */}
						<div className={styles.animation}><lottie-player 
							src='./contact_form_animation.json'
							speed="1" 
							loop 
							autoplay
						/></div>

						{/* Description */}
						<div className={styles.description}>

							{/* Title */}
							<div className={styles.title}>GET IN TOUCH</div>
							
							{/* Form */}
							<form className={styles.form} onSubmit={sendEmail}>

								{/* Name */}
								<div className={styles.input}>
									<input type="text" id="name" name="name" required/>
									<label htmlFor="name">Name*</label>
								</div>

								{/* Email */}
								<div className={styles.input}>
									<input type="text" id="email" name="email" required/>
									<label htmlFor="email">Email*</label>
								</div>

								{/* Subject */}
								<div className={styles.input} style={{gridColumnStart: 'span 2'}}>
									<input type="text" id="subject" name="subject" required/>
									<label htmlFor="subject">Subject*</label>
								</div>

								{/* Message */}
								<div className={styles.input} style={{gridColumnStart: 'span 2'}}>
									<textarea type="text" id="message" name="message" required/>
								</div>

								{/* Checkbox */}
								<div className={styles.checkbox}>
									<input type="checkbox" name="cc" id="checkbox"/>
									<label htmlFor="checkbox">Send me a copy of this message</label>
								</div>

								{/* Button */}
								<button className={styles.call_to_action} name="button">SUBMIT</button>

							</form>

						</div>

					</div>

					{/* Cover */}
					<div className={styles.cover}>
						<span className={styles.curtain}></span>
						<span className={styles.curtain}></span>
						<span className={styles.curtain}></span>
						<span className={styles.curtain}></span>
					</div>

				</div></Scene></Controller>



				{/* ===================================================== Footer ===================================================== */}
				<Footer/>
				


				{/* ================================================== Miscellaneous ================================================= */}

				{/* WIP Indicator */}
				<div className='wip1'>WORK IN PROGRESS</div>
				<div className='wip2'>WORK IN PROGRESS</div>

				{/* Navbar */}
				<Controller><Scene classToggle="active" triggerElement="#background_end">
					<div className="navbar_container"><Navbar pathname="contact"/></div>
				</Scene></Controller>

				{/* Scrollbar */}
				<SideNavbar options={{
					sections	: [
						{
							id		: 'contact_details',
							class		: styles.map,
							name		: 'Contact Details',
						},
						{
							id		: 'faq',
							class		: styles.faq,
							name		: 'FAQ',
						},
						{
							id		: 'contact_form',
							class		: styles.contact_form,
							name		: 'Contact Form'
						}
					]
				}}/>

			</div>

		</div>
	);

}

export default Contact
