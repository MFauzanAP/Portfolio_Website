import React, { useState, useEffect } from 'react';
import { toast } from 'react-nextjs-toast';

//	Function used to copy data to clipboard
function CopyToClipboard (data, message = '') {

	//	Use Effect
	useEffect(() => {

		//	Copy to clipboard
		navigator.clipboard.writeText(data);

		//	Show toast
		toast.notify(`${message} Copied to Clipboard`, {
			duration	: 2,
			title		: 'Success',
		});

		//	Return nothing
		return null; 

	});

	//	Return nothing
	return null; 

}

export default CopyToClipboard