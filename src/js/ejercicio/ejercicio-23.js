const evenAndOddNumbers = (arrayNumbers = '') => {
	if (!(arrayNumbers instanceof Object) || arrayNumbers.length < 0)
		return console.log('Ingrese un array valido!.');

	const includeString = arrayNumbers.some(
		(element) => typeof element !== 'number'
	);

	const isEvenNumber = [];
	const isOddNumber = [];

	if (!includeString) {
		isEvenNumber.push(arrayNumbers.filter((element) => element % 2 === 0));
		isOddNumber.push(arrayNumbers.filter((element) => element % 2 !== 0));

		console.log({ pares: isEvenNumber, impares: isOddNumber });
	} else
		return console.log(
			`${arrayNumbers} incluye cadenas de textos o tipos diferentes a números`
		);
};

export const ejercicioVeintitres = () =>
	evenAndOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

/* TODO:
	23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/
