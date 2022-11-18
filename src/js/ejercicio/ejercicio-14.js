const convertingDegrees = (number = 0, degrees = '') => {
	if (typeof number !== 'number' || number < 0)
		return console.log('Ingrese un número positivo mayor a cero!.');
	if (
		typeof degrees !== 'string' ||
		degrees.length <= 0 ||
		degrees.length > 1 ||
		!/(C|F)/.test(degrees.toUpperCase())
	)
		return console.log('Ingrese un caracter de unidad de temperatura!.');

	switch (degrees.toUpperCase()) {
		case 'C':
			console.log(`(${number}°C * ${9 / 5}) + 32 = ${number * (9 / 5) + 32}`);
			break;
		case 'F':
			console.log(`(${number}°F - ${32}) * 5/9 = ${(number - 32) * (5 / 9)}`);
			break;

		default:
			console.log('Debe ingresar una unidad de temperatura');
			break;
	}
};

export const ejercicioQuince = () => convertingDegrees(8, 'A');

/* TODO:
	14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/
