const numberConsonantsAndVowels = (text = '') => {
	if (typeof text !== 'string' || text.length <= 0)
		return console.log('Ingrese un texto!.');

	const regex = /[aeiouáéíóúäëïöü]/;
	let amountVowels = 0;
	let amountConsonants = 0;

	text
		.toLowerCase()
		.split('')
		.filter((el) => el !== ' ')
		.forEach((el) => {
			if (regex.test(el)) return amountVowels++;
			else return amountConsonants++;
		});

	console.log('Vocales:', amountVowels);
	console.log('Consonates:', amountConsonants);
};

export const ejercicioDieciocho = () =>
	numberConsonantsAndVowels('JavaScript JonMorcha');

/* TODO:
	18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/
