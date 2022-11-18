const repeatedWord = (text = '', word = '') => {
	if (typeof text !== 'string' || text.length <= 0)
		return console.log('Ingrese un texto');
	if (typeof word !== 'string' || word.length <= 0)
		return console.log('Ingrese una palabra');

	let countWord = 0;
	text
		.toLowerCase()
		.split(' ')
		.forEach((element) => {
			if (element === word) {
				countWord++;
				console.log({ element, word });
			}
		});

	console.log(`${word} = ${countWord} veces`);
};

export const ejercicioSeis = () =>
	repeatedWord('hola mundo adios mundo', 'mundo');

/* TODO:
	6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/
