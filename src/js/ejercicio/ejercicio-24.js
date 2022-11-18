const numberAscDesc = (arrayNumbers = []) => {
	if (!(arrayNumbers instanceof Object) || arrayNumbers.length < 0)
		return console.log('Ingrese un array valido!.');

	const includeString = arrayNumbers.some(
		(element) => typeof element !== 'number'
	);

	let numbersAsc = [];
	let numbersDesc = [];

	if (!includeString) {
		numbersAsc = [...arrayNumbers.sort((a, b) => a - b)];

		numbersDesc = [...arrayNumbers.sort((a, b) => b - a)];
	} else
		return console.log(
			`${arrayNumbers} incluye cadenas de textos o tipos diferentes a números`
		);

	console.log({ asc: numbersAsc });
	console.log({ desc: numbersDesc });
};

export const ejercicioVeinticuatro = () => numberAscDesc([7, 5, 7, 8, 6]);

/* TODO:
	24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/
