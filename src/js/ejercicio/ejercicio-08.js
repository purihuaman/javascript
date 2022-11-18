const deleteCharacterPattern = (wordPattern = '', patternToSearch = '') => {
	if (typeof wordPattern !== 'string' || wordPattern.length <= 0)
		return console.log('Ingrese un patrón de texto!.');
	if (typeof patternToSearch !== 'string' || patternToSearch.length <= 0)
		return console.log('Ingrese un patrón de texto a buscar!.');

	// const listNumbers = [];
	// wordPattern.split(', ').forEach((element) => {
	// 	element.split('').forEach((el) => {
	// 		if (typeof Number(el) === 'number' && Number(el) > 0) {
	// 			listNumbers.push(el);
	// 		}
	// 	});
	// });
	// console.log(listNumbers.join(', '));

	console.log(wordPattern.replace(new RegExp(patternToSearch, 'ig'), ''));
};

export const ejercicioOcho = () =>
	deleteCharacterPattern('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz');

/* TODO:
	8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
