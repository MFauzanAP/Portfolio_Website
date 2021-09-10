//	Function used to set/create a new cookie
export const set_cookies = (name, value, duration) => {

	//	Get current date and time
	var current_date = new Date();

	//	Calculate expiry date of cookie
	var expiry_date = current_date.getDate() + duration;

	//	Add expiry date to cookie value
	value += duration == null ? `` : `; expires=${duration.toUTCString()}`;

	//	Add cookie
	document.cookie = `${name}=${value}`;

}

//	Function used to get cookie
export const get_cookies = (name) => {

	//	Get all cookies
	var cookies = document.cookie;

	//	Get start index of cookie
	var start = cookies.indexOf(`${name}=`);

	//	Get end index of cookie
	var end = cookies.indexOf(`;`, start);

	//	Extract cookie and return
	return cookies.substring(start, end);

}

//	Function used to delete cookie
export const delete_cookies = (name) => {

	//	Set expiry date of this cookie
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;

}