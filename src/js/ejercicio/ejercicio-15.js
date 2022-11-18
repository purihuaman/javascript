const convertToBinaryAndDecimal = (number = 0, base = 0) => {
	if (typeof number !== 'number' || number < 0)
		return console.log('Ingrese un número positivo mayor a cero!.');
	if (typeof base !== 'number' || base < 0)
		return console.log('Ingrese un caracter númerico!.');

	if (base === 2)
		console.info(`${number} base ${base} = ${parseInt(number, base)} base 10`);
	else if (base === 10)
		console.info(`${number} base ${base} = ${number.toString(2)} base 2`);
	else console.log(base, 'el tipo de base a convertir NO es valido');
};

export const ejercicioQuince = () => convertToBinaryAndDecimal(4, 10);

/* TODO:
	15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/
