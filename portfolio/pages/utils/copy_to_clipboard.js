import { toast } from 'react-nextjs-toast';

//	Function used to copy data to clipboard
function CopyToClipboard (data, message = '') {

	//	Check if this function is being run in the dom
	if (typeof window !== 'undefined') {

		//	Create new text area to hold text to copy
		const text = document.createElement('textarea');
		text.value = data;

		//	Add text area to dom
		document.body.appendChild(text);

		//	Copy to clipboard
		text.select();
		document.execCommand('copy');
		document.body.removeChild(text);

		//	Show toast
		toast.notify(`${message} Copied to Clipboard`, {
			duration	: 2,
			title		: 'Success',
		});

	}

	//	Return nothing
	return null; 

}

export default CopyToClipboard