const objDate = () => {
	const date = new Date();
	const now1 = Date.now();
	const birthday = new Date(1998, 11, 13);
	const birthday2 = new Date(1998, 11, 13);

	console.log(typeof date);
	console.log(now1);
	console.log(birthday);

	// Forma de comparar fechas
	console.log(birthday.getTime() === birthday2.getTime());

	console.log(birthday.toLocaleDateString());
	console.log(birthday.toLocaleDateString('en-US'));
	console.log(birthday.toLocaleDateString('en-GB'));
	console.log(birthday.toLocaleDateString('es-ES'));
};

export { objDate };
