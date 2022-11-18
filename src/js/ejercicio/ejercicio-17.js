const totalYears = (date = '') => {
	if (!(date instanceof Date) || date.length <= 0)
		return console.log('Ingrese una fecha correcta!.');

	const timeNow = new Date().getTime();
	const myTime = date.getTime();
	const myBirthday = timeNow - myTime;

	const yearsMLS = 1000 * 60 * 60 * 24 * 360;

	const myAge = Math.floor(myBirthday / yearsMLS);

	console.info(
		Math.sign(myAge) === -1
			? `Faltan ${Math.abs(myAge)} años para el ${date.getFullYear()}`
			: Math.sign(myAge) === 1
			? `Han pasado ${Math.abs(myAge)} años, desde ${date.getFullYear()}`
			: `Estamos en el año actual ${date.getFullYear()}`
	);
};

export const ejercicioDiecisiete = () => totalYears(new Date(2038, 11, 13));

/* TODO:
	17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/
