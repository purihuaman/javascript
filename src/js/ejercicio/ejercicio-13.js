const isEvenOdd = (number = 0) => {
	if (typeof number !== 'number' || number <= 0)
		return console.log('Ingrese un número positivo mayor a cero!.');

	if (number % 2 === 0) console.log(number, ', es par');
	else console.log(number, ', es impar');
};

export const ejercicioTrece = () => isEvenOdd(29);

/* TODO:
	13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/
