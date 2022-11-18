const palindrome = (text = '') => {
	if (typeof text !== 'string' || text.length <= 0)
		return console.warn('Ingrese un texto');

	const newText = text.toLowerCase().split('').reverse().join('');

	console.log(
		text.toLowerCase() === newText ? 'SI, es Palíndromo' : 'NO, es palíndromo'
	);
};

export const ejercicioSiete = () => palindrome('Salas');

/* TODO:
	7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/
