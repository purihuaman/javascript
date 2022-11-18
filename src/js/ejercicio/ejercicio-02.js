const recortedText = (text = '', numberCharacters = 0) => {
	if (typeof text === 'string') {
		console.log(text.slice(0, numberCharacters));
	} else console.log('Ingrese un texto');
};

export const ejercicioDos = () => recortedText('Hola mundo', 4);

/* TODO:
	2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/
