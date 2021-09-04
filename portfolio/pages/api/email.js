import sgMail from '@sendgrid/mail'

//	Set API key
sgMail.setApiKey(process.env.EMAIL_API_KEY);

//	Export API
export default async function handler (req, res) {

	//	Get info from request body
	const { name, email, subject, message, cc } = req.body;

	//	Convert data into new email object
	var data = {
		to			: 'muhammadfauzanaristyaputra@gmail.com',
		cc			: cc && email != 'muhammadfauzanaristyaputra@gmail.com' ? email : '',
		from			: 'portfolio@muhammadfauzan.me',
		subject			: 'Message From Portfolio Website',
		text			: message,
		html			: `<b>Name<b/> - ${name}<br/>
					   <b>Email<b/> - ${email}<br/>
					   <b>Subject<b/> - ${subject}<br/>
					   <b>Message<b/> - ${message}<br/>`
	}

	//	Send email
	sgMail.send(data).then(() => {

		//	Return success message
		res.json({ message: 'Email has been sent', type: 'success' });

	}).catch((err) => {

		//	Return error message
		res.json({ message: `Error sending email. Reason ${err.message}`, type: 'failure' });

	})

}