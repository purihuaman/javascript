const textSize = (text) => {
	if (typeof text === 'string') {
		console.log(text.length);
	} else console.log('Ingrese un texto');
};

export const ejercicioUno = () => textSize('Hello world');

/* TODO:
  1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/
