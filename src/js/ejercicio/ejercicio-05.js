const reverseText = (text = '') => {
	if (typeof text !== 'string' || text.length <= 0)
		return console.log('Ingrese un texto');

	const newText = text.split('');
	const reverse = [];

	for (let i = newText.length - 1; i >= 0; i--) {
		reverse.push(newText[i]);
	}
	console.log(`${text} = ${reverse.join('')}`);
};

export const ejercicioCinco = () => reverseText('Hola mundo');

/* TODO:
	5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/
