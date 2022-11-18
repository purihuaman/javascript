const getAverage = (arrayElements = []) => {
	if (!(arrayElements instanceof Object) || arrayElements.length < 0)
		return console.log('Ingrese un array valido!.');

	const includeString = arrayElements.some(
		(element) => typeof element !== 'number'
	);

	if (!includeString) {
		const average = arrayElements.reduce((prev, curre) => prev + curre, 0);

		console.log('Array:', arrayElements);
		console.log('Total:', average);
		console.log('Promedio:', average / arrayElements.length);
	} else
		return console.log(
			`${arrayElements} incluye cadenas de textos o tipos diferentes a números`
		);
};

export const ejercicioVeintiseis = () =>
	getAverage([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

/* TODO:
	26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
