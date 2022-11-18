const isName = (name = '') => {
	if (typeof name !== 'string' || name.length <= 1)
		return console.log('Ingrese un nombre verdadero!.');

	const regex = /^[a-zñaeiouáéíóúäëïöü\s]+$/g;

	if (name.length >= 2 && regex.test(name.toLowerCase())) {
		console.log(`El nombre "${name}" es verdadero`);
	} else {
		console.log(`El nombre "${name}" NO, es verdadero`);
	}
};

export const ejercicioDiecinueve = () => isName('puri');

/* TODO:
	19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/
