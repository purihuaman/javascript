const repeatText = (text, numberRepeat) => {
	if (typeof text === 'string') {
		console.log(text.repeat(numberRepeat));
	} else console.log('Ingrese un texto');
};

export const ejercicioCuatro = () => repeatText('Hello world', 3);

/* TODO:
	4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/
