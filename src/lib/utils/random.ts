export const randomString = (length = 5) => {
	let str = '';
	let rand = 0;

	for (let i = 0; i < length; i++) {
		rand = Math.round(Math.random() * 25) + 65;
		str += String.fromCharCode(rand);
	}

	return str;
};

export const randomNumber = (max = 99999) => {
	return Math.round(Math.random() * max);
};
