const maxAndMin = (arrayNumbers = []) => {
	if (!(arrayNumbers instanceof Object) || arrayNumbers.length < 0)
		return console.log('Ingrese un array valido!.');

	const includeString = arrayNumbers.some(
		(element) => typeof element !== 'number'
	);

	const numbersMaxAndMin = [];

	if (!includeString) {
		numbersMaxAndMin.push(Math.max(...arrayNumbers));
		numbersMaxAndMin.push(Math.min(...arrayNumbers));
	} else
		return console.log(
			`${arrayNumbers} incluye cadenas de textos o tipos diferentes a números`
		);

	console.log(numbersMaxAndMin);
};

export const ejercicioVeintidos = () => maxAndMin([1, 4, 5, 99, -60]);

/* TODO:
	22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/
