const textsArray = (text, separator) => {
	if (typeof text === 'string' && typeof separator === 'string') {
		console.log(text.split(separator));
	} else console.log('Ingrese un texto');
};

export const ejercicioTres = () => textsArray('hola que tal', ' ');

/* TODO:
	3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/
