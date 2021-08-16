import { toast } from 'react-nextjs-toast';

//	Function used to copy data to clipboard
function copy_to_clipboard (data, message = '') {

	//	Copy to clipboard
	navigator.clipboard.writeText(data);

	//	Show toast
	toast.notify(`${message} Copied to Clipboard`, {
		duration	: 2,
		title		: 'Success',
	});

}

export default copy_to_clipboard