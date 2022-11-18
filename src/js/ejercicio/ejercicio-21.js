const squareNumbers = (arraysNumbers = []) => {
	if (!(arraysNumbers instanceof Object) || arraysNumbers.length < 0)
		return console.log('Ingrese un array valido!.');

	const includeString = arraysNumbers.some(
		(element) => typeof element !== 'number'
	);

	if (!includeString) {
		const newArray = arraysNumbers.map((element) => Math.pow(element, 2));

		console.log(newArray);
	} else
		return console.log(
			`${arraysNumbers} incluye cadenas de textos o tipos diferentes a números`
		);
};

export const ejercicioVeintiuno = () => squareNumbers([11, 12, 13, 14]);

/* TODO:
	21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/
